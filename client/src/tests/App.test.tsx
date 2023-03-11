import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import { AuthContext, IUser } from "../context/authContext";
import { ThemeContext } from "../context/darkModeContext";

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

describe("<App />", () => {
  test("renders all layout components with auth and theme contexts", () => {
    render(
      <ThemeContext.Provider value={{ theme: "light" }}>
        <AuthContext.Provider value={{ currentUser: mockUser }}>
          <App />
        </AuthContext.Provider>
      </ThemeContext.Provider>
    );

    screen.getByTestId("layout");
    screen.getByTestId("navigation");
    screen.getByTestId("header");

    expect(screen.getByTestId("layout")).toBeInTheDocument();
    expect(screen.getByTestId("navigation")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
});
