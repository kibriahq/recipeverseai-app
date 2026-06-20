import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Lock, Mail, Search, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Page = () => {
    return (
        <main className="h-screen flex items-center justify-center">
            <div className="h-72 w-full bg-primary/10 -skew-y-6 absolute -top-5 left-0 right-0"></div>
            <Card className="rounded-xl border-surface/20 w-md relative z-10 mt-20">
                <CardHeader className='py-3'>
                    <CardTitle className='text-center text-primary-text font-semibold text-2xl'>Login Your Account</CardTitle>
                    <CardDescription className='text-center text-sm'>Get access to your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form action="">
                        <div className="grid gap-3 w-full">

                            <InputGroup className="rounded-sm h-10">
                                <InputGroupInput placeholder="Email Address" />
                                <InputGroupAddon>
                                    <Mail />
                                </InputGroupAddon>
                            </InputGroup>
                            <InputGroup className="rounded-sm h-10">
                                <InputGroupInput placeholder="Password" />
                                <InputGroupAddon>
                                    <Lock />
                                </InputGroupAddon>
                            </InputGroup>

                            <div className="flex w-full items-center justify-between flex-row-reverse">
                                <p className="text-primary-text text-sm font-semibold">Forgot Password?</p>
                                <p className="text-primary-text text-left">Don't have an account? <Link href="/signup" className="text-primary">Sign up</Link></p>
                            </div>
                            <Button variant="hero" className="w-full rounded-sm h-10 mb-2">Login</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </main>
    )
}

export default Page