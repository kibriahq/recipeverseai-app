"use client"
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    const {isAuth} = useAuth();
    const router = useRouter();
    if(!isAuth) {
        router.push('/login');
    }
    return children
}

export default layout