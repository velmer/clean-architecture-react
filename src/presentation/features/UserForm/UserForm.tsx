import React, { useState } from "react";
import { User } from "../../../domain/entities/user";
import { CreateUser } from "../../../domain/use-cases/create-user";
import { DC } from "../../../infrastructure/dependency-container";

interface Props {
  onUserAdded: () => void;
}

const initialUser = {
  id: null,
  name: "",
  email: "",
  gender: "male",
  status: "active",
};

const UserForm: React.FC<Props> = (props: Props) => {
  const [user, setUser] = useState<User>(initialUser);

  const onChange = ({ key, value }: { key: string; value: string }): void => {
    setUser((user) => {
      return { ...user, [key]: value };
    });
  };
  
  const submit = async (e: React.MouseEvent) => {
    try {
      e.preventDefault();
      await CreateUser.execute({ user, userRepository: DC.repositories.userRepository });
      setUser(initialUser);
      props.onUserAdded();
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <form>
      Name:{" "}
      <input
        type="text"
        name="name"
        value={user?.name}
        onChange={(e) =>
          onChange({ key: e.target.name, value: e.target.value })
        }
      />
      <br />
      Email:{" "}
      <input
        type="text"
        name="email"
        value={user?.email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange({ key: e.target.name, value: e.target.value })
        }
      />
      <br />
      <button
        type="submit"
        onClick={(e) => submit(e)}
      >
        Create
      </button>
    </form>
  );
};

export default UserForm;
