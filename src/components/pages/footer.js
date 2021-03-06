import { FooterContainer, TextContainer } from "../../styles/footer";

export function Footer() {
  return (
    <FooterContainer>
      <TextContainer>
        <div className="content">
      <h1>Mustang</h1>
      <p>
        O Ford Mustang é um automóvel desportivo produzido pela Ford Motor
        Company. O carro foi apresentado ao público em 17 de abril de 1964
        durante a New York World's Fair. O Mustang, apesar de ter sofrido
        grandes alterações ao longo dos anos é a mais antiga linha de automóveis
        da Ford
      </p>
      <button>Ver carros</button>
      </div>
     </TextContainer>
    </FooterContainer>
  );
}
