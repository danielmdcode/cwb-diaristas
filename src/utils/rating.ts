export interface Rating {
    rating: number;
    comment?: string;
    createdAt?: Date;
}

export const calculateAverageRating = (rates: Rating[]): number => {
    if (!rates || rates.length === 0) return 0;
    
    const sum = rates.reduce((total, rates) => total + rates.rating, 0);
    return sum / rates.length;
};

export const formatRating = (rating: number): string => {
    return rating.toFixed(1);
}; 