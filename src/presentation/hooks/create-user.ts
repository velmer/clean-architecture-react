import React, { useState } from "react";
import { AxiosAdapter } from "../../infrastructure/http-client/axios-adapter";
import { User } from "../../domain/entities/user";

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
    return;
  };

  return { user, onChange, execute };
};

export default useCreateUser;
