export declare class Client {
    private apiKey;
    constructor(apiKey: string);
    getRanking(tag?: string): Promise<void>;
    sendNewScore<T>(userid: string, score: number, tag?: string, customData?: T): Promise<void>;
}
