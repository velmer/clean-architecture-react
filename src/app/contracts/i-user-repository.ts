import { User } from '@/entities/user';

export interface IUserRepository {
  create(user: User): Promise<User>;

  getById(userId: number): Promise<User | null>;

  listAll(): Promise<User[]>;

  delete(userId: number): Promise<void>;

  deleteAll(): Promise<void>;
}
