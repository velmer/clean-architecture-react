import { IUserRepository } from "../../contracts/i-user-repository";
import { IUseCase } from "../i-use-case";

class DeleteUser implements IUseCase<void> {
  execute({
    userId,
    userRepository,
  }: {
    userId: number;
    userRepository: IUserRepository;
  }): Promise<void> {
    return userRepository.delete(userId);
  }
}

export default new DeleteUser();
