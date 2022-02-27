import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setFavoriteRepos } from "../../stores/favorited";
import "./style.css";

const RepoCard = ({ repo, key }) => {
  const dispatch = useDispatch();
  const favoriteRepos = useSelector((state) => state.favoriteRepos.value);

  const handleFavorite = ($repo) => {
    let newRepos = [...favoriteRepos];
    const favRepo = favoriteRepos.find((item) => item.id === $repo.id);

    if (favRepo) {
      newRepos = newRepos.filter((item) => item.id !== favRepo.id);
    } else {
      newRepos.push($repo);
    }
    dispatch(setFavoriteRepos(newRepos));
  };
 

  const isFavorite = ($id) => {
    return favoriteRepos.filter((item) => item.id === $id).length > 0;
  };

  return (
    <>
      <div className="card-container" key={key}>
        <Card className="card">
          <Card.Header className="card-header" id={repo.id}>
            <h6>Name: {repo.name}</h6>
            <span className="icon-box">
              <FontAwesomeIcon
                icon={faStar}
                className={
                  isFavorite(repo.id) ? "icon-star-yellow" : "star-icon"
                }
                onClick={() => handleFavorite(repo)}
              ></FontAwesomeIcon>
            </span>
          </Card.Header>
          <Card.Body>
            <p>Created time : {new Date(repo.created_at).toDateString()}</p>
            <p>
              Url :{" "}
              <a target="blank" href={repo.html_url}>
                {repo.name}{" "}
              </a>
            </p>
            <p>Language : {repo.language}</p>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default RepoCard;
