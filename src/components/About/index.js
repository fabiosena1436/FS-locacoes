import React from "react";


import { useCart } from "../../hooks/CartContext";
import { Container, ContainerText } from "./styles";

export function About() {
  const { cartProducts } = useCart();
  console.log(cartProducts);
  return (
    <Container>
      <ContainerText>
        <h1>Nossa historia</h1>
        <p>
          Claro, aqui está a versão atualizada do texto, levando em consideração
          a parte de locação dos artigos de festa e a menção ao sócio Neto:
          Bem-vindo à Casa Senna, onde transformamos sonhos em realidade e
          momentos especiais em memórias inesquecíveis. Somos muito mais do que
          uma empresa de eventos - somos contadores de histórias, arquitetos de
          emoções e mestres na arte da celebração.
        </p> <br/>
        <p>
          Nossa jornada começou com o sonho de Fernando, um visionário
          apaixonado pela beleza e pela criatividade. Ele não apenas imaginou,
          mas também construiu Casa Senna, um refúgio de elegância e alegria,
          onde cada festa é uma obra-prima única, cuidadosamente elaborada para
          encantar e surpreender.
        </p> <br/>
        <p>
          Em nosso espaço deslumbrante, onde a sofisticação se encontra com a
          descontração, você encontrará um salão espaçoso adornado com piscina,
          criado especialmente para receber suas celebrações mais especiais.
          Aqui, cada detalhe foi planejado meticulosamente para oferecer o
          cenário perfeito para seus momentos mais importantes.
        </p> <br/>
        <p>
          No entanto, entendemos que nem todas as festas precisam acontecer em
          um grande salão. É por isso que, além de nossos eventos elaborados em
          nosso espaço exclusivo, também oferecemos a opção de locação de
          artigos de festa para quem prefere celebrar no conforto de sua própria
          casa. Com uma variedade impressionante de decorações e acessórios
          disponíveis para locação, você pode criar a atmosfera perfeita para
          sua festa onde quer que esteja.
        </p><br/>
        <p>
          Além disso, não podemos deixar de mencionar nosso dedicado sócio,
          Neto, que contribui imensamente para tornar possível cada empreitada
          na Casa Senna. Com sua visão estratégica e paixão pela excelência, ele
          complementa perfeitamente a equipe, garantindo que cada detalhe seja
          cuidadosamente planejado e executado com maestria.
        </p><br/>
        <p>
          Na Casa Senna, não apenas fornecemos serviços excepcionais, mas também
          construímos relacionamentos duradouros baseados na confiança, na
          criatividade e no compromisso com a excelência. Estamos aqui para
          tornar seus sonhos realidade, para criar momentos que serão lembrados
          para sempre.
        </p><br/>
        <p>
          Junte-se a nós nesta jornada emocionante e permita-nos fazer parte da
          sua história. Na Casa Senna, cada celebração é uma obra de arte - e
          você é o protagonista. Venha celebrar conosco.
        </p>
      </ContainerText>
    </Container>
  );
}
