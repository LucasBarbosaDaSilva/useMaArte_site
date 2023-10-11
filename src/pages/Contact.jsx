import Header from "../components/Header";
import Whats from "../components/Whats";
import Footer from "../components/Footer";
import insta from "../styles/imagens/svg/insta.svg";
import facebook from "../styles/imagens/svg/facebook.svg";
import tiktok from "../styles/imagens/svg/tiktok.svg";
import email from "../styles/imagens/svg/email.svg";
import whatsapp from "../styles/imagens/svg/whatsapp.svg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div>
      <Header />
      <Whats />
      <Footer />
      <div className="contact-page">
        <div>
          <h2>Informações para contato:</h2>
          <ul>
            <li>Email: vendas@usemaarte.com.br</li>
            <li>Email: sac@usemaarte.com.br</li>
            <li>Telefone: 32 991370563</li>
          </ul>
        </div>
        <div>
          <div className="social-icons">
            <a
              href="https://www.tiktok.com/@usemaarte?_t=8gOd056Ctx0&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tiktok} alt="TikTok" />
            </a>
            <a
              href="https://www.facebook.com/people/Ma-Arte/61551698622143/?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/usemaarte/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={insta} alt="Instagram" />
            </a>
            <a
              href="mailto:sac@usemaarte.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={email} alt="Email" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=32991370563"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp} alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
