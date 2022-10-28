import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark  mb-5">
      <span className="navbar-brand mb-0 h1">Movies DB</span>

      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to="/" className="nav-link active">
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/series" className="nav-link active">
              Series
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/register" className="nav-link active">
              Register
            </NavLink>
          </li>
        </ul>

        <div className=" justify-content-end">
          <button
            onClick={handleClick}
            className="btn btn-outline-success me-2"
          >
            {isAuthenticated ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
