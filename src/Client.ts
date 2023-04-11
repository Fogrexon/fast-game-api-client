import { RankingResponse } from "./Response";
import { getFetch, postFetch } from "./fetchExtend";


export class Client {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  public async getRanking<TCustomData = undefined>(tag?: string): Promise<RankingResponse<TCustomData>> {
    const query = tag ? { tag } : undefined;
    return await getFetch(this.apiKey, '/ranking', query) as RankingResponse<TCustomData>;
  }

  public async sendNewScore<T>(userid: string, score: number, tag?: string, customData?: T): Promise<void> {
    return await postFetch(this.apiKey, '/score', { userid, score, tag, customData });
  }
}
