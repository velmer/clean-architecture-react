import { User } from "../../entities/user";

export interface IUserRepository {
  create(user: User): Promise<User>;

  listAll(): Promise<User[]>;

  delete(userId: number): Promise<void>;

  deleteAll(): Promise<void>;
}
