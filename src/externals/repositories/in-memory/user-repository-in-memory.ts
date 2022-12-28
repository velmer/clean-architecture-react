import { IUserRepository } from "../../../app/contracts/i-user-repository";
import { User } from "../../../entities/user";

export default class UserRepositoryInMemory implements IUserRepository {
  private users: User[] = [];

  create(user: User): Promise<User> {
    user.id = this.users.length + 1;
    this.users.push(user);
    return Promise.resolve(user);
  }

  getById(userId: number): Promise<User | null> {
    const userIndex = this.findUserIndexByUserId(userId);
    return Promise.resolve(userIndex !== -1 ? this.users[userIndex] : null);
  }

  delete(userId: number): Promise<void> {
    const userIndex = this.findUserIndexByUserId(userId);
    this.users.splice(userIndex, 1);
    return Promise.resolve();
  }

  listAll(): Promise<User[]> {
    return Promise.resolve(this.users);
  }

  deleteAll(): Promise<void> {
    this.users = [];
    return Promise.resolve();
  }

  private findUserIndexByUserId(userId: number) {
    return this.users.findIndex((user) => user.id === userId);
  }
}
