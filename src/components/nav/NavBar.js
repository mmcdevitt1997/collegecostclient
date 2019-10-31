import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import useSimpleAuth from "../hooks/ui/useSimpleAuth";

const NavBar = props => {
  const { isAuthenticated, logout } = useSimpleAuth();

  return (
    <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow navbar1">
      <ul className="nav nav-pills nav-fill">
        {isAuthenticated() ? (
          <>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                College
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/costs">
                Costs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/debts">
                debts
              </Link>
            </li>

            <li className="nav-item">
              <button
                className="nav-link fakeLink logout-link"
                onClick={() => {
                  logout();
                  props.history.push({
                    pathname: "/"
                  });
                }}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
