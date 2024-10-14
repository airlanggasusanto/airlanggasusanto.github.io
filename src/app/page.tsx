import MainContent from "./components/main";
import { Repo, fetchRepos } from "./types";

export default async function Home() {
  const repos: Repo[] = await fetchRepos();

  return (
      <MainContent repos={repos} />
  );
}
