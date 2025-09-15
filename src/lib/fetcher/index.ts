import { GITHUB_USERNAME } from "@/config";
import type { Repo, GitHubUser } from "@/types";
import { DEFAULT_USER, DEFAULT_REPOS } from "@/lib/defaults";

export async function fetchRepos(): Promise<Repo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=created&per_page=5`
    );
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.warn('Failed to fetch repos, using defaults:', error);
    return DEFAULT_REPOS;
  }
}

export async function fetchGithubUser(): Promise<GitHubUser> {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.warn('Failed to fetch user, using defaults:', error);
    return DEFAULT_USER;
  }
}