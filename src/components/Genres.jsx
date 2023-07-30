import { useState, useEffect } from "react";
import { client } from "../client";

function Genres() {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://wbslibrarybackend.onrender.com/genres")
      .then((res) => res.json())
      .then((allGenres) => {
        setGenres(allGenres);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>is Loading!</p>;
  }

  return (
    <>
      {genres && 
      genres.map((genre) => {
        return (
          <div key={genre.id} className="genrecontainer">
              <div className="genretitle">
                <h3 className="h3-genre">{genre.genre_name}</h3>
              </div>
              <div className="genredescription">
                {genre.genre_description}
              </div>
            </div>
        );
      })}
    </>
  );
}

export default Genres;
