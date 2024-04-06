import React from "react";
import Photo1 from '../../assets/admin.svg'
import Photo2 from '../../assets/admin.svg'
import Photo3 from '../../assets/admin.svg'
import Photo4 from '../../assets/admin.svg'

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

