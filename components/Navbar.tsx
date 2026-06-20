import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Pencil, Plus } from 'lucide-react'

const Navbar = () => {
    return (
        <nav className='fixed top-0 left-0 z-50 w-full bg-white/10 backdrop-blur-lg border-b border-surface/20'>
            <div className="container mx-auto flex items-center justify-between py-5 text-primary-text">
                <Image src="/logo.png" alt="Logo" width={200} height={50} className="w-fit h-13" />
                <ul className="flex items-center justify-bwteen gap-10 text-md">
                    <li>
                        <Link className="text-primary-text hover:text-primary transition-all" href="/">Home</Link>
                    </li>
                    <li>
                        <Link className="text-primary-text hover:text-primary transition-all" href="/recipes">Explore</Link>
                    </li>
                    <li>
                        <Link className="text-primary-text hover:text-primary transition-all" href="/about">Profile</Link>
                    </li>
                    <li>
                        <Link href="/login">
                            <Button variant="hero" className='px-6 py-5 rounded-xl'>
                                <Plus size={20} /> Add Recipes
                            </Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar