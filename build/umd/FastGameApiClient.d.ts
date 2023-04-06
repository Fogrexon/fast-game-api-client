export declare class ClientWithLogin {
    private apiKey;
    constructor(apiKey: string);
    getRanking(tag?: string): Promise<void>;
    signup(id: string, password: string): Promise<void>;
    login(id: string, password: string): Promise<void>;
    getMyInfo(): Promise<void>;
    updateMyCustomData<T>(password: string, customData?: T): Promise<void>;
    updateMyPassword(password: string, newPassword: string): Promise<void>;
    sendNewScore<T>(score: number, tag?: string, customData?: T): Promise<void>;
}
