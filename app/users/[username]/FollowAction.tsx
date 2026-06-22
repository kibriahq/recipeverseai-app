"use client"

import { Button } from '@/components/ui/button'
import { CardContent } from '@/components/ui/card'
import { addFollow, getFollowers, getFollowing, isFollowingUser, unFollow } from '@/lib/actions/user'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const ProfileStats = ({ value, title }: { value: number, title: string }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h5 className="text-xl font-semibold text-primary-text/80">{value < 10 && value > 0 ? `0${value}` : value}</h5>
            <span className="text-secondary-text/80 text-xs">{title}</span>
        </div>
    )
}

const FollowAction = ({ recipesCount, userId, isMe }: { recipesCount: number, userId: string, isMe: boolean }) => {
    const [isFollowing, setIsFollowing] = useState(false);
    const [followers, setFollowers] = useState(0);
    const [following, setFollowing] = useState(0);

    const fetchIsFollowing = async () => {
        try {
            const isFlr = await isFollowingUser(userId);
            setIsFollowing(isFlr);
        } catch (error: any) {
            toast.error(error.message)
        }
    }

    const fetchFollowers = async () => {
        try {
            const flr = await getFollowers(userId);
            setFollowers(flr.length);
        } catch (error: any) {
            toast.error(error.message)
        }
    }

    const fetchFollowing = async () => {
        try {
            const flor = await getFollowing(userId);
            setFollowing(flor.length);
        } catch (error: any) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchIsFollowing();
        fetchFollowers();
        fetchFollowing();
    }, [])

    const handleFollow = async () => {
        try {
            if (isFollowing) {
                await unFollow(userId);
                toast.success("Unfollowed successfully!");
                setFollowers(followers - 1);
            } else {
                await addFollow(userId);
                toast.success("Followed successfully!");
                setFollowers(followers + 1);
            }
            setIsFollowing(!isFollowing)

        } catch (error: any) {
            toast.error(error.message);
        }
    }

    return (
        <>
            <CardContent className="flex justify-around md:justify-start md:gap-10 lg:gap-20 md:pl-[140px]">
                <ProfileStats value={recipesCount} title="Recipes" />
                <ProfileStats value={followers} title="Followers" />
                <ProfileStats value={following} title="Following" />
            </CardContent>
            {isMe ? (
                <div className="flex flex-col sm:flex-row justify-center md:justify-start w-full gap-2 mt-2 md:gap-2 lg:gap-5 md:pl-[140px] lg:pr-[20%]">
                    <Button asChild variant="outline" size="sm" className={`flex-1 h-10 py-2 text-sm border border-primary text-primary hover:text-primary-foreground hover:bg-primary`}>
                        <Link href="/profile">Go To Profile</Link>
                    </Button>
                </div>
            ) : (
                <div className="flex flex-col sm:flex-row justify-center md:justify-start w-full gap-2 mt-2 md:gap-2 lg:gap-5 md:pl-[140px] lg:pr-[20%]">
                    <Button onClick={handleFollow} variant="default" size="sm" className={`flex-1 h-10 py-2 text-sm border ${isFollowing ? "border-secondary-text bg-secondary-text hover:bg-secondary-text text-white" : "border-primary"}`}>
                        {isFollowing ? "Unfollow" : "Follow Now"}
                    </Button>
                </div>
            )}
        </>
    )
}

export default FollowAction