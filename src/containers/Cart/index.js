import React from "react";

import { CartItems, HomeCarousel, CartResume } from "../../components";
import { Container, Wrapper } from './styles'




function Cart() {
    return (
        <Container>
            <HomeCarousel />

            <Wrapper>
                <CartItems />
                <CartResume />
            </Wrapper>

        </Container>)
}

export default Cart