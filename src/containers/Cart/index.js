import React from "react";

import { Container } from './styles'
import { CartItems, HomeCarousel } from "../../components";



function Cart() {
    return (
        <Container>
            <HomeCarousel />
            <CartItems/>
        </Container>)
}

export default Cart