import { RankingResponse, UserInfoResponse } from "./Response";
export declare class ClientWithLogin {
    private apiKey;
    constructor(apiKey: string);
    getRanking<TCustomData = undefined>(tag?: string): Promise<RankingResponse<TCustomData>>;
    signup(id: string, password: string): Promise<void>;
    login(id: string, password: string): Promise<void>;
    getMyInfo<TCustomData = undefined>(): Promise<UserInfoResponse<TCustomData>>;
    updateMyCustomData<TCustomData>(password: string, customData?: TCustomData): Promise<void>;
    updateMyPassword(password: string, newPassword: string): Promise<void>;
    sendNewScore<T>(score: number, tag?: string, customData?: T): Promise<void>;
}
