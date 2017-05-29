const React = require('react');
import {NavLink, Link} from 'react-router-dom';
import { Navbar, Nav, NavItem, CollapsibleNav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = (props) => {
  
  return (

      <div>
        <Navbar>
          
          <Navbar.Header>
            <Navbar.Brand>
              <NavLink to="/">
                Timer App
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          
          <Navbar.Collapse>
        <Nav className="navbar-right">
          
          <LinkContainer  exact to="/">
            <NavItem eventKey={1}>Timer</NavItem>
          </LinkContainer>

          <LinkContainer to="/countdown">
            <NavItem eventKey={1}>Countdown</NavItem>
          </LinkContainer>
                    
        </Nav>
          
          </Navbar.Collapse>
        </Navbar>
      </div>
    
      
    );
  
};

module.exports = Navigation;
