import { UserRole } from "../common/enum/UserRole";

export interface User {
    id: number;
    userName: string;
    displayName: string;
    email: string;
    password: string;
    avatar: string;
    userRole: UserRole;
}