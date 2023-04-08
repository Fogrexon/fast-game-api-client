import { getFetch, postFetch, putFetch } from "./fetchExtend";


export class Client {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  public async getRanking(tag?: string) {
    const query = tag ? { tag } : undefined;
    return await getFetch(this.apiKey, '/ranking', query);
  }

  public async sendNewScore<T>(userid: string, score: number, tag?: string, customData?: T) {
    return await postFetch(this.apiKey, '/score', { userid, score, tag, customData });
  }
}
