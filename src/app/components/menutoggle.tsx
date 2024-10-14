'use client';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const MenuToggle: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);


  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const overlayClasses = `fixed inset-0 z-50 h-full w-full bg-white dark:bg-gray-950 transition-transform duration-500 ${
    isMenuOpen ? 'translate-x-0 opacity-95' : 'translate-x-full opacity-0'
  }`;

  const overlay = (
    <div className={overlayClasses}>
      <nav className="mt-8 flex h-full flex-col items-start pl-12 pt-2 text-left">
        <a className="mb-4 text-2xl font-bold text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400" href="/">
          Project
        </a>
        <a className="mb-4 text-2xl font-bold text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400" href="/blog">
          Blog
        </a>
        <a className="mb-4 text-2xl font-bold text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400" href="/about">
          About
        </a>
      </nav>
      <button
        className="fixed right-4 top-7 z-60 h-16 w-16 p-4 text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400"
        aria-label="Toggle Menu"
        onClick={handleMenuToggle}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );

  return (
    <>
      {/* Toggle Button */}
      <button
        aria-label="Toggle Menu"
        className="sm:hidden"
        onClick={handleMenuToggle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-8 w-8 text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Full-screen Menu Overlay */}
      {isClient && ReactDOM.createPortal(overlay, document.body)}
      </>
  );
};

export default MenuToggle;
