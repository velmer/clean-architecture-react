import { User } from "@/entities/user";
import { IUserRepository } from "@/app/contracts/i-user-repository";
import { IUseCase } from "../i-use-case";

class GetUserById implements IUseCase {
  async execute({
    userId,
    userRepository,
  }: {
    userId: number;
    userRepository: IUserRepository;
  }): Promise<User | null> {
    const persistedUserOrNull = await userRepository.getById(userId);
    return persistedUserOrNull;
  }
}

export default new GetUserById();
