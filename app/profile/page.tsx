import RecipeCard from '@/components/RecipeCard';
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

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

const ProfileStats = ({ value, title }: { value: number, title: string }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h5 className="text-2xl font-bold text-primary-text/80">{value}</h5>
            <span className="text-secondary-text">{title}</span>
        </div>
    )
}

const Page = () => {
    return (
        <main className="flex min-h-screen flex-col ">
            <div className="h-72 w-full bg-primary/10 -skew-y-6 absolute top-0 left-0 right-0"></div>
            <div className="container mx-auto flex gap-4 mt-30">
                {/* Profile Card */}
                <Card className="px-5 py-6 relative h-fit w-[350px]">
                    <div className="h-20 w-full z-10 bg-primary/30 absolute top-0 left-0 right-0"></div>
                    <CardHeader className="flex flex-col items-center justify-center text-center z-20 pt-6">
                        <Image
                            src="https://picsum.photos/200"
                            height={85}
                            width={85}
                            alt='Profile Pic'
                            className='rounded-full'
                        />
                        <div className="flex flex-col items-center justify-center">
                            <CardTitle className="font-bold text-2xl text-primary-text">John Doe</CardTitle>
                            <h2 className="text-secondary-text leading-4">@johndoe</h2>
                        </div>
                        <p className="text-secondary-text py-2">I love cooking and sharing my recipes with the world. Lorem ipsum </p>
                    </CardHeader>
                    <CardContent className="flex justify-around">
                        <ProfileStats value={24} title="Recipes" />
                        <ProfileStats value={12} title="Followers" />
                        <ProfileStats value={8} title="Following" />
                    </CardContent>
                    <Button variant="default" size="lg">Edit Profile</Button>
                </Card>

                <div className="grow">
                    <h3 className="text-2xl text-primary-text font-bold mb-2">Published Recipes</h3>
                    <div className="grid grid-cols-4 gap-4">
                        {recipes.map((recipe) => (
                            <RecipeCard {...recipe} difficulty="easy" />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Page