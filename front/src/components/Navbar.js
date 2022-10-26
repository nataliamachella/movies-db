import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/series"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Series
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Users
          </NavLink>
        </li>
      </ul>
      <div className=" justify-content-end">
        {/* {isAuthenticated ? `Bienvenid@ ${user}!` : "Logueate!"} */}

        <button
          onClick={handleClick}
          className="btn btn-outline-success me-2"
          /* onClick={(e) => (!isAuthenticated ? loginUser(e) : logoutUser(e))} */
        >
          {" "}
          Login
          {/* {isAuthenticated ? "Cerrar Sesión" : "Ingresar"} */}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
