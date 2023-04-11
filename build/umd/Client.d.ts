import { RankingResponse } from "./Response";
export declare class Client {
    private apiKey;
    constructor(apiKey: string);
    getRanking<TCustomData = undefined>(tag?: string): Promise<RankingResponse<TCustomData>>;
    sendNewScore<T>(userid: string, score: number, tag?: string, customData?: T): Promise<void>;
}
