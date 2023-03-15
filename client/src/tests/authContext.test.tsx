import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AuthContext, AuthContextType, User } from "../context/authContext";

const mockUser: User = {
  user_id: 1,
  username: "_testusername",
  firstname: "_testfirstname",
  lastname: "_testlastname",
  handle: "_testhandle",
  profile_img: "i1.jpg",
  cover_img: "i2.jpg",
};

const TestingComponent = () => {
  const { currentUser } = React.useContext<AuthContextType>(AuthContext);
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
