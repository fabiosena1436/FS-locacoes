import React from "react";

import logoCarrinho from "../../assets/carrinho vazio.png";
import formatCurrency from "../../utils/formatCurrency";
import { useCart } from "../../hooks/CartContext";
import { Container, Header, Body, EmptyCart, StatusCar } from "./styles";

export function CartItems() {
    const { cartProducts,increaseProcudts, decreaseProcudts } = useCart();
    console.log(cartProducts);
    return (
        <Container>
            <Header>
                <p></p>
                <p>Itens</p>
                <p>Preço</p>
                <p style={{ paddingRight: 30 }}>Quantidade</p>
                <p>Total</p>
            </Header>
            {cartProducts && cartProducts.length > 0 ? (
                cartProducts.map((product) => (
                    <Body key={product.id}>
                        <img src={product.url} />
                        <p>{product.name}</p>
                        <p>{formatCurrency(product.price)}</p>
                        <div className="quantity-container">
                            <button onClick={()=> decreaseProcudts(product.id)}> - </button>
                            <p>{product.quantity}</p>
                            <button onClick={()=> increaseProcudts(product.id)}> + </button>
                        </div>
                        <p>{formatCurrency(product.quantity * product.price)}</p>
                    </Body>
                ))
            ) : (
                <EmptyCart>
                    <StatusCar>Carrinho vazio</StatusCar>
                    <img src={logoCarrinho} alt="logo" />
                </EmptyCart>
            )}
        </Container>
    );
}
