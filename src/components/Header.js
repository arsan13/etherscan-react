import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Etherscan
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${
                    (location.pathname === "/" ||
                      location.pathname === "/accounts") &&
                    "active"
                  }`}
                  aria-current="page"
                >
                  Accounts
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/blocks"
                  className={`nav-link ${
                    location.pathname === "/blocks" && "active"
                  }`}
                  aria-current="page"
                >
                  Blocks
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
