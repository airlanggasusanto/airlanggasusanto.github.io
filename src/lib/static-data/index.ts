import type { Repo, GitHubUser } from "@/types";
import { fetchRepos, fetchGithubUser } from "@/lib/fetcher";
import { DEFAULT_REPOS, DEFAULT_USER } from "@/lib/defaults";

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
      return DEFAULT_REPOS
    }
  return staticDataCache.repos;
}

export function getStaticUser(): GitHubUser {
  if (!staticDataCache) {
      return DEFAULT_USER
  }
  return staticDataCache.user;
}

export function getStaticData() {
  if (!staticDataCache) {
    return {
      repos: DEFAULT_REPOS,
      user: DEFAULT_USER,
    };  }
  return staticDataCache;
}
