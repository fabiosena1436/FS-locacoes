import React from "react";

import { CategoryCarousel, OffersCarousel, HomeCarousel } from "../../components";

import { Container } from './styles'


function Home() {
    return (
        <Container>
            <HomeCarousel />
            <CategoryCarousel />
            <OffersCarousel />
        </Container>)
}

export default Home