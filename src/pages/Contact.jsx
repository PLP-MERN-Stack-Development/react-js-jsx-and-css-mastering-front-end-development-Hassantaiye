import React from "react";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
        Contact Us
      </h1>

      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
        <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
          Have questions, feedback, or need support?  
          Feel free to reach out to us using the contact details below.
        </p>

        <div className="space-y-4 text-center">
          <p className="text-lg text-gray-800 dark:text-gray-200">
            📧 <strong>Email:</strong>{" "}
            <a
              href="mailto:hassantaiwo204@gmail.com"
              className="text-blue-600 hover:underline"
            >
              hassantaiwo204@gmail.com
            </a>
          </p>

          <p className="text-lg text-gray-800 dark:text-gray-200">
            📞 <strong>Phone:</strong>{" "}
            <a
              href="tel:08156228026"
              className="text-blue-600 hover:underline"
            >
              08156228026
            </a>
          </p>
        </div>

        <div className="text-center mt-8">
          <a
            href="/"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
