import React, { createContext, useContext, useState, useEffect } from "react";

import PropTypes from 'prop-types';

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
    const [cartProducts, setcartProducts] = useState([])

    const putProductInCart = async product => {
        const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)

        let newCartProducts = [];
        if (cartIndex >= 0) {
            newCartProducts = cartProducts

            newCartProducts[cartIndex].quantity =
                newCartProducts[cartIndex].quantity + 1

            setcartProducts(newCartProducts)
        } else {
            product.quantity = 1
            newCartProducts = [...cartProducts, product]
            setcartProducts(newCartProducts)
        }
        await localStorage.setItem('dadosLocal:cartInfo', JSON.stringify(newCartProducts)
        )
    }

    const deletPruducts = async productid => {
        const newCart = cartProducts.filter(product => product.id !== productid)

        setcartProducts(newCart)
        await localStorage.setItem('dadosLocal:cartInfo', JSON.stringify(newCart)
        )
    }

    const increaseProcudts = async productid => {
        const newCart = cartProducts.map(product => {
            return product.id === productid ? { ...product, quantity: product.quantity + 1 } : product
        })

        setcartProducts(newCart)

        await localStorage.setItem('dadosLocal:cartInfo', JSON.stringify(newCart)
        )
    }

    const decreaseProcudts = async productid => {

        const cartIndex = cartProducts.findIndex(pd => pd.id === productid)

        if (cartProducts[cartIndex].quantity > 1) {

            const newCart = cartProducts.map(product => {
                return product.id === productid ? { ...product, quantity: product.quantity - 1 } : product
            })
            setcartProducts(newCart)

            await localStorage.setItem('dadosLocal:cartInfo', JSON.stringify(newCart)
            )
        }else{
            deletPruducts(productid)
        }
    }



    useEffect(() => {

        const loadUserData = async () => {
            const clientCartData = await localStorage.getItem('dadosLocal:cartInfo')

            if (clientCartData) {
                setcartProducts(JSON.parse(clientCartData))
            }
        }

        loadUserData()

    }, [])

    return (
        <CartContext.Provider value={{ putProductInCart, cartProducts, increaseProcudts, decreaseProcudts }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error('useCart must be used with userContext')
    }
    return context
}


CartProvider.propTypes = {
    children: PropTypes.node
}