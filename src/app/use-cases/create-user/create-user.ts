import { IUserRepository } from '@/app/contracts/i-user-repository';
import { User, UserValidation } from '@/entities/user';

import { IUseCase } from '../i-use-case';
import { ValidateUser } from '../validate-user';

class CreateUser implements IUseCase {
  async execute({ user, userRepository }: { user: User; userRepository: IUserRepository }): Promise<User> {
    const userValidation = ValidateUser.execute({ user });

    if (hasError(userValidation)) {
      throw new Error(getFirstErrorMessage(userValidation));
    }

    return userRepository.create(user);
  }
}

function hasError(userValidation: UserValidation): boolean {
  return Object.keys(userValidation).length !== 0;
}

function getFirstErrorMessage(userValidation: UserValidation): string | undefined {
  if (!hasError(userValidation)) {
    return undefined;
  }
  const firstErrorKey = Object.keys(userValidation)[0] as keyof UserValidation;
  return userValidation[firstErrorKey];
}

export default new CreateUser();
