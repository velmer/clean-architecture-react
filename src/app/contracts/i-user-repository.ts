import { IHttpClient } from "./i-http-client";
import { User } from "../../entities/user";

export interface IUserRepository {
  readonly httpClient: IHttpClient;

  create(user: User): Promise<User>;

  listUsers(): Promise<User[]>;

  delete(userId: number): Promise<void>;
}
