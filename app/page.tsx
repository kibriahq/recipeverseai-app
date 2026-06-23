import { getFeedRecipes } from "@/lib/actions/recipe";
import RecipeFeed from "@/components/RecipeFeed";

export default async function Home() {
  const initialRecipes = await getFeedRecipes(0);

  return (
    <div className="flex flex-col pt-15 md:pt-0 pb-20 md:pb-10 px-5 md:px-10">
      <h2 className="text-2xl font-bold mb-6 mt-3 text-primary-text">Recipe Feed</h2>
      <RecipeFeed initialRecipes={initialRecipes} />
    </div>
  );
}