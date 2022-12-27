import { IUserRepository } from "../../contracts/i-user-repository";
import { User } from "../../entities/user";
import { IUseCase } from "../i-use-case";

class ListUsers implements IUseCase<User[]> {
  execute({
    userRepository,
  }: {
    userRepository: IUserRepository;
  }): Promise<User[]> {
    return userRepository.listUsers();
  }
}

export default new ListUsers();
