import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { ChefHat } from 'lucide-react';

interface FeatureItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    bgIcon: React.ReactNode;
}

const FeatureItem = ({ icon, title, description, bgIcon }: FeatureItemProps) => {
    return (
        <Card className="w-[350px] shadow-xl hover:shadow-2xl transition-all ring-0 px-1 text-center relative bg-accent">
            <CardHeader className="flex flex-col items-center pt-3">
                {icon}
                <CardTitle className="text-primary text-xl font-semibold">{title}</CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
                <CardDescription className="text-secondary-text text-md leading-relaxed">{description}</CardDescription>
            </CardContent>
            <div className="absolute -bottom-10 -right-10">
                {bgIcon}
            </div>
        </Card>
    )
}

export default FeatureItem