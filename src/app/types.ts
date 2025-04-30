export enum Role {
    PROFESSIONAL = 'PROFESSIONAL',
    USER = 'USER',
    ADMINISTRATOR = 'ADMINISTRATOR'
}

type ServiceZone = {
    id: string;
    userInfoId: string;
    serviceZoneId: string;
    serviceZone: {
        id: string;
        neighborhood: string;
        city: string;
        state: string;
    };
};

type AvailabilitySchedule = {
    id: string;
    dayOfWeek: string;
    startTime: string;
    endTime: string;
    userInfoId: string;
};

type Rating = {
    id: string;
    rating: number;
    comment?: string;
    createdAt?: Date;
    ratedBy: {
        nome: string;
        userInfo: {
            avatar: string;
        }
    }
};

type UserInfo = {
    id: string;
    userId: string;
    avatar: string;
    phoneNumber: string;
    price: number;
    bio: string;
    experience?: string;
    languages: string[];
    skills: string[];
    verificationStatus: 'VERIFIED' | 'PENDING' | 'REJECTED'; // Exemplo de enum, se necessário
    createdAt: string;
    updatedAt: string;
    serviceZones: ServiceZone[];
    availabilitySchedule: AvailabilitySchedule[];
    ratings?: Rating[];
};

export type User = {
    id: string;
    email: string;
    password: string;
    nome: string;
    role: 'USER' | 'PROFESSIONAL'; // Exemplo de enum, se necessário
    status: 'ACTIVE' | 'INACTIVE'; // Exemplo de enum, se necessário
    createdAt: string;
    updatedAt: string;
    userInfo: UserInfo;
};
