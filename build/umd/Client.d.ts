export declare class Client {
    private apiKey;
    constructor(apiKey: string);
    getRanking(tag?: string): Promise<any>;
    sendNewScore<T>(userid: string, score: number, tag?: string, customData?: T): Promise<any>;
}
