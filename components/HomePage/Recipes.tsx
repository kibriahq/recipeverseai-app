import React from 'react'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Heart, Timer } from 'lucide-react'
import { Badge } from '../ui/badge'

const recipes = [
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

const Recipes = () => {
    return (
        <section className="relative z-10 overflow-hidden bg-surface py-16 md:py-24">
            {/* Background Décor */}
            <div className="absolute left-0 top-1/4 hidden h-96 w-[700px] translate-x-[-35%] rounded-full bg-primary/10 blur-[100px] md:block" />
            <div className="absolute right-0 bottom-0 hidden h-96 w-[500px] translate-x-[35%] rounded-full bg-secondary/10 blur-[100px] md:block" />

            <div className="container mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 backdrop-blur-md">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        <span className="ml-2 text-sm font-medium text-primary">Discover Recipes</span>
                    </div>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                        Latest Collections
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                        Explore curated recipes for every diet and occasion.
                    </p>
                    <Link href="/explore" className='w-full flex items-center justify-center pt-2 text-primary'>View All  <ChevronRight /></Link>
                </div>

                {/* Recipe Cards Grid */}
                <div className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-4">
                    {recipes.map((recipe) => (
                        <Card key={recipe.id} className="bg-surface/50 hover:bg-surface/70 transition-colors pt-0 gap-2">
                            <CardHeader className="p-0 relative">
                                <Image
                                    src={recipe.image}
                                    alt={recipe.title}
                                    width={500}
                                    height={300}
                                    className="h-48 w-full object-cover"
                                />
                                <div className="px-5 py-3">
                                    <CardTitle className="text-lg font-semibold text-primary-text">{recipe.title}</CardTitle>
                                    <CardDescription className="text-xs flex items-center gap-2">
                                        <Image src={recipe.image} width={20} height={20} alt="Chef hat" className="h-5 w-5 rounded-full" />
                                        <span className='font-semibold text-secondary-text'>By Chef Name</span>
                                    </CardDescription>
                                </div>


                                <Badge variant="success" className="absolute top-4 right-4">Easy</Badge>
                            </CardHeader>
                            <CardContent className="px-5 mt-auto">
                                <div className="flex items-center justify-between text-secondary-text">
                                    <div className="flex items-center justify-center gap-1.5">
                                        <span className="text-base">
                                            <Timer size={20} />
                                        </span>
                                        <span className="font-medium">{recipe.time}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 pr-1">
                                        <span className="text-sm text-muted-foreground">{recipe.servings}</span>
                                        <span className="font-medium">
                                            <Heart className="text-primary" size={20} />
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="px-5 pb-5 pt-0 border-none">
                                <Link
                                    href={`/recipes/${recipe.slug}`}
                                    className="w-full"
                                >
                                    <Button size="lg" className="w-full border">
                                        View Recipe
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Recipes