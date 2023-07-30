import { useState, useEffect } from "react";
import { client } from "../client";

function Authors() {
  const [authors, setAuthors] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://wbslibrarybackend.onrender.com/authors")
      .then((res) => res.json())
      .then((allAuthors) => {
        setAuthors(allAuthors);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>is Loading!</p>;
  }

  return (
    <>
      {authors && 
      authors.map((author) => {
        return (
          <div key={author.id} className="authorcontainer">
            <div>
              <div className="authortitle">
                <h3 className="h3-genre">{author.first_name} {author.last_name}</h3>
              </div>
              <img className="img-block" src={author.image_url} alt={author.last_name} />
              </div>
              <div className="authordescription">
                {author.about}
              </div>
            </div>
        );
      })}
    </>
  );
}

export default Authors;

