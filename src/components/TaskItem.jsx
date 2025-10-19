import React from "react";
import { Check, Trash2 } from "lucide-react"; // optional icons

export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li
      className={`flex justify-between items-center p-3 border rounded-md dark:border-gray-700 ${
        task.completed ? "bg-green-50 dark:bg-green-900" : "bg-gray-50 dark:bg-gray-800"
      }`}
    >
      <div
        onClick={() => toggleTask(task.id)}
        className={`flex items-center gap-2 cursor-pointer ${
          task.completed ? "line-through text-gray-400" : "text-gray-800 dark:text-gray-200"
        }`}
      >
        <Check className={`w-5 h-5 ${task.completed ? "text-green-600" : "text-gray-400"}`} />
        {task.text}
      </div>
      <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">
        <Trash2 className="w-5 h-5" />
      </button>
    </li>
  );
}
