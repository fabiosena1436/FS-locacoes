import React, { useEffect, useState } from "react";
import api from "../../services/api";
import formatCurrency from "../../utils/formatCurrency";
import { useHistory } from "react-router-dom";
import Cart from "../../assets/carrinho.svg";
import { useCart } from "../../hooks/CartContext"; // Importe useCart aqui
import { Container, ContainerItens, Image, ImageCart, Button } from "./styles";
import Carousel from "react-elastic-carousel";

export function OffersCarousel() {
  const [products, setProducts] = useState([]);
  const { putProductInCart } = useCart();
  const { push } = useHistory();

  useEffect(() => {
    async function loadProducts() {
      try {
        const { data } = await api.get("products");
        const formattedProducts = data.map((product) => ({
          ...product,
          formatedPrice: formatCurrency(product.price),
        }));
        setProducts(formattedProducts);
      } catch (error) {
        console.error("Error loading products:", error);
      }
    }
    loadProducts();
  }, []);

  const breakPoints = [
    { width: 2, itemsToShow: 2 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 },
  ];

  return (
    <Container>
      <Carousel
        itemsToShow={5}
        style={{ width: "90%" }}
        breakPoints={breakPoints}
      >
        {products.map((product) => (
          <ContainerItens key={product.id}>
            <Image src={product.url} alt="foto do produto" />
            <p> {product.name}</p>
            <p> {product.formatedPrice}</p>
            <Button
              onClick={() => {
                putProductInCart(product);
                push("/carrinho");
              }}
            >
              Alugar <ImageCart src={Cart} alt="Carrinho de compra" />
            </Button>
          </ContainerItens>
        ))}
      </Carousel>
    </Container>
  );
}
