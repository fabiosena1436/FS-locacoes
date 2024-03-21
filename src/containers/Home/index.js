import React from "react";

import { CategoryCarousel, OffersCarousel, HomeCarousel, Header } from "../../components";

import { Container } from './styles'


function Home() {
    return (
        <Container>
            <Header />
            <HomeCarousel />
            <CategoryCarousel />
            <OffersCarousel />
        </Container>)
}

export default Home