import React from 'react'
import { Button } from './ui/button'
import { Sparkles } from 'lucide-react'

const AiButton = () => {
  return (
    <Button className='rounded-full w-14 h-14 fixed bottom-10 right-10 bg-primary hover:bg-primary/80'>
        <Sparkles className='h-20 w-20 text-white' />
    </Button>
  )
}

export default AiButton