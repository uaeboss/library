import { useState, useEffect } from "react";
import { client } from "../client";

function Genres() {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function getGenres() {
    try {
      const response = await client.getEntries({ content_type: "genres" });
      const genres = response.items;
      console.log(genres);
      setGenres(genres);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getGenres();
  }, []);

  if (isLoading) {
    return <p>is Loading!</p>;
  }

  return (
    <>
      {genres.map((entry) => {
        const key = entry.sys.id;
        const genre = entry.fields.genre;
        const description = entry.fields.description;
        return (
          <div key={key} className="genrecontainer">
              <div class="genretitle">
                <h3 className="h3-genre">{genre}</h3>
              </div>
              <div class="genredescription">
                {description}
              </div>
            </div>
        );
      })}
    </>
  );
}

export default Genres;
