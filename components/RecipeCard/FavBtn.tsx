"use client";

import { Heart } from 'lucide-react'
import { RecipeType } from '@/types/recipe'

const FavBtn = ({ recipe }: { recipe: RecipeType }) => {
    return (
        <div className="flex items-center gap-1.5 text-rose-500 bg-rose-100 px-2 py-0.5 rounded-full">
            {/* <Heart className="h-3.5 w-3.5 fill-rose-500" /> */}
            <Heart className="h-3.5 w-3.5" />
            <span className="text-xs">0</span>
        </div>
    )
}

export default FavBtn