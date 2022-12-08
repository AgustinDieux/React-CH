import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <Link className="brand" to="/">
          SneakerShop
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to={"/"}>Home</Link>
              </li>
              <li class="nav-item">
                <Link to={"sneakers"}>Sneakers</Link>
              </li>
              <li class="nav-item">
                <Link to={"Remeras"}>Remeras</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
