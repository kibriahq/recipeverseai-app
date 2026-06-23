'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { getSupabaseBrowserClient } from '@/lib/supabase/browser-client';
import { getFollowers, getFollowing, getRecipes } from '@/lib/actions/user';
import { toast } from 'react-toastify';

const supabase = getSupabaseBrowserClient();

type UserType = {
  id: string;
  email: string;
  name: string;
  username: string;
  avatar: string;
}

interface AuthContextType {
  user: UserType | null;
  session: Session | null;
  loading: boolean;
  isAuth: boolean;
  recipeCount: number;
  followerCount: number;
  followingCount: number;
  q: string;
  defineQ: (q: string) => void;
  updateUser: () => void;
  setAuth: (session: Session) => void;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserType | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  const [recipeCount, setRecipeCount] = useState(0);
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);

  const [q, setQ] = useState('');

  async function getUser(session: Session) {
    const { data: user } = await supabase.from('profiles').select('*').eq('id', session?.user?.id).single();
    if (user) {
      setUser(user);
      // setIsAuth(true);
    }
  }

  async function setUserCounts(id: string) {
    if(id) {
      try {
        const recipes = await getRecipes(id);
        const followers = await getFollowers(id);
        const following = await getFollowing(id);
  
        setRecipeCount(recipes.length);
        setFollowerCount(followers.length);
        setFollowingCount(following.length);
      } catch (error: any) {
        toast.error(error.message)
      }
    }
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user?.id) {
        setIsAuth(true);
        getUser(session);
        setSession(session);
      } else {
        setIsAuth(false);
        setUser(null);
        setSession(null);
      }
      
      setLoading(false);
    });

  }, []);

  useEffect(() => {
    setUserCounts(user?.id!)
  }, [user]);

  const setAuth = async (session: Session) => {
    setLoading(true);
    const { data: user } = await supabase.from('profiles').select('*').eq('id', session?.user?.id).single();
    if (user) {
      setUser(user);
      setIsAuth(true);
    }
    setUserCounts(session?.user?.id as string)
    setSession(session);
    setLoading(false);
  }

  const updateUser = () => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user?.id) {
        getUser(session)
        setSession(session);
      }

      setLoading(false);
    });
  }

  // const updateUserAvatar = (avatar: string) => {
  //   setUser({
  //     ...user,
  //     avatar
  //   });
  // }

  const defineQ = (q: string) => {
    setQ(q);
  }

  const signOut = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem("sb-access-token");
    localStorage.removeItem("sb-refresh-token");
    localStorage.removeItem("sb-refresh-token-ts");
    setIsAuth(false);
    setUser(null);
    setSession(null);
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, session, loading, isAuth, recipeCount, followerCount, followingCount, q, defineQ, setAuth, updateUser, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}