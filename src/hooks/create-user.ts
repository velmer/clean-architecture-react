import React, { useState } from "react";
import goRest from "../externals/axios/go-rest";
import User from "../types/user";

const useCreateUser = () => {
  const initialUser = {
    id: null,
    name: "",
    email: "",
    gender: "male",
    status: "active",
  };

  const [user, setUser] = useState<User>(initialUser);

  const onChange = ({ key, value }: { key: string; value: string }): void => {
    if (value === "error") {
      throw new Error("User not allowed!");
    }

    setUser((user) => {
      return { ...user, [key]: value };
    });
  };

  const execute = async (): Promise<void> => {
    const response = await goRest.post("/users", user);

    setUser(initialUser);
    return;
  };

  return { user, onChange, execute };
};

export default useCreateUser;
