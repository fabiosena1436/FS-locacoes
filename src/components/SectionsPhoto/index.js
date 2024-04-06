import React from "react";
import Photo1 from '../../assets/gareria1.jpeg'
import Photo2 from '../../assets/gareria2.jpeg'
import Photo3 from '../../assets/gareria3.jpeg'
import Photo4 from '../../assets/gareria4.jpeg'

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

