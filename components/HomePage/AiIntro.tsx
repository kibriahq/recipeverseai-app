import { Check } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

const AiIntro = () => {
    return (
        <section className="h-screen bg-background">
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center'>
                    <div className='flex flex-col gap-4'>
                        <Image
                            src='/ai.jpg'
                            width={500}
                            height={500}
                            alt='AI'
                            className='rounded-2xl'
                        />
                    </div>
                    <div>
                        <h2 className='text-4xl md:text-5xl font-bold text-primary-text my-5'>
                            Cook Smarter with <br/> <span className="text-secondary">AI Guidance</span>
                        </h2>
                        <p className='text-secondary-text'>Our AI doesn't just give you recipes; it understands them. Get instant advice on flavor pairings, real-time adjustments based on your available ingredients.</p>

                        <div className="flex flex-col my-10 gap-5">
                            <div className="flex gap-5">
                                <div className="flex justify-center items-center gap-2 bg-secondary/20 p-2 rounded-md h-8 w-8 mt-1">
                                    <Check className='text-secondary' />
                                </div>
                                <div className="">
                                    <h4 className="text-primary-text font-semibold text-lg">Ingredient Swapper</h4>
                                    <p className="text-secondary-text">Missing an item? AI finds the perfect pantry replacement.</p>
                                </div>
                            </div>

                            <div className="flex gap-5">
                                <div className="flex justify-center items-center gap-2 bg-secondary/20 p-2 rounded-md h-8 w-8 mt-1">
                                    <Check className='text-secondary' />
                                </div>
                                <div className="">
                                    <h4 className="text-primary-text font-semibold text-lg">Nutrition Analyzer</h4>
                                    <p className="text-secondary-text">Track calories, protein, carbs, and fats for any recipe instantly.</p>
                                </div>
                            </div>

                            <div className="flex gap-5">
                                <div className="flex justify-center items-center gap-2 bg-secondary/20 p-2 rounded-md h-8 w-8 mt-1">
                                    <Check className='text-secondary' />
                                </div>
                                <div className="">
                                    <h4 className="text-primary-text font-semibold text-lg">Leftover Rescue</h4>
                                    <p className="text-secondary-text">Turn random ingredients and leftovers into delicious meals.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AiIntro