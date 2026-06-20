import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Heart, Timer } from 'lucide-react'
import { Badge } from './ui/badge'

interface RecipeCardProps {
    id: string|number;
    image: string;
    title: string;
    difficulty: string;
    time: string;
    servings: number;
    slug: string;
}

const RecipeCard = ({ id, image, title, difficulty, time, servings, slug }: RecipeCardProps) => {
    return (
        <Card key={id} className="bg-surface/50 hover:bg-surface/70 transition-colors pt-0 gap-2 group">
            <CardHeader className="p-0 relative">
                <div className="p-0 relative overflow-hidden h-48">
                    <Image
                        src={image}
                        alt={title}
                        width={500}
                        height={300}
                        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
                <div className="px-5 py-3">
                    <CardTitle className="text-lg font-semibold text-primary-text">{title}</CardTitle>
                    <CardDescription className="text-xs flex items-center gap-2 mt-2">
                        <Image src={image} width={20} height={20} alt="Chef hat" className="h-5 w-5 rounded-full" />
                        <span className='font-semibold text-secondary-text'>By Chef Name</span>
                    </CardDescription>
                </div>


                <Badge variant="success" className="absolute top-4 right-4">Easy</Badge>
            </CardHeader>
            <CardContent className="px-5 mt-auto">
                <div className="flex items-center justify-between text-secondary-text">
                    <div className="flex items-center justify-center gap-1.5 font-semibold">
                        <span className="text-base">
                            <Timer className="h-4 w-4 text-primary" />
                        </span>
                        <span className="pt-0.5 text-xs">{time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-rose-500 bg-rose-100 px-2 py-0.5 rounded-full">
                        {/* <Heart className="h-3.5 w-3.5 fill-rose-500" /> */}
                        <Heart className="h-3.5 w-3.5" />
                        <span className="text-xs">{servings}</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="px-5 pb-5 pt-0 border-none">
                <Link
                    href={`/recipes/${slug}`}
                    className="w-full"
                >
                    <Button size="lg" className="w-full border">
                        View Recipe
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default RecipeCard