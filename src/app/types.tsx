// export interface Repo {
//     id: number;
//     created_at: string;
//     html_url: string;
//     name: string;
//     description: string;
//     stargazers_count: number;
//     forks_count: number;
//     open_issues_count: number;
//     watchers_count: number;
//     username: string;
//     main_url: string;
// }

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
    const response = await fetch('https://api.github.com/users/microsoft/repos?sort=created&per_page=5');
    if (!response.ok) {
      throw new Error('Failed to fetch repos');
    }
    const data: Repo[] = await response.json();
    return data;
}
  
  