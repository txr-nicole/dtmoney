import iconVerdeImg from "../../assets/iconVerde.svg";
import iconVermelhoImg from "../../assets/iconVermelho.svg";
import iconCifraoImg from "../../assets/iconCifrao.svg";

import { Container } from "./styles";

export const Summary = () => {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={iconVerdeImg} alt="Entradas" />
        </header>
        <strong>R$ 300,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={iconVermelhoImg} alt="Saídas" />
        </header>
        <strong>- R$ 12,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={iconCifraoImg} alt="Total" />
        </header>
        <strong>R$30.000,00</strong>
      </div>
    </Container>
  );
};
