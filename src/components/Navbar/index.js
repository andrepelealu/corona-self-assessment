import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const NavbarSection = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Cek Corona</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <Link to="/"><NavLink>Beranda</NavLink></Link>
            </NavItem>
            <NavItem>
              <NavLink href="#social-distance">Apa itu social distancing ?</NavLink>
            </NavItem>
            <NavItem>
              <Link to="#data"><NavLink>Data Corona</NavLink></Link>
            </NavItem>
            <NavItem>
              <Link to="test-corona"><NavLink>Self Assessment</NavLink></Link>
            </NavItem>
            <NavItem>
              {/* <NavLink href="#">Donasi</NavLink> */}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarSection;