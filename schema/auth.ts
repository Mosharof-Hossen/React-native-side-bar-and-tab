export interface User {
    id: number;
    email: string;
    username: string;
    full_name: string;
    mobile_number: string;
    role: string;
    is_active: boolean;
    is_email_verified: boolean;
    created_at: string;
}

export interface LoginPayload {
    email: string;
    password: string;
}

export interface LoginResponseData {
    success: boolean;
    message: string;
    data: {
        user: User;
        access_token: string;
        token_type: string;
    } | null;
    meta?: null
}