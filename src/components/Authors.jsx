import { useState, useEffect } from "react";
import { client } from "../client";

function Authors() {
  const [authors, setAuthors] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function getAuthors() {
    try {
      const response = await client.getEntries({ content_type: "authors" });
      const authors = response.items;
      console.log(authors);
      setAuthors(authors);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getAuthors();
  }, []);

  if (isLoading) {
    return <p>is Loading!</p>;
  }

  return (
    <>
      {authors.map((entry) => {
        const key = entry.sys.id;
        const name = entry.fields.name;
        const description = entry.fields.description;
        return (
          <div key={key} className="authorcontainer">
              <div class="authortitle">
                <h3 className="h3-author">{name}</h3>
              </div>
              <div class="authordescription">
                <div>{description}</div>
              </div>
            </div>
        );
      })}
    </>
  );
}

export default Authors;
