import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { connect } from "react-redux";
import { toggleMobileNavVisibility } from "../../reducers/Layout";

const Header = ({ showMobileMenu, toggleMobileNavVisibility }) => (
  <Navbar fluid={true}>
    <Navbar.Header>
      <button
        type="button"
        className="navbar-toggle"
        data-toggle="collapse"
        onClick={toggleMobileNavVisibility}
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </button>
    </Navbar.Header>

    <Navbar.Collapse>
      <Nav>
        {/* <NavItem><i className="fa fa-dashboard"></i></NavItem>
          <NavDropdown title={<i className="fa fa-globe" />} id="basic-nav-dropdown">
            <MenuItem>Action</MenuItem>
            <MenuItem>Another action</MenuItem>
            <MenuItem>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem>Separated link</MenuItem>
          </NavDropdown> */}
      </Nav>
      <div className="separator" />
      <Navbar.Form pullLeft>
        {/* <FormGroup>
          <span className="input-group-addon">
            <i className="fa fa-search" />
          </span>
          <FormControl type="text" placeholder="Type to search" />
        </FormGroup> */}
      </Navbar.Form>
      <Nav pullRight>
        <NavItem>Cuenta</NavItem>
        {/* <NavDropdown title="Dropdown" id="right-nav-bar">
          <MenuItem>Action</MenuItem>
          <MenuItem>Another action</MenuItem>
          <MenuItem>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem>Separated link</MenuItem>
        </NavDropdown> */}
        <NavItem>Salir</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const mapDispatchToProp = dispatch => ({
  toggleMobileNavVisibility: () => dispatch(toggleMobileNavVisibility())
});

export default connect(
  null,
  mapDispatchToProp
)(Header);
