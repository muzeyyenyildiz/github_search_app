import React from "react";
import "./style.css";
import { Card } from "react-bootstrap";

const UserCard = ({ userData }) => {
  const {
    name,
    avatar_url,
    location,
    followers,
    following,
    public_repos,
    company,
  } = userData;

  return (
    <>
      {Object.keys(userData).length === 0 ? null : (
        <div className="card-container">
          <Card style={{ width: "405px" }}>
            <Card.Img variant="top center" src={avatar_url} />
            <Card.Body>
              <p>Profile Name : {name} </p>
              <p>Location : {location} </p>
              {company === null ? null : <p> Company : {company} </p> }
              <p>Public Repos : {public_repos} </p>
              <p>Followers : {followers} </p>
              <p>Following : {following} </p>
            </Card.Body>
          </Card>
        </div>
      )}
      
    </>
  );
};

export default UserCard;
