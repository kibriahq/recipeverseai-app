'use client'

import { Button } from './button'

const RecipeDeleteBtn = ({ id }: { id: string }) => {
    const handleDelete = () => {

    }
    return (
        <Button onClick={() => handleDelete} size="lg" variant="destructive" className="flex-1 cursor-pointer">
            Delete Recipe
        </Button>
    )
}

export default RecipeDeleteBtn