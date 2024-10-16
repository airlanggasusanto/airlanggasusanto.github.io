import React from 'react';
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
    subsets: ['latin'],
    weight: '400',
  });

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-white dark:bg-gray-950">
      <h1 className={`flex items-center justify-center text-9xl font-bold text-gray-900 dark:text-gray-100 ${pacifico.className}`}>
      <span>4</span>
        <img
          src="./404.gif" 
          alt="Page not found illustration"
          className="mx-2 mt-9 w-20 h-20 dark:invert"
        />
        <span>4</span>
      </h1>
      <h2 className="mt-4 text-3xl font-semibold text-gray-800 dark:text-gray-200">
        Page Not Found
      </h2>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
        Didn&#39;t find anything here!
        </p>
      <a href="/" className="mt-6 text-blue-500 hover:underline text-xl">
        Go back to the homepage
      </a>
    </div>
  );
};

export default NotFound;
