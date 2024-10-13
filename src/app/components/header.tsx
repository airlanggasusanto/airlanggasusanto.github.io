import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Repo } from '../types';

interface HeaderProps {
    repos: Repo[];
}
  
const Header: React.FC<HeaderProps> = ({ repos }) => {
    const username = repos[0]?.owner.login;
    const html_url = repos[0]?.owner.html_url;
  return (
    <header className="flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10">
    <a
      href={html_url}
      className="break-words"
      aria-label="GitHub"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center justify-between">
        <div className="mr-3">
          {/* GitHub FontAwesome Icon */}
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </div>
        <div className="hidden h-6 text-2xl font-semibold sm:block">@{username}</div>
      </div>
    </a>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
      <div className="no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
  <a
    className="block font-medium text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-white transition-colors duration-300 p-2 rounded-md hover:bg-primary-500 dark:hover:bg-primary-400"
    href="#"
  >
    Project
  </a>
  <a
    className="block font-medium text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-white transition-colors duration-300 p-2 rounded-md hover:bg-primary-500 dark:hover:bg-primary-400"
    href="#"
  >
    Blog
  </a>
  <a
    className="block font-medium text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-white transition-colors duration-300 p-2 rounded-md hover:bg-primary-500 dark:hover:bg-primary-400"
    href="#"
  >
    About
  </a>
</div>

        <div className="mr-5 flex items-center">
          <div className="relative inline-block text-left">
            <div className="flex items-center justify-center hover:text-primary-500 dark:hover:text-primary-400">
              <button aria-label="Theme switcher" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="group:hover:text-gray-100 h-6 w-6">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <button aria-label="Toggle Menu" className="sm:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-8 w-8 text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
