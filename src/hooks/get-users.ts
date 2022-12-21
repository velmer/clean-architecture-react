import { useState } from "react";
import User from "../types/user";
import goRest from "../externals/axios/go-rest";

const useGetUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const execute = async () => {
    const response = await goRest.get("/users");

    setUsers(response.data);
  };

  return {
    execute,
    users,
  };
};

export default useGetUsers;
