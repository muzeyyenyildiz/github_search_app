import { useState, useEffect } from "react";
import FormSearch from "../../components/Form/FormSearch";
import UserCard from "../../components/UserCard/UserCard";
import UserRepos from "../../components/UserRepos/UserRepos";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../stores/user";
import "./style.css";

const HomeScreen = () => {
  const [userData, setUserData] = useState({});
  const [userRepos, setUserRepos] = useState([]);
  const [error, setError] = useState(null);
  const [repoError, setRepoError] = useState(null);

  const user = useSelector(state => state.user.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      return;
    }
    fetch(`https://api.github.com/users/${user}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setError(data.message);
          setUserData({});
          dispatch(setUser(""));
          setUserRepos([]);
        } else {
          setUserData(data);
          findRepos(user);
          setError(null);
        }
        
      });
  }, [user]);

  const findRepos = (user) => {
    fetch(`https://api.github.com/users/${user}/repos`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setRepoError(data.message);
          setUserRepos([]);
        } else {
          const sortedRepo = sortRepo(data);
          setUserRepos(sortedRepo);
        }
      });
  };

  console.log(userData);

  const sortRepo = (repos) => {
    const sortedRepos = repos.sort(function compare(obj1, obj2) {
      return new Date(obj1.created_at) - new Date(obj2.created_at);
    });
    return sortedRepos;
  };

  return (
    <>
      <FormSearch/>
      {error ? <p className="error">{error}!</p> : null}
      <UserCard userData={userData} />
      {repoError ? <p className="error">{repoError}!</p> : null}
      <UserRepos userRepos={userRepos} />
    </>
  );
};

export default HomeScreen;
