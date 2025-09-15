import type { Repo, GitHubUser } from "@/types";
import { fetchRepos, fetchGithubUser } from "@/lib/fetcher";

let staticDataCache: {
  repos: Repo[];
  user: GitHubUser;
} | null = null;

export async function initializeStaticData() {
  if (staticDataCache) {
    return staticDataCache;
  }

  const [repos, user] = await Promise.all([
    fetchRepos(),
    fetchGithubUser()
  ]);
  
  staticDataCache = { repos, user };
  return staticDataCache;
}

export function getStaticRepos(): Repo[] {
  if (!staticDataCache) {
    throw new Error('Static data not initialized. Call initializeStaticData() first.');
  }
  return staticDataCache.repos;
}

export function getStaticUser(): GitHubUser {
  if (!staticDataCache) {
    throw new Error('Static data not initialized. Call initializeStaticData() first.');
  }
  return staticDataCache.user;
}

export function getStaticData() {
  if (!staticDataCache) {
    throw new Error('Static data not initialized. Call initializeStaticData() first.');
  }
  return staticDataCache;
}
