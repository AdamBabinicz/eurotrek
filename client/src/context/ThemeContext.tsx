import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create context with default values
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  console.log("useTheme context:", context);
  if (context === undefined) {
    console.error(
      "Theme context is undefined. Make sure you're using ThemeProvider."
    );
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
// Hook to use the theme context
interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark" || savedTheme === "light") {
        return savedTheme as Theme;
      }

      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        return "dark";
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
    return "light";
  });

  useEffect(() => {
    console.log("Applying theme:", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.error("Error setting theme in localStorage:", error);
    }
  }, [theme]);

  const toggleTheme = () => {
    console.log("Toggle theme called, current:", theme);
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
