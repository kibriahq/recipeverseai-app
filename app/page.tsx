import AiIntro from "@/components/HomePage/AiIntro";
import Features from "@/components/HomePage/Features/Features";
import SleekSaasHero from "@/components/HomePage/Hero";
import Recipes from "@/components/HomePage/Recipes";
import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/components/RecipeCard";

export default function Home() {
  return (
    <>
      <div className="flex flex-col pt-15 md:pt-0 pb-20 md:pb-10">
        <h2 className="text-2xl font-bold mb-6 mt-3 text-primary-text">Explore Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
          {recipes.map((recipe) => (
            <RecipeCard {...recipe} difficulty='easy' />
          ))}
        </div>

      </div>
    </>
  );
}
