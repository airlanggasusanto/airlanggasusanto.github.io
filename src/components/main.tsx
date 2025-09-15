import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDot , faObjectUngroup, faStar, faEye} from '@fortawesome/free-regular-svg-icons';
import { initializeStaticData, getStaticRepos } from '@/lib/static-data';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

const MainContent = async() => {
  await initializeStaticData();
  const repos = getStaticRepos();

  const html_url = repos[0]?.owner.html_url ?? "";
  const hasRepos = repos.length > 0;

  return (
    <main className="mb-auto">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* Header Section */}
        <div className="space-y-4 pb-6 pt-6 md:space-y-6">
          <h1 className="text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-tight">
            Latest Repos
          </h1>
          <p className="text-base sm:text-lg leading-7 text-gray-500 dark:text-gray-400">
            A GitHub Pages created with Next.js and Tailwind.css
          </p>
        </div>

        {hasRepos ? (
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {repos
              .filter((repo) => !repo.name.endsWith(".github.io"))
              .map((repo) => (
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
                            <div className="flex items-center space-x-2">
                              <FontAwesomeIcon icon={faStar} className="w-5 h-5 text-yellow-400" />
                              <span className="text-sm text-gray-600 dark:text-gray-300">{repo.stargazers_count}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <FontAwesomeIcon icon={faObjectUngroup} className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                              <span className="text-sm text-gray-600 dark:text-gray-300">{repo.forks_count}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <FontAwesomeIcon icon={faCircleDot} className="w-5 h-5 text-red-500" />
                              <span className="text-sm text-gray-600 dark:text-gray-300">{repo.open_issues_count}</span>
                            </div>
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
        ) : (
      <div className="py-20 text-center">
            <div className="mx-auto max-w-md">
              <FontAwesomeIcon 
                icon={faCodeBranch} 
                className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500 mb-4" 
              />
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                No repositories found
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                This user doesn&apos;t have any public repositories yet, but you can check out some amazing projects instead.
              </p>
              <div className="space-y-3">
                <a
                  href="https://github.com/microsoft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Explore Microsoft Repos →
                </a>
                <div>
                  <a
                    href="https://github.com/vercel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Or check out Vercel repos
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* View All Repos */}
      {hasRepos && (
        <div className="flex justify-end text-base font-medium leading-6">
          <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="All repos"
          >
            All Repos →
          </a>
        </div>
      )}
    </main>
  );
};

export default MainContent;
