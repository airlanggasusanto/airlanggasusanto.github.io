import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDot , faObjectUngroup, faStar, faEye} from '@fortawesome/free-regular-svg-icons';
import { Repo } from '../types';

interface MainContentProps {
  repos: Repo[];
}

const MainContent: React.FC<MainContentProps> = ({ repos }) => {
  return (
    <main className="mb-auto">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* Header Section */}
        <div className="space-y-4 pb-6 pt-6 md:space-y-6">
          <h1 className="text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-tight">
            Latest Repos
          </h1>
          <p className="text-base sm:text-lg leading-7 text-gray-500 dark:text-gray-400">
            A Git Pages created with Next.js and Tailwind.css
          </p>
        </div>


        {/* Repos List */}
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
  {repos.map((repo) => (
    <li key={repo.id} className="py-12">
      <article>
        <div className="space-y-4 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
          <dl>
            <dt className="sr-only">Created on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <time dateTime={repo.created_at}>
                {new Date(repo.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </dd>
          </dl>
          <div className="xl:col-span-3">
            <div className="space-y-4">
              {/* Title and Description Section */}
              <div>
                <h2 className="text-2xl font-bold leading-8 tracking-tight mb-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 dark:text-gray-100 hover:underline"
                  >
                    {repo.name}
                  </a>
                </h2>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  {repo.description || 'No description available.'}
                </p>
              </div>

              {/* Stars, Forks, Issues, Watchers Section */}
              <div className="flex items-center space-x-6 mt-4">
                {/* Stars */}
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faStar} className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{repo.stargazers_count}</span>
                </div>

                {/* Forks */}
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faObjectUngroup} className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{repo.forks_count}</span>
                </div>

                {/* Issues */}
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faCircleDot} className="w-5 h-5 text-red-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{repo.open_issues_count}</span>
                </div>

                {/* Watchers */}
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faEye} className="w-5 h-5 text-blue-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{repo.watchers_count}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </li>
  ))}
</ul>



      </div>

      {/* View All Repos */}
      <div className="flex justify-end text-base font-medium leading-6">
        <a href="https://github.com/microsoft" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label="All repos">
          All Repos →
        </a>
      </div>
    </main>
  );
}

export default MainContent;
