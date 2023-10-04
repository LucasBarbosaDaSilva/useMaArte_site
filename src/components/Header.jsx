import { Link } from "react-router-dom";
import logo from "../styles/imagens/logo-prov-maarte.png";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <div className="home-container">
        <div className="image-container">
          <img src={logo} alt="logo" className="logo-image" />
        </div>
        <div className="link-container">
          <Link to="/">
            <h2 className="link-h2">Home</h2>
          </Link>
          <Link to="/roupas">
            <h2 className="link-h2">Roupas</h2>
          </Link>
          <Link to="/contato">
            <h2 className="link-h2">Contato</h2>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
