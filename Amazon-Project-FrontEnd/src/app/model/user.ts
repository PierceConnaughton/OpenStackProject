export interface User {

    userId: string;
    authId?:string;
    name?: string;
    permissionLevel?: Number;
    appToken?: string;
    email: string;    
    
}

export interface SpecialUser {

    userId: string;
    authId:string;
    name: string;
    permissionLevel: Number;
    appToken: string;
    email: string;    
    
}