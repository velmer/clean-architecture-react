import { IUserRepository } from "../domain/contracts/i-user-repository";
import { AxiosAdapter } from "./http-client/axios-adapter";
import { IHttpClient } from "./http-client/i-http-client";
import { UserRepositoryRest } from "./repositories/user-repository-rest";

export interface IDependencyContainer {
  repositories: {
    userRepository: IUserRepository;
  };
  httpClient: IHttpClient;
}

const httpClient: IHttpClient = new AxiosAdapter();

export const DC: IDependencyContainer = {
  repositories: {
    userRepository: new UserRepositoryRest(httpClient),
  },
  httpClient,
};
