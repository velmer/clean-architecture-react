import { IUserRepository } from "../../contracts/i-user-repository";
import GetUserById from "../get-user-by-id";
import { IUseCase } from "../i-use-case";

class DeleteUser implements IUseCase {
  async execute({
    userId,
    userRepository,
  }: {
    userId: number;
    userRepository: IUserRepository;
  }): Promise<void> {
    const persistedUser = await GetUserById.execute({ userId, userRepository });

    if (!persistedUser) {
      throw new Error("User does not exist");
    }

    return userRepository.delete(userId);
  }
}

export default new DeleteUser();
