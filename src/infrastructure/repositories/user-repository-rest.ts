import { IUserRepository } from "../../domain/contracts/i-user-repository";
import { User } from "../../domain/entities/user";
import { IHttpClient } from "../http-client/i-http-client";

export class UserRepositoryRest implements IUserRepository {
  readonly httpClient: IHttpClient;

  constructor(httpClient: IHttpClient) {
    this.httpClient = httpClient;
  }

  create(user: User): Promise<User> {
    return this.httpClient.post("/users", user);
  }

  listUsers(): Promise<User[]> {
    return this.httpClient.get("/users");
  }

  delete(userId: number): Promise<void> {
    return this.httpClient.delete(`/users/${userId}`);
  }
}
