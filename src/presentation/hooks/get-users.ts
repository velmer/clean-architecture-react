import { useState } from "react";
import { User } from "../../domain/entities/user";
// import goRest from "../../infrastructure/http-client/axios-adapter";

const useGetUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const execute = async () => {
    setUsers([]);
  };

  return {
    execute,
    users,
  };
};

export default useGetUsers;
