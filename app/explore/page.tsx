"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ChefHat, Filter, Search, SlidersHorizontal, Users } from 'lucide-react'
import { getClientBuildManifest } from 'next/dist/client/route-loader'
import { useState } from 'react'

const Page = () => {
    const [searchType, setSearchType] = useState<'recipe' | 'user'>('recipe')
    const [searchKeyword, setSearchKeyword] = useState('')
    const [cuisine, setCuisine] = useState('')
    const [difficulty, setDifficulty] = useState('')

    const [showFilter, setShowFilter] = useState(false);

    const supabase = getClientBuildManifest();

    const handleSearch = async () => {
        console.log(searchKeyword, searchType, cuisine, difficulty);
        if (searchType === 'recipe') {
         
        }
    }

    return (
        <div className="flex flex-col pt-15 md:pt-0 pb-20 md:pb-10 px-5 md:px-10">
            <div className="mt-3 mb-6">
                <h2 className="text-2xl font-bold text-primary-text">Find recipes and cooks</h2>
                <p className="mt-1 max-w-2xl text-sm text-secondary-text">
                    Search across recipes and users, then narrow the feed by cuisine and difficulty.
                </p>
            </div>

            <div className="flex items-center w-full">
                <div className="flex border border-secondary-text/10 rounded-md rounded-r-none border-r-0 my-2 w-full">
                    <Input value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} className='pl-4 h-11 rounded-none border-0 focus-visible:ring-0' placeholder="Search recipes and users" />
                    <div className="relative">
                        <select
                            id="search-type-filter"
                            value={searchType}
                            onChange={(e) => setSearchType(e.target.value as 'recipe' | 'user')}
                            className="h-11 w-18 sm:w-26 border-r border-secondary-text/10 rounded-none bg-background sm:px-3 sm:pr-10 text-sm text-primary-text "
                        >
                            <option value="recipe">Recipe</option>
                            <option value="user">User</option>
                        </select>
                    </div>
                </div>
                <Button className="h-12 rounded-none px-5 md:px-10 rounded-r-md border order-primary" onClick={handleSearch}>Search</Button>
            </div>

            <div className="flex justify-between items-center my-1 px-1">
                <p className="">
                    <span className='font-semibold text-primary-text'>Filters: </span>
                    {cuisine || difficulty ? <></> : <span className='text-sm text-secondary-text'>No filters applied</span>}
                    {difficulty && <span className='ml-1 capitalize text-sm'>{difficulty},</span>}
                    {cuisine && <span className='ml-1 capitalize text-sm'>{cuisine}</span>}
                </p>
                <p className="text-primary-text font-semibold underline cursor-pointer" onClick={() => setShowFilter(!showFilter)}> Add Filter</p>
            </div>

            <section className={` rounded-md border border-secondary-text/10 bg-white p-4 shadow-sm md:p-5 ${showFilter ? 'block' : 'hidden'}`}>

                <div className="flex items-center justify-between">
                    <p className='text-secondary-text font-normal mb-3'>Add Filter</p>
                    <Button onClick={() => setShowFilter(!showFilter)} className='cursor-pointer'>Apply</Button>
                </div>

                <div className={`mt-4 grid grid-cols-2 gap-4 md:grid-cols-2 ${searchType === 'user' ? 'hidden' : ''}`}>
                    <div className="space-y-2">
                        <Input className='h-11' placeholder='Cuisine' value={cuisine} onChange={(e) => setCuisine(e.target.value)} />
                    </div>

                    <div className="space-y-2">
                        <div className="relative">
                            <select
                                id="difficulty-filter"
                                value={difficulty}
                                onChange={(e) => setDifficulty(e.target.value)}
                                className="h-11 w-full appearance-none rounded-md border border-border/80 bg-background px-3 pr-10 text-sm text-primary-text outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                            >
                                <option value="">Any difficulty</option>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                            <SlidersHorizontal size={18} className="hidden md:block pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-secondary-text" />
                        </div>
                    </div>
                </div>

            </section>


        </div>
    )
}

export default Page
