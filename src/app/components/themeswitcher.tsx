'use client';
import React, { useState, useEffect, useRef } from 'react';

type ThemeOption = 'light' | 'dark' | 'system';

const themes = {
  light: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clipRule="evenodd"
      />
    </svg>
  ),

  dark: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  ),

  system: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <rect x="3" y="3" width="14" height="10" rx="2" ry="2"></rect>
      <line x1="7" y1="17" x2="13" y2="17"></line>
      <line x1="10" y1="13" x2="10" y2="17"></line>
    </svg>
  ),
};

const ThemeSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<ThemeOption>('system');
  const [systemPrefersDark, setSystemPrefersDark] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Detect system color scheme preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setSystemPrefersDark(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setSystemPrefersDark(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    else document.removeEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Apply theme to document element
  useEffect(() => {
    if (selectedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else if (selectedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      // system
      if (systemPrefersDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [selectedTheme, systemPrefersDark]);

  const toggleDropdown = () => setIsOpen((open) => !open);
  const selectTheme = (theme: ThemeOption) => {
    setSelectedTheme(theme);
    setIsOpen(false);
  };

  // Determine icon for button based on selected theme + system preference
  const getCurrentIcon = () => {
    if (selectedTheme === 'system') {
      return systemPrefersDark ? themes.dark : themes.light;
    }
    return themes[selectedTheme];
  };

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      <button
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Theme switcher"
        className="flex items-center justify-center rounded-md p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
      >
        {getCurrentIcon()}
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-36 rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-600 focus:outline-none z-10"
          role="radiogroup"
        >
          <div className="p-1" role="none">
            {(['light', 'dark', 'system'] as ThemeOption[]).map((value) => (
              <span
                key={value}
                role="radio"
                aria-checked={selectedTheme === value}
                tabIndex={selectedTheme === value ? 0 : -1}
              >
                <button
                  onClick={() => selectTheme(value)}
                  className={`group flex w-full items-center rounded-md px-2 py-2 text-sm transition-colors ${
                    selectedTheme === value
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white'
                  }`}
                  role="menuitem"
                  tabIndex={-1}
                >
                  <div className="mr-2 flex-shrink-0">
                    {themes[value]}
                  </div>
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;