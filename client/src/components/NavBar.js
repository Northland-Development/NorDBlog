import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Link,withRouter} from 'react-router-dom';

function NavBar(props) {
  const routes = props.routes
  return (
    <div className="NavBar">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand as={Link} to='/'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {routes.map((route,index) => (
                <Nav.Link as={Link} to={route.path} key={index}>{route.name}</Nav.Link>
            ))}
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(NavBar);
