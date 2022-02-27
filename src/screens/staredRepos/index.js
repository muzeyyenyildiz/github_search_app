import { useSelector } from "react-redux";
import RepoCard from "../../components/Card/RepoCard";

const StaredReposScreen = () => {
  const favoriteRepos = useSelector((state) => state.favoriteRepos.value);

  return (
    <>
      {favoriteRepos === undefined
        ? null
        : favoriteRepos.map((repo, key) => <RepoCard repo={repo} key={key} />)}
    </>
  );
};

export default StaredReposScreen;
