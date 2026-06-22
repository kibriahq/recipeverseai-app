import RecipeCard from "@/components/RecipeCard";
import { createSupabaseServerClient } from "@/lib/supabase/server-client";

export default async function Home() {
  const supabase = await createSupabaseServerClient();
  const { data: recipes, error } = await supabase
    .from('recipes')
    .select(`*,profiles (username,name,avatar)`)
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }
  return (
    <>
      <div className="flex flex-col pt-15 md:pt-0 pb-20 md:pb-10 px-5 md:px-10">
        <h2 className="text-2xl font-bold mb-6 mt-3 text-primary-text">Explore Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
          {recipes.map((recipe) => (
            <RecipeCard recipe={recipe} isEdit={false} />
          ))}
        </div>

      </div>
    </>
  );
}
