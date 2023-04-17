import logoImg from "../../assets/logo.svg"
import { Container, Content } from "./styles"

export const Header = ()=>{
    return (
      <Container>
        <Content>
          <img src={logoImg} alt="dt money logo" />
          <button type="button">Nova transação</button>
        </Content>
      </Container>
    );
}