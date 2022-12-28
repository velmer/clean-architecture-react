import { IUserRepository } from "../../app/contracts/i-user-repository";
import { User } from "../../entities/user";
import { IHttpClient } from "../../app/contracts/i-http-client";

export class UserRepositoryRest implements IUserRepository {
  readonly httpClient: IHttpClient;

  constructor(httpClient: IHttpClient) {
    this.httpClient = httpClient;
  }

  create(user: User): Promise<User> {
    return this.httpClient.post("/users", user);
  }

  listAll(): Promise<User[]> {
    return this.httpClient.get("/users");
  }

  delete(userId: number): Promise<void> {
    return this.httpClient.delete(`/users/${userId}`);
  }

  deleteAll(): Promise<void> {
    return this.httpClient.delete("/users/");
  }
}
