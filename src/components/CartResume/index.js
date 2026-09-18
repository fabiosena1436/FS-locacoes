import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCart } from "../../hooks/CartContext";
import { Container } from "./styles";
import { Button } from "../Button";
import formatCurrency from "../../utils/formatCurrency";
import api from "../../services/api";
import { toast } from "react-toastify";

export function CartResume() {
  const [finalPrice, setFinalprice] = useState(0);
  const [deliveryTax] = useState(5);
  const history = useHistory();

  const { cartProducts, clearCart } = useCart();

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);

    setFinalprice(sumAllItems);
  }, [cartProducts, deliveryTax]);

  const submitOrder = async () => {
    if (!cartProducts || cartProducts.length === 0) {
      toast.warn("Seu carrinho está vazio!");
      return;
    }

    const order = cartProducts.map((product) => {
      return { id: product.id, quantity: product.quantity };
    });

    try {
      await toast.promise(api.post("orders", { products: order }), {
        pending: "Realizando seu pedido...",
        success: "Pedido realizado com sucesso!",
        error: "Falha ao tentar realizar o seu pedido, tente novamente.",
      });

      await clearCart();
      setTimeout(() => {
        history.push("/");
      }, 1500);
    } catch (err) {
      console.error("Erro ao enviar pedido", err);
    }
  };

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="itens">Itens</p>
          <p className="intems-price">{formatCurrency(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
        </div>
        <div className="container-bottom">
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <Button style={{ width: "100%", marginTop: 30 }} onClick={submitOrder}>
        Finalizar Pedido
      </Button>
    </div>
  );
}
