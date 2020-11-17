import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBox from "../SearchBox";
import { logout } from "../../actions/userActions";
import { Button } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const handleClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    showButton();
  });

  return (
    <>
      <nav>
        <div className="nav-bar-container">
          <Link to="/" onClick={() => setClick(false)} className="nav-logo">
            PROSHOP
          </Link>
          <div className="mobile-icon" onClick={() => setClick(!click)}>
            {click ? (
              <span class="material-icons menu-icon">clear</span>
            ) : (
              <span class="material-icons menu-icon">menu</span>
            )}
          </div>
          <ul
            className="nav-menu"
            onClick={handleClick}
            style={{ left: click ? 0 : "-100%" }}
          >
            <li className="nav-item">
              <Link to="/" onClick={closeMobileMenu} className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                onClick={closeMobileMenu}
                className="nav-links"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/profile"
                onClick={closeMobileMenu}
                className="nav-links"
              >
                Profile
              </Link>
            </li>
            <li className="nav-item-btn nav-item">
              <button className="sign-in-out-button">Sign In</button>
            </li>
          </ul>
        </div>
      </nav>
      {/* <Navbar expand="lg" collapseOnSelect className="navbar-root">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>ProShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>
            </Nav>
            <Route render={({ history }) => <SearchBox history={history} />} />
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </>
  );
};

export default Header;
