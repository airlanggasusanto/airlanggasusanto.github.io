import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { GitHubUser } from '../types';
import ThemeSwitcher from './themeswitcher';
import MenuToggle from './menutoggle';

interface HeaderProps {
    githubUser: GitHubUser;
}
  
const Header: React.FC<HeaderProps> = ({ githubUser }) => {
  return (
    <header className="flex items-center w-full justify-between py-10">
    <a
      href={githubUser.html_url}
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
        <div className="hidden h-6 text-2xl font-semibold sm:block lowercase">@{githubUser.login}</div>
      </div>
    </a>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
      <div className="no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
  <a
    className="block font-medium text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-colors duration-300 p-2 rounded-md hover:bg-primary-500 dark:hover:bg-primary-400"
    href="/"
  >
    Project
  </a>
  <a
    className="block font-medium text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-colors duration-300 p-2 rounded-md hover:bg-primary-500 dark:hover:bg-primary-400"
    href="/blog"
  >
    Blog
  </a>
  <a
    className="block font-medium text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-colors duration-300 p-2 rounded-md hover:bg-primary-500 dark:hover:bg-primary-400"
    href="/about"
  >
    About
  </a>
</div>

        <div className="mr-5 flex items-center">
          <div className="relative inline-block text-left">
            <ThemeSwitcher/>
          </div>
        </div>
        <MenuToggle/>
      </div>
    </header>
  );
};

export default Header;
