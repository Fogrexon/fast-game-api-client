import { getFetch, postFetch, putFetch } from "./fetchExtend";


export class ClientWithLogin {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  public async getRanking(tag?: string) {
    const query = tag ? { tag } : undefined;
    await getFetch(this.apiKey, '/ranking', query);
  }

  public async signup(id: string, password: string) {
    await postFetch(this.apiKey, '/signup', { id, password });
  }

  public async login(id: string, password: string) {
    await postFetch(this.apiKey, '/login', { id, password });
  }

  public async getMyInfo() {
    await getFetch(this.apiKey, '/me');
  }

  public async updateMyCustomData<T>(password: string, customData?: T) {
    await putFetch(this.apiKey, '/me/ranking', { password, customData });
  }

  public async updateMyPassword(password: string, newPassword: string) {
    await putFetch(this.apiKey, '/me/password', { password, newPassword });
  }

  public async sendNewScore<T>(score: number, tag?: string, customData?: T) {
    await postFetch(this.apiKey, '/score', { score, tag, customData });
  }
}
