import { User } from '@/entities/user';
import UserRepositoryInMemory from '@/externals/repositories/in-memory/user-repository-in-memory';

import CreateUser from './create-user';

describe('CreateUser', () => {
  it('creates a user', async () => {
    const user = {
      name: 'Testevaldo Silva',
      email: 'testevaldo@gmail.com',
    } as User;

    const persistedUser = await CreateUser.execute({
      user,
      userRepository: new UserRepositoryInMemory(),
    });

    expect(persistedUser).toMatchObject({
      id: 1,
      name: 'Testevaldo Silva',
      email: 'testevaldo@gmail.com',
    });
  });

  describe('validating fields', () => {
    it('throws an error when name is empty', async () => {
      const user = { name: '', email: 'testevaldo@gmail.com' } as User;

      try {
        await CreateUser.execute({
          user,
          userRepository: new UserRepositoryInMemory(),
        });
      } catch (error) {
        if (error instanceof Error) {
          expect(error.message).toEqual('Name is required.');
        }
      }
    });

    it('throws an error when email is empty', async () => {
      const user = { name: 'Testevaldo Silva', email: '' } as User;

      try {
        await CreateUser.execute({
          user,
          userRepository: new UserRepositoryInMemory(),
        });
      } catch (error) {
        if (error instanceof Error) {
          expect(error.message).toEqual('Email is required.');
        }
      }
    });
  });
});
