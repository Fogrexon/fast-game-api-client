import { getFetch, postFetch, putFetch } from "./fetchExtend";


export class FastGameApiClientWithID {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  public async getRanking(tag?: string) {
    await getFetch(this.apiKey, '/ranking', { tag });
  }

  public async sendNewScore<T>(userid: string, score: number, tag?: string, customData?: T) {
    await postFetch(this.apiKey, '/score', { userid, score, tag, customData });
  }
}
