"use client";


import { ArrowUpRight, Plus } from "lucide-react";
import { Button } from "../ui/button";



export default function SleekSaasHero({ }) {


    return (
        <section
            className="relative px-4 overflow-hidden bg-surface min-h-screen h-screen">
            <div className="max-w-7xl mx-auto h-full relative">
                <div className="flex flex-col items-center justify-center text-center relative z-10 h-full">

                    <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full shadow-sm bg-white border border-gray-200">
                        <span
                            className="w-2 h-2 rounded-full animate-pulse bg-primary"
                        />
                        <span
                            className="text-xs font-medium uppercase tracking-wide text-gray-500"
                        >
                            Tending Now
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-8 text-primary-text">
                        Master the Art of <br /> Cooking {" "}
                        <span className="font-serif italic text-secondary-text">
                            with
                        </span>{" "}
                        <span className="relative inline-block text-primary">
                            AI
                            <svg
                                className="absolute -bottom-2 left-0 w-full h-3 opacity-30"
                                viewBox="0 0 100 10"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M0 5 Q 50 10 100 5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                />
                            </svg>
                        </span>
                    </h1>


                    <p className="text-md md:text-lg 2xl:text-xl max-w-xl 2xl:max-w-2xl mb-10 leading-relaxed text-secondary-text">
                        Discover a world of flavors guided by our intelligent culinary engine. Manage your kitchen, find community-loved secrets, and elevate every meal with personalized AI step-by-step guidance.
                    </p>


                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="xl" variant="hero">
                            Start Exploring
                            <ArrowUpRight className="w-5 h-5" />
                        </Button>
                        <Button size="xl" variant="hero" className="bg-transparent text-secondary border-secondary hover:text-white hover:bg-secondary">
                            Add Your Recipe
                            <Plus className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl -z-10 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle, #2EC4B6 15 0%, transparent 70%)`,
                    }}
                />

                {/* <img
                    src="/hero/pan.png"
                    className="h-[100px] md:h-[250px] absolute top-[20%] left-[7%] -rotate-35"
                />
                <img
                    src="/hero/tomato.png"
                    className="h-[100px] md:h-[150px] absolute bottom-[10%] left-[7%] -rotate-35"
                />
                <img
                    src="/hero/cooker.png"
                    className="h-[100px] md:h-[150px] absolute bottom-[10%] right-[5%] rotate-20"
                />

                   <img
                    src="/hero/Decore.png"
                    className="h-[200px] md:h-[250px] absolute bottom-[30%] right-[5%] rotate-20"
                />

                <div className="absolute top-[10%] right-[17%] z-20">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#5C677D" d="M37.6,-47.1C40.4,-42.4,28.6,-22.7,28.3,-7.5C28,7.7,39.2,18.4,41.1,32C43.1,45.6,35.9,62.1,22,72.3C8.1,82.5,-12.4,86.4,-27.3,79.2C-42.2,71.9,-51.4,53.5,-59.5,36C-67.5,18.6,-74.3,2.2,-66.4,-6.3C-58.5,-14.8,-35.9,-15.4,-22.4,-18.2C-8.9,-21,-4.5,-26,6.5,-33.7C17.4,-41.4,34.8,-51.8,37.6,-47.1Z" transform="translate(100 100)" />
                    </svg>
                </div> */}
            </div>
        </section>
    );
}
