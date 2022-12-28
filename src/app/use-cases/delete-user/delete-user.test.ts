/* eslint-disable jest/no-conditional-expect */
import { DeleteUser } from ".";
import { User } from "../../../entities/user";
import UserRepositoryInMemory from "../../../externals/repositories/in-memory/user-repository-in-memory";
import { IUserRepository } from "../../contracts/i-user-repository";
import { CreateUser } from "../create-user";

describe("DeleteUser", () => {
  let userRepository: IUserRepository;

  beforeAll(() => {
    userRepository = new UserRepositoryInMemory();
  });

  it("deletes a user", async () => {
    const user = {
      name: "Testevaldo Silva",
      email: "testevaldo@gmail.com",
    } as User;

    await CreateUser.execute({ user, userRepository });

    const persistedUser = await DeleteUser.execute({
      userId: 1,
      userRepository,
    });

    expect(persistedUser).toBeUndefined();
  });
});
