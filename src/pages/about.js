import React from "react";
import { withRouteData } from "react-static";

export default withRouteData(({ authors }) => (
  <div>
    <h1 className="about-header">About The Authors</h1>
    {authors.map(author => (
      <div className="about-author" key={author.id}>
        <div className="about-header">
          <img
            className="about-avatar"
            alt={author.name}
            src={`https://media.graphcms.com/resize=w:100,h:100,fit:crop/${
              author.avatar.handle
            }`}
          />
          <h2>Hello! My name is {author.name}</h2>
        </div>
        <p style={{ textAlign: "center" }}>{author.bibliography}</p>
      </div>
    ))}
  </div>
));