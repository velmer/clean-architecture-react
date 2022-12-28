export type User = {
  id: number | null;
  name: string;
  email: string;
  gender: string;
  status: string;
};

export type UserValidation = {
  [prop in keyof User]?: string;
};
