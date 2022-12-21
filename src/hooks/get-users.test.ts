import { renderHook, act } from "@testing-library/react";
import getUsers from "./get-users";
import goRest from "../externals/axios/go-rest";

jest.mock("../externals/axios/go-rest");

describe("getUsers", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  test("returns all users", async () => {
    const { result } = renderHook(getUsers);
    const mockedAxios = goRest as jest.Mocked<typeof goRest>;

    const firstUser = {
      id: 1,
      name: "Testevaldo",
      email: "testevaldo@gmail.com",
      gender: "Male",
      status: "Active",
    };

    const secondUser = {
      id: 2,
      name: "Testevalda",
      email: "testevalda@gmail.com",
      gender: "Female",
      status: "Active",
    };

    mockedAxios.get.mockResolvedValue({ data: [firstUser, secondUser] });

    await act(async () => {
      await result.current.execute();
    });

    expect(result.current.users).toEqual([firstUser, secondUser]);
    expect(mockedAxios.get).toBeCalledTimes(1);
  });
});
