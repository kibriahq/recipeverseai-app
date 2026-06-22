"use client"
import { useAuth } from '@/context/AuthContext';
import { getSupabaseBrowserClient } from '@/lib/supabase/browser-client';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { toast } from 'react-toastify';

const layout = ({ children }: { children: React.ReactNode }) => {
    const supabase = getSupabaseBrowserClient();
    const { isAuth } = useAuth();
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession();

            if (!session) {
                toast.error("You are not logged in!");
                router.push("/");
                return;
            }

            console.log("Logged in user:", session.user);
        };

        checkAuth();
    }, [supabase, router]);


    return <div className="px-5 md:px-10">{children}</div>
}

export default layout