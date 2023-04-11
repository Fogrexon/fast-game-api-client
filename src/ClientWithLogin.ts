import { RankingResponse, UserInfoResponse } from "./Response";
import { getFetch, postFetch, putFetch } from "./fetchExtend";


export class ClientWithLogin {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  public async getRanking<TCustomData = undefined>(tag?: string): Promise<RankingResponse<TCustomData>> {
    const query = tag ? { tag } : undefined;
    return await getFetch(this.apiKey, '/ranking', query) as RankingResponse<TCustomData>;
  }

  public async signup(id: string, password: string): Promise<void> {
    return await postFetch(this.apiKey, '/signup', { id, password });
  }

  public async login(id: string, password: string): Promise<void> {
    return await postFetch(this.apiKey, '/login', { id, password });
  }

  public async getMyInfo<TCustomData = undefined>(): Promise<UserInfoResponse<TCustomData>> {
    return await getFetch(this.apiKey, '/me') as UserInfoResponse<TCustomData>; 
  }

  public async updateMyCustomData<TCustomData>(password: string, customData?: TCustomData): Promise<void> {
    return await putFetch(this.apiKey, '/me/ranking', { password, customData });
  }

  public async updateMyPassword(password: string, newPassword: string): Promise<void> {
    return await putFetch(this.apiKey, '/me/password', { password, newPassword });
  }

  public async sendNewScore<T>(score: number, tag?: string, customData?: T): Promise<void> {
    return await postFetch(this.apiKey, '/score', { score, tag, customData });
  }
}
