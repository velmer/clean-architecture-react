import { User, UserValidation } from '@/entities/user';

import { IUseCase } from '../i-use-case';

class ValidateUser implements IUseCase {
  execute({ user }: { user: User }): UserValidation {
    const userValidation = {} as UserValidation;

    const nameValidation = validateName(user.name);
    const emailValidation = validateEmail(user.email);

    if (nameValidation) {
      userValidation.name = nameValidation;
    }
    if (emailValidation) {
      userValidation.email = emailValidation;
    }

    return userValidation;
  }
}

function validateName(name: string): string | null {
  if (!name) {
    return 'Name is required.';
  }
  if (name.toLocaleLowerCase() === 'error') {
    return 'Name is invalid.';
  }
  if (name.length < 3 || name.length > 50) {
    return 'Name must have at least 3 and at most 50 characters.';
  }
  return null;
}

function validateEmail(email: string): string | null {
  if (!email) {
    return 'Email is required.';
  }
  if (!email.includes('@')) {
    return 'Email is invalid.';
  }
  return null;
}

export default new ValidateUser();
