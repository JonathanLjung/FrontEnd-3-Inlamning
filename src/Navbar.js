import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        {" "}
        <h1>SneakersShoppen</h1>{" "}
      </Link>
      <div className="links">
        <Link to="/">
          {" "}
          <p>Hem</p>{" "}
        </Link>
        <Link to="/sell">
          {" "}
          <p>Sälj skor </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
