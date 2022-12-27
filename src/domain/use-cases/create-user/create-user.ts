import { IUserRepository } from "../../contracts/i-user-repository";
import { User } from "../../entities/user";
import { IUseCase } from "../i-use-case";
import { ValidateUser } from "../validate-user";

class CreateUser implements IUseCase {
  async execute({
    user,
    userRepository,
  }: {
    user: User;
    userRepository: IUserRepository;
  }): Promise<User> {
    const userValidation = ValidateUser.execute({ user });

    if (Object.keys(userValidation).length !== 0) {
      throw new Error();
    }

    return userRepository.create(user);
  }
}

export default new CreateUser();
