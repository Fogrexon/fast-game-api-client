export declare class ClientWithLogin {
    private apiKey;
    constructor(apiKey: string);
    getRanking(tag?: string): Promise<any>;
    signup(id: string, password: string): Promise<any>;
    login(id: string, password: string): Promise<any>;
    getMyInfo(): Promise<any>;
    updateMyCustomData<T>(password: string, customData?: T): Promise<any>;
    updateMyPassword(password: string, newPassword: string): Promise<any>;
    sendNewScore<T>(score: number, tag?: string, customData?: T): Promise<any>;
}
