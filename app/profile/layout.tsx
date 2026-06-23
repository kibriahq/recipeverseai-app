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
        if (!isAuth) {
            toast.error('Please login to access this page');
            router.push('/login');
        }
    }, [isAuth, router]);

    if (!isAuth) {
        return null;
    }

    return <div className="px-5 md:px-10">{children}</div>
}

export default layout