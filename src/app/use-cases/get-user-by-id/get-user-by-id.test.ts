import { IUserRepository } from "@/app/contracts/i-user-repository";
import { CreateUser } from "@/app/use-cases/create-user";
import { User } from "@/entities/user";
import UserRepositoryInMemory from "@/externals/repositories/in-memory/user-repository-in-memory";
import GetUserById from "./get-user-by-id";

describe("GetUserById", () => {
  let userRepository: IUserRepository;

  beforeAll(() => {
    userRepository = new UserRepositoryInMemory();
  });

  afterEach(() => {
    userRepository.deleteAll();
  });

  it("returns a user", async () => {
    const user = {
      name: "Testevaldo Silva",
      email: "testevaldo@gmail.com",
    } as User;

    await CreateUser.execute({ user, userRepository });

    const persistedUser = await GetUserById.execute({
      userId: 1,
      userRepository,
    });

    expect(persistedUser).toMatchObject({
      id: 1,
      name: "Testevaldo Silva",
      email: "testevaldo@gmail.com",
    });
  });

  it("returns null when user does not exist", async () => {
    const persistedUser = await GetUserById.execute({
      userId: 1,
      userRepository,
    });

    expect(persistedUser).toEqual(null);
  });
});
