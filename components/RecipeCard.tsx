import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Heart, Timer } from 'lucide-react'
import { Badge } from './ui/badge'
import { RecipeType } from '@/types/recipe'

export const recipes = [
    {
        id: 1,
        title: "Creamy Garlic Butter Shrimp",
        description: "Succulent shrimp in a rich garlic butter sauce",
        time: "20 mins",
        servings: 2,
        image: "/items/cake.png",
        slug: "creamy-garlic-butter-shrimp"
    },
    {
        id: 2,
        title: "Lemon Herb Roasted Chicken",
        description: "Juicy chicken with lemon and fresh herbs",
        time: "1 hour",
        servings: 4,
        image: "/items/noodles.png",
        slug: "lemon-herb-roasted-chicken"
    },
    {
        id: 3,
        title: "Vegetable Stir Fry",
        description: "Crispy vegetables in a savory sauce",
        time: "15 mins",
        servings: 2,
        image: "/items/spaghetti.png",
        slug: "vegetable-stir-fry"
    },
    {
        id: 4,
        title: "Chicken and Broccoli",
        description: "Tender chicken with crisp broccoli florets",
        time: "25 mins",
        servings: 3,
        image: "/items/ricebowl.png",
        slug: "chicken-and-broccoli"
    },
    {
        id: 5,
        title: "Tomato Basil Soup",
        description: "Classic homemade tomato soup",
        time: "30 mins",
        servings: 4,
        image: "/items/oatmeal.png",
        slug: "tomato-basil-soup"
    },
    {
        id: 6,
        title: "Spicy Thai Curry",
        description: "Aromatic curry with coconut milk and spices",
        time: "35 mins",
        servings: 4,
        image: "/items/pasta.png",
        slug: "spicy-thai-curry"
    },
    {
        id: 7,
        title: "Mushroom Risotto",
        description: "Creamy Arborio rice with earthy mushrooms",
        time: "40 mins",
        servings: 3,
        image: "/items/spaghetti.png",
        slug: "mushroom-risotto"
    },
    {
        id: 8,
        title: "Black Bean Burgers",
        description: "Hearty veggie burgers on a brioche bun",
        time: "30 mins",
        servings: 4,
        image: "/items/burger.png",
        slug: "black-bean-burgers"
    }
];

const RecipeCard = ({ recipe, isEdit }: { recipe: RecipeType, isEdit?: boolean }) => {

    return (
        <Link href={`/recipes/${recipe.id}`}>
            <Card key={recipe.id} className="bg-surface/50 hover:bg-surface/70 transition-colors pt-0 gap-2 group">
                <CardHeader className="p-0 relative">
                    <div className="p-0 relative overflow-hidden h-48">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${recipe.cover_img}`}
                            alt={recipe.title}
                            width={500}
                            height={300}
                            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="px-5 py-3">
                        <p className='text-primary'>{recipe.cuisine}</p>
                        <CardTitle className="text-lg font-semibold text-primary-text">{recipe.title}</CardTitle>
                        <Link href={`/users/${recipe.profiles?.username}`}>
                            <CardDescription className="text-xs flex items-center gap-2 mt-2">
                                <Image src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${recipe.profiles?.avatar}`} width={20} height={20} alt="Chef hat" className="h-5 w-5 rounded-full" />
                                <span className='font-semibold text-secondary-text'>{recipe.profiles?.name}</span>
                            </CardDescription>
                        </Link>
                    </div>


                    <Badge className="absolute top-4 right-4">{recipe.difficulty}</Badge>
                </CardHeader>
                <CardContent className="px-5 mt-auto">
                    <div className="flex items-center justify-between text-secondary-text">
                        <div className="flex items-center justify-center gap-1.5 font-semibold">
                            <span className="text-base">
                                <Timer className="h-4 w-4 text-primary" />
                            </span>
                            <span className="pt-0.5 text-xs">{recipe.preparation_time}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-rose-500 bg-rose-100 px-2 py-0.5 rounded-full">
                            {/* <Heart className="h-3.5 w-3.5 fill-rose-500" /> */}
                            <Heart className="h-3.5 w-3.5" />
                            <span className="text-xs">{recipe.servings}</span>
                        </div>
                    </div>
                </CardContent>
                {isEdit && (<CardFooter className="px-5 pb-5 pt-0 border-none">
                    <Link
                        href={`/profile/recipes/edit/${recipe.id}`}
                        className="w-full"
                    >
                        <Button size="lg" className="w-full border">
                            Update Recipe
                        </Button>
                    </Link>
                </CardFooter>
                )}
            </Card>
        </Link >
    )
}

export default RecipeCard