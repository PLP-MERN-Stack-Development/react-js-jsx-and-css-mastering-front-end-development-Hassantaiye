import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import TaskManager from "../components/TaskManager";

export default function Tasks() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-4">
      <button
        onClick={toggleTheme}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Toggle {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <TaskManager />
    </div>
  );
}
