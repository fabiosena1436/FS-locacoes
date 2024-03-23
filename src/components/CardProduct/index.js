import React from "react";

import { useCart } from "../../hooks/CartContext";
import Cart from '../../assets/carrinho.svg'
import PropTypes from "prop-types";
import { Button } from '../Button';

import { Container, Image, ProductName, ProductPrice, ImageCart, } from './styles'

export function CardProduct({ product }) {
    const { putProductInCart } = useCart()
    return (
        <Container>
            <Image src={product.url} alt="imagem do produto" />
            <div>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.formatedPrice}</ProductPrice>
                <Button onClick={() => putProductInCart(product)} >Adicionar <ImageCart src={Cart} alt="Carrinho de compra" /></Button>
            </div>
        </Container>
    )
}


CardProduct.propTypes = {
    product: PropTypes.object
}