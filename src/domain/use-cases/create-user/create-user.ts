import { IUserRepository } from "../../contracts/i-user-repository";
import { User } from "../../entities/user";
import { IUseCase } from "../i-use-case";

class CreateUser implements IUseCase<User> {
  execute({
    user,
    userRepository,
  }: {
    user: User;
    userRepository: IUserRepository;
  }): Promise<User> {
    return userRepository.create(user);
  }
}

export default new CreateUser();
