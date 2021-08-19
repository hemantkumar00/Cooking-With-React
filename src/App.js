import React, { useState, createContext } from "react";
import CounterHooks from "./CounterHooks";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("red");
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <div>
        <CounterHooks initialCount={4} />
      </div>
      <button
        onClick={() =>
          setTheme((prevTheme) => {
            return prevTheme === "red" ? "blue " : "red";
          })
        }
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
