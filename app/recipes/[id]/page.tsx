import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { createSupabaseServerClient } from '@/lib/supabase/server-client';
import { CircleCheckBig, CookingPot, Earth, HandPlatter, Puzzle, Sailboat, Timer, User } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';



const ProfileStats = ({ value, title }: { value: number, title: string }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h5 className="text-xl font-semibold text-primary-text/80">{value}</h5>
            <span className="text-secondary-text/80 text-xs">{title}</span>
        </div>
    )
}

const TimeCard = ({ value, title, icon }: { value: string, title: string, icon: any }) => {
    return (
        <div className="flex gap-3 items-center justify-center">
            {icon}
            <div className="flex flex-col">
                <span className="text-xs text-primary-text/80 font-light uppercase ">{title}</span>
                <span className="text-md font-semibold text-primary-text/80 pt-0.5">{value}</span>
            </div>
        </div>
    )
}


const PreparatonStep = ({ step, title, description }: { step: string, title: string, description: string }) => {
    return <div className="flex gap-3 items-start justify-start">
        <h2 className="text-2xl font-semibold text-primary">{step}</h2>
        <div className="flex flex-col">
            <span className="text-lg text-primary-text/80 font-semibold">{title}</span>
            <span className="text-secondary-text/80 pt-0.5 ">{description}</span>
        </div>
    </div>
}

const IngredientStep = ({ step, title, description }: { step: string, title: string, description: string }) => {
    return <div className="flex gap-3 items-start justify-start">
        <h2 className="text-2xl font-semibold text-primary">
            <CircleCheckBig size={20} />
        </h2>
        <div className="flex flex-col ">
            <span className="text-base text-primary-text/80 font-semibold">{title}</span>
            <span className="text-secondary-text/80 pt-0.5 ">- 50gm</span>
        </div>
    </div>
}

