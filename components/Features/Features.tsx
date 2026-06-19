import { Astroid, ChefHat, Search, UserCheck } from 'lucide-react'
import FeatureItem from './FeatureItem'


const Features = () => {
    return (
        <section className="h-screen container mx-auto flex flex-col justify-center gap-10">
            <div className="w-1/2 mx-auto text-center">
                <h2 className="text-5xl font-semibold text-primary-text">
                    Our Features
                </h2>
                <p className="text-primary-text mt-5">
                    Write your own recipes, see what other cooks are making, follow the ones whose food you'd actually cook again, and lean on AI when a recipe needs adjusting.
                </p>
            </div>

            <div className="flex gap-4">
                <FeatureItem
                    icon={
                        <div className="w-14 h-14 rounded-xl bg-blue-500/50 flex justify-center items-center my-3">
                            <ChefHat className="w-8 h-8 text-blue-500" />
                        </div>
                    }
                    title="Build your recipe box"
                    description="Write, edit, and organise your own recipes, ingredients, steps, photos and all, and keep them exactly the way you cook them."
                    bgIcon={
                        <ChefHat size={200} className="text-secondary-text/10" />
                    }
                />
                <FeatureItem
                    icon={
                        <div className="w-14 h-14 rounded-xl bg-purple-500/50 flex justify-center items-center my-3">
                            <Search className="w-8 h-8 text-purple-500" />
                        </div>
                    }
                    title="Discover what's cooking"
                    description="Search recipes and creators by ingredient, cuisine, or name, and find your next meal instead of scrolling for one."
                    bgIcon={
                        <Search size={200} className="text-secondary-text/10" />
                    }
                />
                <FeatureItem
                    icon={
                        <div className="w-14 h-14 rounded-xl bg-green-500/50 flex justify-center items-center my-3">
                            <UserCheck className="w-8 h-8 text-green-500" />
                        </div>
                    }
                    title="Follow the cooks you trust"
                    description="Like the recipes that work and follow the people who keep making them, so your feed fills up with food worth repeating."
                    bgIcon={
                        <UserCheck size={200} className="text-secondary-text/10" />
                    }
                />
                <FeatureItem
                    icon={
                        <div className="w-14 h-14 rounded-xl bg-secondary/50 flex justify-center items-center my-3">
                            <Astroid className="w-8 h-8 text-secondary" />
                        </div>
                    }
                    title="Ask your AI sous-chef"
                    description="Stuck mid-recipe? Ask for a substitution, a serving-size scale-up, or a timing fix, without leaving the page."
                    bgIcon={
                        <Astroid size={200} className="text-secondary-text/10" />
                    }
                />
            </div>
        </section>
    )
}

export default Features