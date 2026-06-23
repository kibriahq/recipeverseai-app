import RecipeCard from "@/components/RecipeCard";
import { getFeedRecipes } from "@/lib/actions/recipe";

export default async function Home() {
  const recipes = await getFeedRecipes();
  
  return (
    <>
      <div className="flex flex-col pt-15 md:pt-0 pb-20 md:pb-10 px-5 md:px-10">
        <h2 className="text-2xl font-bold mb-6 mt-3 text-primary-text">Recipe Feed</h2>
        {recipes.length !== 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} isEdit={false} />
            ))}
          </div>
        ): (
          <div className="flex h-[200px] w-full items-center justify-center pt-30">
            <p className="text-secondary-text/80">Nothing here to show yet!</p>
          </div>
        )}

      </div>
    </>
  );
}
