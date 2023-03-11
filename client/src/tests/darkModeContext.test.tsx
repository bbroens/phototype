import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeContext } from "../context/darkModeContext";

const TestingComponent = () => {
  const { theme } = React.useContext(ThemeContext);
  return <h1 className={`theme-${theme}`}>Hello</h1>;
};

describe("<ThemeContextProvider />", () => {
  test("provides expected 'light' theme to child elements", async () => {
    render(
      <ThemeContext.Provider value={{ theme: "light" }}>
        <TestingComponent />
      </ThemeContext.Provider>
    );

    await screen.findByRole("heading");
    expect(screen.getByRole("heading")).toHaveClass("theme-light");
  });

  test("provides expected 'dark' theme to child elements", async () => {
    render(
      <ThemeContext.Provider value={{ theme: "dark" }}>
        <TestingComponent />
      </ThemeContext.Provider>
    );

    await screen.findByRole("heading");
    expect(screen.getByRole("heading")).toHaveClass("theme-dark");
  });
});
