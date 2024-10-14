import { GITHUB_USERNAME } from "@/config";

export interface Repo {
    id: number;
    name: string;
    owner: {
      login: string;
      html_url: string;
    };
    html_url: string;
    description: string | null
    created_at: string;
    homepage: string | null;
    stargazers_count: number;
    watchers_count: number;
    forks_count: number;
    open_issues_count: number;
} 
  
export async  function fetchRepos(): Promise<Repo[]> {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=created&per_page=5`);
    if (!response.ok) {
      throw new Error('Failed to fetch repos');
    }
    const data: Repo[] = await response.json();
    return data;
}
  
export interface GitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  hireable: boolean | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export async  function fetchGithubUser(): Promise<GitHubUser> {
  const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
  if (!response.ok) {
    throw new Error('Failed to fetch repos');
  }
  const data: GitHubUser = await response.json();
  return data;
}