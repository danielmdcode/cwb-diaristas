"use client";

import { User } from "@/app/types";
import { calculateAverageRating, formatRating, Rating } from "@/utils/rating";
import { useState } from "react";

interface UseRatingsProps {
    professionalDetail: User;
}

interface RatingsState {
    average: number;
    formattedAverage: string;
    totalRatings: number;
}

export const useRatings = ({ professionalDetail }: UseRatingsProps): RatingsState => {
    const [ratingsState] = useState<RatingsState>(() => {
        const ratings = professionalDetail.userInfo.ratings || [];
        const average = calculateAverageRating(ratings as unknown as Rating[]);

        console.log('ratings', ratings);
        console.log('average', average);
        return {
            average,
            formattedAverage: formatRating(average),
            totalRatings: ratings.length
        };
    });

    return ratingsState;
};

type UseProfileReturn = {
    selectedTime: string | null;
    handleTimeSelect: (time: string) => void;
}

export function useProfile(): UseProfileReturn {
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const handleTimeSelect = (time: string) => {
        setSelectedTime(time);
    };

    return {
        selectedTime,
        handleTimeSelect
    };
} 