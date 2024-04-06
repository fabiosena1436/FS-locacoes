import React from "react";

import {
  CategoryCarousel,
  HomeCarousel,
  OffersCarousel,
} from "../../components";

import { Container } from "./styles";

function Home() {
  return (
    <Container>
      <HomeCarousel />
      <OffersCarousel />
      <CategoryCarousel />
    </Container>
  );
}

export default Home;
