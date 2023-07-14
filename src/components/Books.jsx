import { useState, useEffect } from "react";
import { client } from "../client";
import Popup from "reactjs-popup";

function Books() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function getBookSlides() {
    try {
      const response = await client.getEntries({ content_type: "books" });
      const books = response.items;
      console.log(books);
      setBooks(books);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getBookSlides();
  }, []);

  if (isLoading) {
    return <p>is Loading!</p>;
  }

  return (
    <>
      {books.map((entry) => {
        const url = entry.fields.image.fields.file.url;
        const key = entry.sys.id;
        const title = entry.fields.title;
        const description = entry.fields.description;
        const subtitle = entry.fields.subtitle;
        return (
          
          <div key={key} className="card">
            
            <div classname="cardtitle">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img src={url} alt={title} width="80%" />
                  </div>
                  <div className="flip-box-back">
                    <div className="cardtitle">
                      <h3 className="h3-bigger">{title}</h3>
                      <p className="subtitle">{subtitle}</p>
                    </div>
                    <div className="cardimage">
                      <p className="p-overflow-hidden">{description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        );
      })}
    </>
  );
}

export default Books;
