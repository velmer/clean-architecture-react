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
    try {
      await ValidateUser.execute({ user });
    } catch (userValidationError: any) {
      const firstErrorField = Object.keys(userValidationError)[0];
      const firstErrorMessage = userValidationError[firstErrorField];
      throw new Error(firstErrorMessage);
    }

    return userRepository.create(user);
  }
}

export default new CreateUser();
