import { IHttpClient } from '@/app/contracts/i-http-client';
import { IUserRepository } from '@/app/contracts/i-user-repository';
import { User } from '@/entities/user';

export class UserRepositoryRest implements IUserRepository {
  readonly httpClient: IHttpClient;

  constructor(httpClient: IHttpClient) {
    this.httpClient = httpClient;
  }

  create(user: User): Promise<User> {
    return this.httpClient.post('/users', user) as Promise<User>;
  }

  getById(userId: number): Promise<User | null> {
    return this.httpClient.get(`/users/${userId}`) as Promise<User | null>;
  }

  listAll(): Promise<User[]> {
    return this.httpClient.get('/users') as Promise<User[]>;
  }

  delete(userId: number): Promise<void> {
    return this.httpClient.delete(`/users/${userId}`) as Promise<void>;
  }

  deleteAll(): Promise<void> {
    return this.httpClient.delete('/users/') as Promise<void>;
  }
}
