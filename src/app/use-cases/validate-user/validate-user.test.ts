import { User } from '@/entities/user';

import { ValidateUser } from '.';

describe('ValidateUser', () => {
  it('returns an empty validation object when there is no error', () => {
    const user = {
      name: 'Testevaldo Silva',
      email: 'testevaldo@gmail.com',
    } as User;

    const userValidation = ValidateUser.execute({ user });

    expect(userValidation).toMatchObject({});
  });

  it('returns an error in the name when it is empty', () => {
    const user = {
      name: '',
      email: 'testevaldo@gmail.com',
    } as User;

    const userValidation = ValidateUser.execute({ user });

    expect(userValidation).toMatchObject({
      name: 'Name is required.',
    });
  });

  it('returns an error in the name when it is invalid', () => {
    const user = {
      name: 'error',
      email: 'testevaldo@gmail.com',
    } as User;

    const userValidation = ValidateUser.execute({ user });

    expect(userValidation).toMatchObject({
      name: 'Name is invalid.',
    });
  });

  it('returns an error in the name when it does not have the expected length', () => {
    const userLessChars = {
      name: 'te',
      email: 'testevaldo@gmail.com',
    } as User;
    const userMoreChars = {
      name: 't'.repeat(51),
      email: 'testevaldo@gmail.com',
    } as User;

    const userValidationLessChars = ValidateUser.execute({
      user: userLessChars,
    });
    const userValidationMoreChars = ValidateUser.execute({
      user: userMoreChars,
    });

    expect(userValidationLessChars).toMatchObject({
      name: 'Name must have at least 3 and at most 50 characters.',
    });
    expect(userValidationMoreChars).toMatchObject({
      name: 'Name must have at least 3 and at most 50 characters.',
    });
  });

  it('returns an error in the email when it is empty', () => {
    const user = {
      name: 'Testevaldo Silva',
      email: '',
    } as User;

    const userValidation = ValidateUser.execute({ user });

    expect(userValidation).toMatchObject({
      email: 'Email is required.',
    });
  });

  it('returns an error in the email when it is invalid', () => {
    const user = {
      name: 'Testevaldo Silva',
      email: 'invalid email',
    } as User;

    const userValidation = ValidateUser.execute({ user });

    expect(userValidation).toMatchObject({
      email: 'Email is invalid.',
    });
  });

  it('returns multiple errors when has errors in multiple fields', () => {
    const user = {
      name: '',
      email: 'invalid email',
    } as User;

    const userValidation = ValidateUser.execute({ user });

    expect(userValidation).toMatchObject({
      name: 'Name is required.',
      email: 'Email is invalid.',
    });
  });
});
