import Books from "./components/Books";
import Navigation from "./components/Navigation";
import Genres from "./components/Genres";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Authors from "./components/Authors";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <div className="header">
          <Navigation />
        </div>
        <div className="content">
          
        <Routes>
          <Route exact path="home" element={<Home />} />
            <Route path="books" element={<Books />} />
            <Route path="authors" element={<Authors />} />
            <Route path="genres" element={<Genres />} />
          </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
