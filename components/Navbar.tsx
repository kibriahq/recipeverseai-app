import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Astroid, Grid, Home, LayoutPanelLeft, Pencil, PencilRuler, Plus, Search, Sparkles, User } from 'lucide-react'
import { InputGroup, InputGroupAddon, InputGroupInput } from './ui/input-group'

const Navbar = () => {
    return (
        <>
            <nav className='hidden md:block sticky top-0 z-50 w-full bg-white/90 backdrop-blur-lg border-b border-surface/20'>
                <div className="h-20 flex items-center justify-between text-primary-text px-10">
                    <InputGroup className="h-10 w-[60%] rounded-full">
                        <InputGroupInput placeholder="Search Recipes" />
                        <InputGroupAddon>
                            <Search />
                        </InputGroupAddon>
                    </InputGroup>

                    <Link href="/profile/recipes/add">
                        <Button variant="hero" className='px-6 py-5 rounded-xl'>
                            <Plus size={20} /> Add Recipes
                        </Button>
                    </Link>
                </div>
            </nav>
            <div className='fixed md:hidden top-0 left-0 right-0 z-50 h-16 flex items-center justify-between text-primary-text px-5 bg-white/90 backdrop-blur-lg border-b border-surface/20'>
                <Image src="/logo.png" alt="Logo" width={200} height={50} className="w-fit h-10" />
            </div>
            <nav className='fixed md:hidden bottom-0 left-0 right-0 z-50 h-16 bg-white/90 backdrop-blur-lg border-b border-surface/20'>
                <ul className='w-full grid grid-cols-5 justify-center items-center px-3 h-full'>
                    <li className='mx-auto'>
                        <Link href="/" className='text-sm w-full flex items-center gap-0 text-primary-text/80 hover:text-primary rounded-none transition-all duration-150 flex-col'>
                            <Home size={22} className='font-normal' />
                            <span className='font-normal'>Feed</span>
                        </Link>
                    </li>
                    <li className='mx-auto'>
                        <Link href="/" className='text-sm w-full flex items-center gap-0 text-primary-text/80 hover:text-primary rounded-none transition-all duration-150 flex-col'>
                            <Search size={22} className='font-normal' />
                            <span className='font-normal'>Explore</span>
                        </Link>
                    </li>
                    <li className='mx-auto'>
                        <Link href="/" className='text-sm flex items-center justify-center gap-0 text-white hover:text-primary rounded-full transition-all duration-150 flex-col bg-primary h-11 w-11'>
                            <Plus size={22} className='font-normal' />
                        </Link>
                    </li>
                    <li className='mx-auto'>
                        <Link href="/" className='text-sm w-full flex items-center gap-0 text-primary-text/80 hover:text-primary rounded-none transition-all duration-150 flex-col'>
                            <Astroid size={22} className='font-normal' />
                            <span className='font-normal'>Assistant</span>
                        </Link>
                    </li>
                    <li className='mx-auto'>
                        <Link href="/profile" className='text-sm w-full flex items-center gap-0 text-primary-text/80 hover:text-primary rounded-none transition-all duration-150 flex-col'>
                            <User size={22} className='font-normal' />
                            <span className='font-normal'>Profile</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar