import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { createSupabaseServerClient } from '@/lib/supabase/server-client';
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

const Page = async () => {
    // get profile information
    const supabase = await createSupabaseServerClient();
    const { data } = await supabase.auth.getUser();
    const { data: user } = await supabase.from('profiles').select('*').eq('id', data.user?.id).single();

    return (
        <main className="flex min-h-screen flex-col relative">
            <div className="w-full h-[250px] bg-primary/10 rounded-md relative overflow-hidden">
                <Image
                    src="/items/cake.png"
                    alt="Recipe"
                    fill
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="container mx-auto flex flex-col gap-4 mt-30 md:mt-10 px-20 absolute top-30">
                {/* Profile Card */}
                <Card className="px-5 py-6 relative h-fit w-full md:w-full gap-2">
                    
                </Card>

            </div>
        </main>
    )
}

export default Page