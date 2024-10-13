import MainContent from "./components/main";
import Footer from "./components/footer";
import Header from "./components/header";
import { Repo, fetchRepos } from "./types";

export default async function Home() {
  const repos: Repo[] = await fetchRepos();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <Header repos={repos} />
      <MainContent repos={repos} />
      <Footer repos={repos}/>
    </div>
  );
}
