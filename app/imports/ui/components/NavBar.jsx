import React from 'react';
// import { Meteor } from 'meteor/meteor';
// import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
// import { Roles } from 'meteor/alanning:roles';
import { Container, Navbar } from 'react-bootstrap';
// import { BoxArrowRight, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBar = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand as={NavLink} to="/">
        <h2>Code Quest</h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Container>
  </Navbar>
);

export default NavBar;
