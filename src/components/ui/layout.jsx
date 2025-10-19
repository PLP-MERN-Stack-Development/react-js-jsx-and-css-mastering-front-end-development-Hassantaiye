import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6">
        {children} {/* ✅ This is where <Routes> from App.jsx will render */}
      </main>
      <Footer />
    </div>
  );
}
