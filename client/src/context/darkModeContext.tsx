import { createContext, useState, ReactNode } from "react";

type ContextProviderProps = {
  children: ReactNode;
};

export type ContextType = {
  theme: "light" | "dark";
  toggleTheme?: () => void;
};

export const ThemeContext = createContext<ContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: ContextProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("ui.theme") as "light" | "dark") || "dark"
  );

  const toggleTheme = (): void => {
    const val = theme === "light" ? "dark" : "light";
    setTheme(val);
    localStorage.setItem("ui.theme", val);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
