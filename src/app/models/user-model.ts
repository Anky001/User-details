export interface LoginDetails {
    email: string;
    password: string;
}

export interface AuthResponse {
    userId: number;
    jwt: string;
    userName: string;
    userRole?: UserRole;
}


export type UserRole = 'admin' | 'user';

export interface AddressDetails {
    houseNumber: string;
    street: string;
    postalCode: string;
}

export interface UserDetails {
    userId: number;
    userName: string;
    userDOB: string;
    userAddress: AddressDetails;
    userRole?: UserRole;
}

export interface ProfileDetails {
    userId: number;
    userName: string;
    userRole: string;
    userLocation: string;
    userTechStack: string[];
    userIntro: string;
}
