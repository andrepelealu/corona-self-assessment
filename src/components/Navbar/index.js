import React, { useState } from 'react';
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
              <NavLink href="#">Apa itu social distancing ?</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Data Corona</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Berita Corona</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Donasi</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarSection;