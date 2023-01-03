import { AxiosError } from 'axios';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';

import { CreateUser } from '@/app/use-cases/create-user';
import { ValidateUser } from '@/app/use-cases/validate-user';
import { User } from '@/entities/user';
import { DC } from '@/externals/dependency-container';

interface Props {
  onUserAdded: () => void;
}

const initialUser = {
  id: null,
  name: '',
  email: '',
  gender: 'male',
  status: 'active',
} as User;

function UserForm({ onUserAdded }: Props) {
  const validate = (user: User) => ValidateUser.execute({ user });

  const onSubmit = async (user: User, { resetForm }: FormikHelpers<User>) => {
    try {
      await CreateUser.execute({
        user,
        userRepository: DC.repositories.userRepository,
      });
      resetForm();
      onUserAdded();
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const { field, message } = error.response.data[0];
        // eslint-disable-next-line no-alert
        alert(`${field} ${message}`);
      }
    }
  };

  return (
    <Formik initialValues={initialUser} validate={validate} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form>
          Name:
          <Field type="text" name="name" />
          <ErrorMessage name="name" />
          <br />
          Email:
          <Field type="text" name="email" />
          <ErrorMessage name="email" />
          <br />
          <button type="submit" disabled={isSubmitting}>
            Create
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default UserForm;
