'use client'

import Link from 'next/link'
import { Button } from './button'

const RecipeDeleteBtn = ({ id }: { id: string }) => {
    const handleDelete = () => {

    }
    return (
        <Button size="lg" variant="destructive" asChild className="flex-1 cursor-pointer">
            Delete Recipe
        </Button>
    )
}

export default RecipeDeleteBtn