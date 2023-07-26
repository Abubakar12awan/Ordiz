// import { FC } from "react";
import "./Header.css";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";
// import Discord from '../assets/discord.png';
const Header = ({ setPageName }: { setPageName: Function; }) => {
  return (
    <div className="header">
      <div className="header-bar">
        <Link to="/" onClick={() => setPageName("home")}>Ordiz.xyz</Link>
        <div className="header-spacer">
          <img src="/images/nav.png" alt="Top" />
        </div>
        <a href="https://docs.ordiz.xyz/" className="top-docs" target="_blank" rel="noopener noreferrer">
          Docs
        </a>
        <a href="https://twitter.com/ordiz_xyz" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://discord.gg/theordinalsclub" target="_blank" rel="noopener noreferrer">
          <FaDiscord />
        </a>
      </div>
      <div className="header-alert">
        <div>Please make sure you're only connecting to&nbsp;</div>
        <a href="https://ordiz.xyz">https://ordiz.xyz</a>
      </div>
    </div>
  );
};

export default Header;
