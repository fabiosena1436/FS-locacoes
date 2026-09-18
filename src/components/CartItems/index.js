import React from "react";
import logoCarrinho from "../../assets/carrinho vazio.png";
import formatCurrency from "../../utils/formatCurrency";
import { useCart } from "../../hooks/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { Container, Header, Body, EmptyCart, StatusCar } from "./styles";

export function CartItems() {
  const { cartProducts, increaseProducts, decreaseProducts, deleteProduct } = useCart();

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
            <img src={product.url} alt={product.name} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <div className="quantity-container">
              <button type="button" onClick={() => decreaseProducts(product.id)}> - </button>
              <p>{product.quantity}</p>
              <button type="button" onClick={() => increaseProducts(product.id)}> + </button>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <p>{formatCurrency(product.quantity * product.price)}</p>
              <button
                type="button"
                onClick={() => deleteProduct(product.id)}
                title="Remover item"
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "#d9534f",
                  marginLeft: "10px",
                }}
              >
                <DeleteIcon fontSize="small" />
              </button>
            </div>
          </Body>
        ))
      ) : (
        <EmptyCart>
          <StatusCar>Carrinho vazio</StatusCar>
          <img src={logoCarrinho} alt="carrinho vazio" />
        </EmptyCart>
      )}
    </Container>
  );
}
