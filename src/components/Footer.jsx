import instagram from "../styles/imagens/instagram.svg";
import "../styles/Footer.css";

function Footer() {
  const instagramUrl =
    "https://www.instagram.com/usemaarte/?igshid=MWZjMTM2ODFkZg%3D%3D";

  return (
    <div id="footer-container">
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="Instagram Logo" />
        <p id="footer-p">SIGA O NOSSO INSTAGRAM @USEMAARTE</p>
      </a>
    </div>
  );
}

export default Footer;
