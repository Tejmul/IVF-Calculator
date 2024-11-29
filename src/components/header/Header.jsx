import { Link } from "react-router-dom";
import logo from "../../assets/images/logos/ivf-pulse-logo.png";
import "./Header.css";
import Hamburger from "hamburger-react";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="main-header">
        <div>
          <img src={logo} alt="IVF Pulse Logo" />
        </div>
        <div className="menu-links">
          <Link>Donor Programme</Link>
          <Link>Fertility Preservation</Link>
          <Link>Advanced Treatments</Link>
          <Link>Infertility Treatments</Link>
          <Link>IVF Testing</Link>
          <Link>About Us</Link>
          <button className="contact-button">
            Talk to Us <span className="arrow-icon">→</span>
          </button>
        </div>
        <div className="burger-menu">
          <Hamburger toggled={isMenuOpen} toggle={setMenuOpen} />
        </div>
      </div>
      {isMenuOpen && (
        <div className="dropdown-links">
          <Link>Donor Programme</Link>
          <Link>Fertility Preservation</Link>
          <Link>Advanced Treatments</Link>
          <Link>Infertility Treatments</Link>
          <Link>IVF Testing</Link>
          <Link>About Us</Link>
          <button>Talk to Us</button>
        </div>
      )}
    </>
  );
}

export default Header;
