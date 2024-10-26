import React, { createContext, useContext, useEffect, useState } from "react";

let ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  let [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light-theme"
  );

  let toggleTheme = () => {
    if (theme == "light-theme") {
      setTheme("dark-theme");
      localStorage.setItem("theme", "dark-theme");
    } else {
      setTheme("light-theme");
      localStorage.setItem("theme", "light-theme");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  });

  return (
    <ThemeContext.Provider value={[theme, toggleTheme ]}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
