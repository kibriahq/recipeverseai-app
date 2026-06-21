import { Button } from '@/components/ui/button'
import { createSupabaseServerClient } from '@/lib/supabase/server-client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link';
import ProfileImg from './ProfileImg';
import RecipeCard from '@/components/RecipeCard';
import { toast } from 'react-toastify';

const ProfileStats = ({ value, title }: { value: number, title: string }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h5 className="text-xl font-semibold text-primary-text/80">{value}</h5>
            <span className="text-secondary-text/80 text-xs">{title}</span>
        </div>
    )
}

const Page = async () => {
    // get profile information
    const supabase = await createSupabaseServerClient();
    const { data } = await supabase.auth.getUser();
    const { data: user } = await supabase.from('profiles').select('*').eq('id', data.user?.id).single();

    // const {data: recipesx} = await supabase.from("recipes").select("*").eq("user_id", data.user?.id);
    const { data: recipes, error } = await supabase
        .from('recipes')
        .select(`*,profiles (username,name,avatar)`)
        .eq('user_id', data.user?.id)
        .order('created_at', { ascending: false });

    if(error) {
        toast.error(error.message)
    }


    return (
        <main className="flex min-h-screen flex-col ">
            <div className="h-72 w-full bg-primary/10 -skew-y-6 absolute top-0 left-0 right-0"></div>
            <div className="container mx-auto flex flex-col gap-4 mt-30 md:mt-10">
                {/* Profile Card */}
                <Card className="px-5 py-6 relative h-fit w-full md:w-full gap-2">
                    <div className="h-20 w-full z-10 bg-primary/30 absolute top-0 left-0 right-0 md:hidden"></div>
                    <CardHeader className="flex flex-col md:flex-row items-center md:justify-start justify-center text-center gap-5 z-20 pt-6">

                        <ProfileImg user={user} />
                        <div className="flex flex-col items-center md:items-start justify-center md:gap-1">
                            <CardTitle className="font-bold text-2xl md:text-2xl text-primary-text">{user.name}</CardTitle>
                            <h2 className="text-secondary-text leading-4 md:text-md">@{user.username}</h2>
                            <p className="text-secondary-text py-2 md:text-md md:text-left">{user.bio}</p>
                        </div>

                    </CardHeader>
                    <CardContent className="flex justify-around md:justify-start md:gap-10 lg:gap-20 md:pl-[140px]">
                        <ProfileStats value={24} title="Recipes" />
                        <ProfileStats value={12} title="Followers" />
                        <ProfileStats value={8} title="Following" />
                    </CardContent>
                    <div className="flex justify-center md:justify-start w-full gap-2 mt-2 md:gap-2 lg:gap-5 md:pl-[140px]">
                        <Link href="/profile/edit"><Button variant="default" size="sm" className='w-36 lg:w-64 h-10'>Edit Profile</Button></Link>
                        <Link href="/profile/password"><Button variant="outline" size="sm" className='w-36 lg:w-64 h-10 text-secondary border-secondary hover:text-white hover:bg-secondary'>Change Password</Button></Link>
                    </div>
                </Card>

                {recipes && recipes.length > 0 ? (
                    <div className="grow">
                        <h3 className="text-2xl text-primary-text font-bold my-5 md:my-4">Published Recipes</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
                            {recipes.map((recipe) => (
                                <RecipeCard key={recipe.id} recipe={recipe} isEdit={true} />
                            ))}
                        </div>
                    </div>
                ) : ''}
            </div>
        </main>
    )
}

export default Page