import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AuthContext, IUser } from "../context/authContext";

const mockUser: IUser = {
  user_id: 1,
  name: "Mock user",
  handle: "mockuser",
  icon: "i1.jpg",
  bg: "i1.jpg",
  followers: 111,
  following: 222,
  posts: 333,
};

const TestingComponent = () => {
  const { currentUser } = React.useContext(AuthContext);
  return <h1>{currentUser?.user_id}</h1>;
};

describe("<AuthContextProvider />", () => {
  test("provides expected AuthContext obj to child elements", async () => {
    render(
      <AuthContext.Provider value={{ currentUser: mockUser }}>
        <TestingComponent />
      </AuthContext.Provider>
    );

    await screen.findByRole("heading");
    expect(screen.getByRole("heading")).toHaveTextContent(
      mockUser.user_id.toString()
    );
  });
});
