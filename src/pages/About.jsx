import React from "react";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
        About Hassan Task App
      </h1>

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          <strong>Hassan Task App</strong> is a simple and powerful task
          management application built to help you stay organized and productive.
          It allows you to add new tasks, mark them as completed, and filter your
          list by active or completed tasks.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Designed with <span className="font-semibold text-blue-600">React.js</span> and styled using
          <span className="font-semibold text-blue-600"> Tailwind CSS</span>, this app provides a
          clean, modern, and responsive interface that works seamlessly on mobile,
          tablet, and desktop devices.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          This project was created by <strong>Hassan Taiye</strong> as part of a
          front-end development learning series to master React component
          architecture, routing, and UI styling using Tailwind CSS.
        </p>
      </div>
    </div>
  );
}
