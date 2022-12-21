import React, { ReactHTML, ReactHTMLElement } from "react";
import useCreateUser from "../../hooks/create-user";

const UserForm: React.FC = () => {
  const { onChange, user, execute } = useCreateUser();

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
        onClick={(e) => {
          e.preventDefault();
          execute();
        }}
      >
        Create
      </button>
    </form>
  );
};

export default UserForm;
