import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create context with default values
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

// Hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Initialize theme state (prefer local storage or system preference)
  const [theme, setTheme] = useState<Theme>(() => {
    // Try to get the theme from localStorage
    try {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark" || savedTheme === "light") {
        return savedTheme as Theme;
      }
      
      // Check system preference for dark mode
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return "dark";
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
    
    // Default to light theme
    return "light";
  });

  // Apply theme class to document whenever theme changes
  useEffect(() => {
    console.log("Applying theme:", theme);
    
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    // Save theme preference to localStorage
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.error("Error setting theme in localStorage:", error);
    }
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    console.log("Toggle theme called, current:", theme);
    setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};