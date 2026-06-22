"use client";

import { Heart, Loader2 } from 'lucide-react'
import { RecipeType } from '@/types/recipe'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { addFav, getRecipeFavs, isFavRecipe, removeFav } from '@/lib/actions/recipe-fav';
import { useAuth } from '@/context/AuthContext';

const FavBtn = ({ recipe }: { recipe: RecipeType }) => {
    const [loading, setLoading] = useState(true);
    const [favs, setFavs] = useState<number>(0);
    const [isFav, setIsFav] = useState<boolean>(false);
    const { isAuth } = useAuth();

    async function fetchFavs() {
        try {
            const res = await getRecipeFavs(recipe.id!);
            setFavs(res.length);

            const checkFav = await isFavRecipe(recipe.id!);
            if (checkFav) {
                setIsFav(true)
            } else {
                setIsFav(false)
            }
        } catch (error: any) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchFavs();
    }, []);

    const handleFav = async () => {
        if (!isAuth) return toast.error("You are not logged in to perform this action");
        setIsFav(!isFav)
        setFavs(isFav ? favs - 1 : favs + 1)
        try {
            if (isFav) {
                await removeFav(recipe.id!)
            } else {
                await addFav(recipe.id!)
            }
        } catch (error: any) {
            setIsFav(isFav)
            setFavs(favs);
            toast.error(error.message)
        }
    }

    if (loading) {
        return <div className="flex items-center gap-1.5 text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
            <Loader2 className="animate-spin h-3.5 w-3.5 cursor-pointer" />
        </div>
    }

    return (
        <div onClick={handleFav} className="flex items-center gap-1.5 text-rose-500 bg-rose-100 px-2 py-0.5 rounded-full cursor-pointer">
            {isFav ? <Heart className="h-3.5 w-3.5 fill-rose-500 cursor-pointer" /> : <Heart className="h-3.5 w-3.5 cursor-pointer" />}
            <span className="text-xs">{favs}</span>
        </div>
    )
}

export default FavBtn