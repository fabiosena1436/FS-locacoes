import React from "react";
import Photo1 from '../../assets/gareria1.png'
import Photo2 from '../../assets/gareria2.png'
import Photo3 from '../../assets/gareria3.png'
import Photo4 from '../../assets/gareria4.png'

import { Container, ContainerImage } from "./styles";

export function SectionsPhoto() {

  return (
    <Container>
      <ContainerImage>
      <img src={Photo1} alt="img-geleria" />
      <img src={Photo2} alt="img-geleria" />
      <img src={Photo3} alt="img-geleria" />
      <img src={Photo4} alt="img-geleria" />
      </ContainerImage>
    </Container>
  );
}

