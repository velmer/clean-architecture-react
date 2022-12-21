import { renderHook, act } from "@testing-library/react";
import createUser from "./create-user";
import goRest from "../externals/axios/go-rest";
import User from "../types/user";

jest.mock("../externals/axios/go-rest");

describe("createUser", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  test("creates a new user", async () => {
    const { result } = renderHook(createUser);

    const initialUser = result.current.user;

    const mockedAxios = goRest as jest.Mocked<typeof goRest>;
    mockedAxios.get.mockResolvedValue({
      data: "User created successfully",
    });

    let userAfterChanges: User = {} as User;

    await act(() => {
      result.current.onChange({ key: "name", value: "Testevaldo" });
      result.current.onChange({ key: "email", value: "testevaldo@gmail.com" });
    });

    userAfterChanges = result.current.user as User;

    await act(async () => {
      await result.current.execute();
    });

    const userAfterCreation = result.current.user;

    expect(initialUser.id).toBeDefined();
    expect(initialUser.id).toBeNull();
    expect(initialUser.name).toBeDefined();
    expect(initialUser.name).toBe("");
    expect(initialUser.email).toBeDefined();
    expect(initialUser.email).toBe("");

    expect(userAfterChanges.name).toBeDefined();
    expect(userAfterChanges.name).toBe("Testevaldo");
    expect(userAfterChanges.email).toBeDefined();
    expect(userAfterChanges.email).toBe("testevaldo@gmail.com");

    expect(userAfterCreation.id).toBeDefined();
    expect(userAfterCreation.id).toBeNull();
    expect(userAfterCreation.name).toBeDefined();
    expect(userAfterCreation.name).toBe("");
    expect(userAfterCreation.email).toBeDefined();
    expect(userAfterCreation.email).toBe("");

    expect(mockedAxios.post).toBeCalledTimes(1);
  });
});
