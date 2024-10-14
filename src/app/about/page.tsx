import React from 'react';
import { fetchGithubUser, GitHubUser } from '../types';

export default async function Page() {
  const githubUser: GitHubUser = await fetchGithubUser();
  return (
    <main className="mb-auto">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>

        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            <img
              alt="avatar"
              loading="lazy"
              width="192"
              height="192"
              decoding="async"
              className="h-48 w-48 rounded-full"
              src={githubUser.avatar_url}
              style={{ color: 'transparent' }}
            />
          <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
            {githubUser.name ? (
              <span className="capitalize">{githubUser.name}</span>
            ) : (
              <span className="lowercase">@{githubUser.login}</span>
            )}
          </h3>
          <div className="text-gray-500 dark:text-gray-400 text-center">
            {githubUser.bio ? githubUser.bio : "Someone seems too shy to say something."}
          </div>
            <div className="flex space-x-3 pt-6">
              <a
                className="text-sm text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:address@yoursite.com"
              >
                <span className="sr-only">mail</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="fill-current text-gray-700 hover:text-black-500 dark:text-gray-200 dark:hover:text-white-400 h-8 w-8"
                >
                  <title>Mail</title>
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </a>

              <a
                className="text-sm text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href={githubUser.html_url}
              >
                <span className="sr-only">github</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="fill-current text-gray-700 hover:text-white-500 dark:text-gray-200 dark:hover:text-white-400 h-8 w-8"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
              </a>

              <a
                className="text-sm text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com"
              >
                <span className="sr-only">linkedin</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="fill-current text-gray-700 hover:text-white-500 dark:text-gray-200 dark:hover:text-white-400 h-8 w-8"
                >
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>

              <a
                className="text-sm text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/Twitter"
              >
                <span className="sr-only">x</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="fill-current text-gray-700 hover:text-white-500 dark:text-gray-200 dark:hover:text-white-400 h-8 w-8"
                >
                  <title>X</title>
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="max-w-none pb-8 pt-8 xl:col-span-2 xl:pt-0">
            <div className="space-y-6 pt-8">
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet nisi at odio volutpat convallis.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Fusce laoreet, nulla at sollicitudin vestibulum, urna nisl pharetra lorem, sit amet ornare quam nunc non lectus. Integer at orci metus. Sed scelerisque massa sit amet neque commodo, quis tristique ligula lacinia.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Cras pretium, elit a dignissim hendrerit, nisl nisl consectetur libero, id elementum justo purus a nulla.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Ut sagittis vel lorem eget dictum. Sed ut nulla gravida, efficitur nunc et, aliquet ex.
                </p>
              </div>
          </div>


        </div>
      </div>
    </main>
  );
}
