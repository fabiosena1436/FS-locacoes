import React from "react";

import { CartItems, CartResume } from "../../components";
import { Container, Wrapper } from './styles'




function Cart() {
    return (
        <Container>
        

            <Wrapper>
                <CartItems />
                <CartResume />
            </Wrapper>

        </Container>)
}

export default Cart