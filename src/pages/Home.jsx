import Header from "../components/Header";
import Whats from "../components/Whats";
import Footer from "../components/Footer";
import PropTypes from "prop-types";
import "../styles/Home.css";

function Home({ prevScrollPos }) {
  return (
    <>
      <div>
        <Header />
        <Whats />
        <div className={`text-home ${prevScrollPos > 378 && `animation`}`}>
          <h2>
            A Ma Arte é muito mais do que uma marca de moda, é uma expressão
            única de estilo e individualidade. Nossa paixão é criar roupas
            estilizadas e peças únicas que refletem a personalidade e a
            criatividade de cada pessoa.
          </h2>
        </div>
        <div className={`text-home-2 ${prevScrollPos > 378 && `animation`}`}>
          <h2>
            Cada item que produzimos é uma obra de arte, uma manifestação de
            autenticidade em um mundo de uniformidade. Bem-vindo à Ma Arte, onde
            a moda se torna uma forma de arte pessoal.
          </h2>
        </div>
      </div>
      <Footer />
    </>
  );
}

Home.propTypes = {
  prevScrollPos: PropTypes.number.isRequired,
};

export default Home;
