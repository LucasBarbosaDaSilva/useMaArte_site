import "../styles/Whats.css";

function WhatsApp() {
  return (
    <div id="whats-container">
      <a
        href="https://api.whatsapp.com/send?phone=32991370563"
        className="whatsapp-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://imagepng.org/wp-content/uploads/2017/08/WhatsApp-icone-3.png"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
}

export default WhatsApp;
