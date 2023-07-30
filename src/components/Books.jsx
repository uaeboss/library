import { useState, useEffect } from "react";
// import { client } from "../client";
import Popup from "reactjs-popup";

function Books() {
  const [books, setBooks] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://wbslibrarybackend.onrender.com/books")
      .then((res) => res.json())
      .then((allBooks) => {
        setBooks(allBooks);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>is Loading!</p>;
  }

  return (
    <>
      {books &&
        books.map((book) => {
          return (
            <div key={book.id} className="card">
              <div classname="cardtitle">
                <div className="flip-box">
                  <div className="flip-box-inner">
                    <div className="flip-box-front">
                      <img src={book.image_url} alt={book.title} width="80%" />
                    </div>
                    <div className="flip-box-back">
                      <div className="cardtitle">
                        <h3 className="h3-bigger">{book.title}</h3>
                        <p className="subtitle">{book.subtitle}</p>
                      </div>
                      <div className="cardimage">
                        <p className="p-overflow-hidden">{book.description}</p>
                        <Popup
                          trigger={<p className="openpopbut">mehr ...</p>}
                          modal
                          nested
                        >
                          {(close) => (
                            <div className="modal">
                              <div className="content">
                                <div className="popupinfo">
                                  <h3 className="h3-bigger">{book.title}</h3>
                                  <p className="subtitle">{book.subtitle}</p>
                                  {/* <h3>Autor/in: {book.author}</h3> */}
                                  <h3>Genre: {book.genre}</h3>
                                  <h3>ISBN: {book.isbn}</h3>
                                </div>
                                <div className="popupimg">
                                  <img
                                    src={book.image_url}
                                    alt={book.title}
                                    height="280px"
                                  />
                                </div>
                                <div className="popupdescrp">
                                  <p>{book.description}</p>
                                </div>

                                <div className="popupbutton">
                                  <button
                                    className="popup-closeBtn"
                                    onClick={() => close()}
                                  >
                                    X
                                  </button>
                                </div>
                              </div>

                              <div></div>
                            </div>
                          )}
                        </Popup>
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
