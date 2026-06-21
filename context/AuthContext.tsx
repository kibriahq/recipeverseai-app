'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { getSupabaseBrowserClient } from '@/lib/supabase/browser-client';

const supabase = getSupabaseBrowserClient();

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  isAuth: boolean;
  updateUser: () => void;
  setAuth: (session: Session) => void;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  async function getUser(session: Session) {
    const { data: user } = await supabase.from('profiles').select('*').eq('id', session?.user?.id).single();
    if (user) {
      setUser(user);
      setIsAuth(true);
    }
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user?.id) {
        getUser(session)
        setSession(session);
      }

      setLoading(false);
    });

  }, []);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_, session) => {
      setIsAuth(true)
      setUser(session?.user ?? null);
      setSession(session);
      setLoading(false);
    })

    return () => data.subscription.unsubscribe();
  }, [supabase]);

  const setAuth = (session: Session) => {
    setIsAuth(true);
    setSession(session);
    setUser(session?.user ?? null);
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

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, session, loading, isAuth, setAuth, updateUser, signOut }}>
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