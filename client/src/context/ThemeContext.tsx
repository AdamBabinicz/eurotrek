import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {}
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      // Check if theme is stored in localStorage
      const savedTheme = localStorage.getItem("theme");
    
      // If theme is stored, use it
      if (savedTheme === "dark" || savedTheme === "light") {
        return savedTheme as Theme;
      }
    
      // Otherwise, check user system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return "dark";
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
    
    // Default to light theme
    return "light";
  });

  useEffect(() => {
    // Apply theme class to document element
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    // Store theme preference in localStorage
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.error("Error setting theme in localStorage:", error);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
