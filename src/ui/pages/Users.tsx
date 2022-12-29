import React, { useEffect, useState } from "react";
import { User } from "@/entities/user";
import { DC } from "@/externals/dependency-container";
import { UserForm } from "@/ui/features/UserForm";
import { UserList } from "@/ui/features/UserList";

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const users = await DC.httpClient.get('/users');
    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h1>Users</h1>
      <UserList users={users} onUserDeleted={() => fetchUsers()} />
      <hr />
      <h2>Form</h2>
      <UserForm onUserAdded={() => fetchUsers()} />
    </>
  );
};

export default UsersPage;
