export interface Account {
    id: string,
    userName: string,
    password: string,
}

export interface SessionToken {
    id: string,
    userName: string,
    valid: boolean,
    expirationDate: Date
}