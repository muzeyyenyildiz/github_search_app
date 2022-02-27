import RepoCard from "../Card/RepoCard";

const UserRepos = ({ userRepos }) => {
  const userReposData = [...userRepos];

  return (
    <>
      {userReposData === undefined
        ? null
        : userReposData.map((repo, key) => <RepoCard repo={repo} key={key} />)}
    </>
  );
};

export default UserRepos;
