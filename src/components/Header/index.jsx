import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom'
import './header.css'
import {useDispatch, useSelector} from "react-redux";
import {signOut} from "../../redux/actions";

const Header = (props) => {

  const auth = useSelector(state =>state.auth)
    const dispatch = useDispatch();



  return (
      <>
        <div>
          <Navbar collapseOnSelect expand="lg" className="shadow-lg m-2 rounded-xl"  style={{zIndex:'1',display:auth.authenticate?'none':''}}>
            <Container fluid>
              <Link to="/" className="navbar-brand">Admin-Dashboard</Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                  <Nav className="nav p-2">
                      <li className="nav-item pl-2 pr-2 text-center middleT"><NavLink to="signin" className="nav-link" activeClassName="activeAdminNavLink">Sign In</NavLink></li>
                      <li className="nav-item pl-2 pr-2 text-center middleT"><NavLink to="signup" className="nav-link" activeClassName="activeAdminNavLink">Sign Up</NavLink></li>
                  </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </>
  )
}

export default Header
