import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    

    <nav className="nav-style">
      <ul className="ul-style li-style">
      <NavLink
          className="link"
          to="/Home"
          style={({ isActive }) => ({
            color: isActive ? "grey" : "",
            fontWeight: isActive ? "bold" : "",
          })}
        >
          Home
        </NavLink>
        <NavLink
          className="link"
          to="/Books"
          style={({ isActive }) => ({
            color: isActive ? "grey" : "",
            fontWeight: isActive ? "bold" : "",
          })}
        >
          Books
        </NavLink>
        <NavLink
          className="link"
          to="/Authors"
          style={({ isActive }) => ({
            color: isActive ? "grey" : "",
            fontWeight: isActive ? "bold" : "",
          })}
        >
          Authors
        </NavLink>
        <NavLink
          className="link"
          to="/Genres"
          style={({ isActive }) => ({
            color: isActive ? "grey" : "",
            fontWeight: isActive ? "bold" : "",
          })}
        >
          Genres
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navigation;
