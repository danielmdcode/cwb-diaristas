'use client';

import { User } from "@/app/types";
import { Star } from "lucide-react";
import { useRatings } from "../Profile.model";

interface RatingsDisplayProps {
    professionalDetail: User;
}

export default function RatingsDisplay({ professionalDetail }: RatingsDisplayProps) {
    const { average, totalRatings } = useRatings({ professionalDetail });

    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <Star 
                    key={i} 
                    size={15} 
                    fill={i <= rating ? "#eab308" : "none"} 
                    className={i <= rating ? "text-yellow-500" : "text-gray-300"}
                />
            );
        }
        return stars;
    };

    return (
        <div className="flex items-bottom gap-2">
            <div className="flex">
                {renderStars(average)}
            </div>
            <p className="text-xs">{totalRatings} avaliações</p>
        </div>
    );
} 