const Page = async () => {
    // get profile information
    const supabase = await createSupabaseServerClient();
    const { data } = await supabase.auth.getUser();
    const { data: user } = await supabase.from('profiles').select('*').eq('id', data.user?.id).single();

    return (
        <main className="flex min-h-screen flex-col relative">
            <div className="w-full h-[300px] bg-primary/10 rounded-md relative overflow-hidden">
                <Image
                    src="/items/cake.png"
                    alt="Recipe"
                    fill
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="mx-auto flex flex-col gap-4 mt-30 md:mt-10 px-20 absolute top-40 w-full">
                {/* Profile Card */}
                <Card className="px-5 py-6 relative h-fit w-full gap-2 rounded-sm ring-0 shadow">
                    <CardHeader className="">
                        <CardTitle className="text-primary-text font-semibold text-xl">Lemon Herb Roasted Chicken</CardTitle>
                        <div className="text-xs flex items-center gap-2 mt-2">
                            <Image src="/avatar.png" width={30} height={30} alt="Chef hat" className="h-8 w-8 rounded-full" />
                            <div className="flex gap-1">
                                <span className='font-semibold text-secondary-text text-md'>By Chef Name, </span>
                                <span className='font-semibold text-secondary-text/80 text-md'> On 21 July 2026</span>
                            </div>
                        </div>
                        <div className="flex gap-1 pt-2">
                            <Badge variant="default" className='bg-primary/20 text-primary'>Italian</Badge>
                            <Badge variant="default" className='bg-primary/20 text-primary'>Medium</Badge>
                            <Badge variant="default" className='bg-primary/20 text-primary'>30 Mins</Badge>
                            <Badge variant="default" className='bg-primary/20 text-primary'>5 Steps</Badge>
                        </div>
                    </CardHeader>

                    {/* Preparation time
                    Cooking time
                    Servings
                    Difficulty
                    Cuisine */}

                    <CardContent className='flex flex-col py-2'>
                        <p className="text-secondary-text text-base leading-7">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio harum error natus dolores dolor. Doloribus cum atque non consequatur quibusdam explicabo culpa inventore fuga, quo ex aut omnis minima repudiandae, perferendis consequuntur repellendus ducimus magnam. Facere, ab corporis culpa officiis voluptatum quasi temporibus debitis, enim suscipit, praesentium a recusandae? Ut!
                        </p>
                    </CardContent>
                </Card>

                <Card className='bg-primary/10 rounded-sm border-none ring-0 py-8 my-4'>
                    <CardContent className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
                        <TimeCard
                            icon={<Timer size={25} className='text-primary' />}
                            title="Prep Time"
                            value="10 Mins"
                        />
                        <TimeCard
                            icon={<CookingPot size={25} className='text-primary' />}
                            title="Cook Time"
                            value="20 Mins"
                        />
                        <TimeCard
                            icon={<User size={25} className='text-primary' />}
                            title="Servings"
                            value="4 People"
                        />
                        <TimeCard
                            icon={<Puzzle size={25} className='text-primary' />}
                            title="Difficulty"
                            value="Medium"
                        />
                        <TimeCard
                            icon={<Earth size={25} className='text-primary' />}
                            title="Cuisine"
                            value="Italian"
                        />

                        {/* Steps */}
                    </CardContent>
                </Card>

                <div className="grid grid-cols-5 gap-5">
                    <Card className='col-span-3 rounded-sm ring-0 shadow p-3'>
                        <CardHeader className='pt-2 pb-3'>
                            <CardTitle className='flex gap-2 text-xl text-primary'><HandPlatter /> Preparations</CardTitle>
                        </CardHeader>
                        <CardContent className='flex flex-col gap-2 pb-4'>
                            <PreparatonStep step="01" title="Prepare the chicken" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ex facilis nesciunt, inventore ea exercitationem dolor rem similique recusandae enim ipsum dolorem mollitia, nihil in." />
                            <PreparatonStep step="02" title="Do another thing" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ex facilis nesciunt, inventore ea exercitationem dolor rem similique recusandae enim ipsum dolorem mollitia, nihil in." />
                            <PreparatonStep step="03" title="Do third thing" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ex facilis nesciunt, inventore ea exercitationem dolor rem similique recusandae enim ipsum dolorem mollitia, nihil in." />
                            <PreparatonStep step="04" title="Prepare the chicken" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ex facilis nesciunt, inventore ea exercitationem dolor rem similique recusandae enim ipsum dolorem mollitia, nihil in." />
                            <PreparatonStep step="05" title="Prepare the chicken" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ex facilis nesciunt, inventore ea exercitationem dolor rem similique recusandae enim ipsum dolorem mollitia, nihil in." />
                            <PreparatonStep step="06" title="Prepare the chicken" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ex facilis nesciunt, inventore ea exercitationem dolor rem similique recusandae enim ipsum dolorem mollitia, nihil in." />
                            <PreparatonStep step="07" title="Prepare the chicken" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ex facilis nesciunt, inventore ea exercitationem dolor rem similique recusandae enim ipsum dolorem mollitia, nihil in." />
                        </CardContent>
                    </Card>
                    <Card className='col-span-2 rounded-sm ring-0 shadow p-3'>
                        <CardHeader className='pt-2 pb-3'>
                            <CardTitle className='flex gap-2 text-xl text-primary'><Sailboat /> Ingradients</CardTitle>
                        </CardHeader>
                        <CardContent className='flex flex-col gap-2 pb-4'>
                            <IngredientStep step="01" title="Prepare the chicken" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ex facilis nesciunt, inventore ea exercitationem dolor rem similique recusandae enim ipsum dolorem mollitia, nihil in." />
                            <IngredientStep step="02" title="Do another thing" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ex facilis nesciunt, inventore ea exercitationem dolor rem similique recusandae enim ipsum dolorem mollitia, nihil in." />
                            <IngredientStep step="03" title="Do third thing" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ex facilis nesciunt, inventore ea exercitationem dolor rem similique recusandae enim ipsum dolorem mollitia, nihil in." />
                            <IngredientStep step="04" title="Prepare the chicken" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ex facilis nesciunt, inventore ea exercitationem dolor rem similique recusandae enim ipsum dolorem mollitia, nihil in." />
                            <IngredientStep step="05" title="Prepare the chicken" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ex facilis nesciunt, inventore ea exercitationem dolor rem similique recusandae enim ipsum dolorem mollitia, nihil in." />
                            <IngredientStep step="06" title="Prepare the chicken" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ex facilis nesciunt, inventore ea exercitationem dolor rem similique recusandae enim ipsum dolorem mollitia, nihil in." />
                            <IngredientStep step="07" title="Prepare the chicken" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ex facilis nesciunt, inventore ea exercitationem dolor rem similique recusandae enim ipsum dolorem mollitia, nihil in." />
                        </CardContent>
                    </Card>
                </div>

                <div className="h-[200px]">asdf</div>
            </div>

        </main>
    )
}

export default Page