import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Lock, Mail, Search, User } from 'lucide-react'
import React from 'react'

const Page = () => {
    return (
        <main className="h-screen flex items-center justify-center">
            <Card>
                <CardHeader>
                    <CardTitle className='text-center text-primary-text text-lg'>Create Your Account</CardTitle>
                    <CardDescription className='text-center'>Join RecipeVerse AI Today</CardDescription>
                </CardHeader>
                <CardContent>
                    <form action="">
                        <div className="grid gap-3">
                            <InputGroup className="max-w-xs rounded-sm">
                                <InputGroupInput placeholder="Full Name" />
                                <InputGroupAddon>
                                    <User />
                                </InputGroupAddon>
                            </InputGroup>
                            <InputGroup className="max-w-xs rounded-sm">
                                <InputGroupInput placeholder="Username" />
                                <InputGroupAddon>
                                    <User />
                                </InputGroupAddon>
                            </InputGroup>
                            <InputGroup className="max-w-xs rounded-sm">
                                <InputGroupInput placeholder="Email Address" />
                                <InputGroupAddon>
                                    <Mail />
                                </InputGroupAddon>
                            </InputGroup>
                            <InputGroup className="max-w-xs rounded-sm">
                                <InputGroupInput placeholder="Password" />
                                <InputGroupAddon>
                                    <Lock />
                                </InputGroupAddon>
                            </InputGroup>
                            <InputGroup className="max-w-xs rounded-sm">
                                <InputGroupInput placeholder="Confirm Password" />
                                <InputGroupAddon>
                                    <Lock />
                                </InputGroupAddon>
                            </InputGroup>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </main>
    )
}

export default Page