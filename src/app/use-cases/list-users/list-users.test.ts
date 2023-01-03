import { IUserRepository } from '@/app/contracts/i-user-repository';
import { CreateUser } from '@/app/use-cases/create-user';
import { User } from '@/entities/user';
import UserRepositoryInMemory from '@/externals/repositories/in-memory/user-repository-in-memory';

import { ListUsers } from '.';

describe('ListUsers', () => {
  let userRepository: IUserRepository;

  beforeAll(() => {
    userRepository = new UserRepositoryInMemory();
  });

  it('lists users', async () => {
    const firstUser = {
      name: 'Testevaldo Silva',
      email: 'testevaldo@gmail.com',
    } as User;

    const secondUser = {
      name: 'Testevalda Silva',
      email: 'testevalda@gmail.com',
    } as User;

    await CreateUser.execute({
      user: firstUser,
      userRepository,
    });

    await CreateUser.execute({
      user: secondUser,
      userRepository,
    });

    const persistedUsers = await ListUsers.execute({
      userRepository,
    });

    expect(persistedUsers).toHaveLength(2);
    expect(persistedUsers[0]).toMatchObject({
      id: 1,
      name: 'Testevaldo Silva',
      email: 'testevaldo@gmail.com',
    });
    expect(persistedUsers[1]).toMatchObject({
      id: 2,
      name: 'Testevalda Silva',
      email: 'testevalda@gmail.com',
    });
  });
});
