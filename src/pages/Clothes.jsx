import Header from "../components/Header";
import Whats from "../components/Whats";
import Footer from "../components/Footer";
import "../styles/Clothes.css";

function Clothes() {
  return (
    <div>
      <Header />
      <Whats />
      <Footer />
      <div className="page-construction">
        <div className="clothes-card">
          <div className="bg-image-div" />
          <p>Jaqueta Asas - Tam P</p>
          <p>R$ 699,99</p>
          <p>Até 6x de R$ 116,67 sem juros</p>
        </div>
        <div className="clothes-card">
          <div className="bg-image-div" />
          <p>Jaqueta M 666 - Tam Pp</p>
          <p>R$ 599,99</p>
          <p>Até 6x de R$ 99,99 sem juros</p>
        </div>
        <div className="clothes-card">
          <div className="bg-image-div" />
          <p>Jaqueta Caveira - Tam M</p>
          <p>R$ 599,99</p>
          <p>Até 6x de R$ 99,99 sem juros</p>
        </div>
        <div className="clothes-card">
          <div className="bg-image-div" />
          <p>Calça Vibes - Tam P</p>
          <p>R$ 699,99</p>
          <p>Até 6x de R$ 116,67 sem juros</p>
        </div>
        <div className="clothes-card">
          <div className="bg-image-div" />
          <p>Macacão Tribal - Tam M</p>
          <p>R$ 699,99</p>
          <p>Até 6x de R$ 116,67 sem juros</p>
        </div>
        <div className="clothes-card">
          <div className="bg-image-div" />
          <p>Colete Neon - Tam G</p>
          <p>R$ 699,99</p>
          <p>Até 6x de R$ 116,67 sem juros</p>
        </div>
      </div>
    </div>
  );
}

export default Clothes;
