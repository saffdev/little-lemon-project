import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Container, Menu } from "./styles";

import logoImg from "../../images/icons_assets/Logo.svg";
import basketImg from "../../images/icons_assets/Basket.svg";
import menuImg from "../../images/icons_assets/icon _hamburger menu.svg";
import closeImg from "../../images/icons_assets/close.svg";

const MobileNav = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(prevValue => !prevValue);
  };

  return (
    <Container {...props}>
      <ul>
        <li>
          <button aria-label="Open menu" onClick={handleMenu}>
            <img src={menuImg} alt="Open menu" />
          </button>
        </li>
        <li> <img className="basketIcon" src={basketImg} alt="Basket" /> </li>
      </ul>

      <Menu className={menuOpen ? "opened" : ""}>
        <button aria-label="Close menu" onClick={handleMenu}>
          <img src={closeImg} alt="Close menu" />
        </button>
        <ul>
          <li> <img src={logoImg} alt="Little Lemon Logo" /> </li>
          <li> <HashLink style={{ textDecoration: 'none', color: '#000000' }} to="/">Home</HashLink> </li>
          <li> <HashLink style={{ textDecoration: 'none', color: '#000000' }} to="#about">About</HashLink> </li>
          <li> <HashLink style={{ textDecoration: 'none', color: '#000000' }} to="#menu">Menu</HashLink> </li>
          <li> <HashLink style={{ textDecoration: 'none', color: '#000000' }} to="/bookings">Reservations</HashLink> </li>
          <li className="orderBtn"> <HashLink style={{ textDecoration: 'none', color: '#ffffff' }} role="button" to="#">Order Online</HashLink> </li>
        </ul>
      </Menu>
    </Container>
  );
};

export default MobileNav;