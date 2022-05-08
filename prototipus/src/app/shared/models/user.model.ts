
export interface User {
    documentReference?: string;
    userName: string;
    email: string;
    password: string;
    phone: string;
    orderDocRef?: string[];
    admin: boolean;
}
