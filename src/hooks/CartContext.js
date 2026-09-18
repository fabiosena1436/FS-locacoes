import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const updateLocalStorage = async (products) => {
    await localStorage.setItem(
      "dadosLocal:cartInfo",
      JSON.stringify(products)
    );
  };

  const putProductInCart = async (product) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

    let newCartProducts = [];
    if (cartIndex >= 0) {
      newCartProducts = cartProducts.map((item, idx) =>
        idx === cartIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      newCartProducts = [...cartProducts, { ...product, quantity: 1 }];
    }
    setCartProducts(newCartProducts);
    await updateLocalStorage(newCartProducts);
  };

  const deleteProduct = async (productId) => {
    const newCart = cartProducts.filter((product) => product.id !== productId);
    setCartProducts(newCart);
    await updateLocalStorage(newCart);
  };

  const increaseProducts = async (productId) => {
    const newCart = cartProducts.map((product) => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product;
    });
    setCartProducts(newCart);
    await updateLocalStorage(newCart);
  };

  const decreaseProducts = async (productId) => {
    const cartIndex = cartProducts.findIndex((pd) => pd.id === productId);

    if (cartIndex >= 0 && cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((product) => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product;
      });
      setCartProducts(newCart);
      await updateLocalStorage(newCart);
    } else {
      deleteProduct(productId);
    }
  };

  const clearCart = async () => {
    setCartProducts([]);
    await localStorage.removeItem("dadosLocal:cartInfo");
  };

  useEffect(() => {
    const loadCartData = async () => {
      const clientCartData = await localStorage.getItem("dadosLocal:cartInfo");

      if (clientCartData) {
        try {
          setCartProducts(JSON.parse(clientCartData));
        } catch (e) {
          console.error("Error parsing cart data from localStorage", e);
        }
      }
    };

    loadCartData();
  }, []);

  return (
    <CartContext.Provider
      value={{
        putProductInCart,
        cartProducts,
        deleteProduct,
        deletPruducts: deleteProduct, // Legacy typo fallback
        increaseProducts,
        increaseProcudts: increaseProducts, // Legacy typo fallback
        decreaseProducts,
        decreaseProcudts: decreaseProducts, // Legacy typo fallback
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};

CartProvider.propTypes = {
  children: PropTypes.node,
};
