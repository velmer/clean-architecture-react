import React, { useEffect } from "react";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import getUsers from "../hooks/get-users";

const UsersPage: React.FC = () => {
  const { execute, users } = getUsers();

  useEffect(() => {
    execute();
  }, []);

  return (
    <>
      <h1>Users</h1>
      <UserList users={users} />
      <hr />
      <h2>Form</h2>
      <UserForm />
    </>
  );
};

export default UsersPage;
