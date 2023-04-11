export interface Score<TCustomData = undefined> {
    userid: string;
    score: number;
    tag?: string;
    customData?: TCustomData;
}
export interface RankingResponse<TCustomData = undefined> {
    timestamp: string;
    ranking: Score<TCustomData>[];
}
export interface UserInfoResponse<TCustomData = undefined> {
    timestamp: string;
    id: string;
    customData: TCustomData;
}
