
export interface LoginResponse {
    user:         User;
    access_token: string;
    token_type:   string;
}

export interface User {
    id:                number;
    name:              string;
    email:             string;
    email_verified_at: null;
    created_at:        Date;
    updated_at:        Date;
}
