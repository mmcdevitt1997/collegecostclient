import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import useSimpleAuth from "../hooks/ui/useSimpleAuth";
import "./NavBar.css";
import { Nav, NavItem, Button } from 'reactstrap';

const NavBar = props => {
  const { isAuthenticated, logout } = useSimpleAuth();

  return (
    <Nav className = "navColor">
        {isAuthenticated() ? (
          <>
            <NavItem>
              <Link className="nav-link" to="/">
                College List
              </Link>
            </NavItem>
            <NavItem>
              <Button
                className="navButton"
                onClick={() => {
                  logout();
                  props.history.push({
                    pathname: "/"
                  });
                }}
              >
                Logout
              </Button>
            </NavItem>
          </>
        ) : (
          <>
            <NavItem >
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </NavItem>
          </>
        )}

    </Nav>
  );
};

export default NavBar;
