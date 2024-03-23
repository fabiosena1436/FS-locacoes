
import React, { useEffect, useState } from "react";

import Offers from '../../assets/OFERTAS.svg'
import Cart from '../../assets/carrinho.svg'
import api from '../../services/api'
import formatCurrency from "../../utils/formatCurrency";
import {
    Divisory,
    Container,
    CategoryImg,
    ContainerItens,
    Image,
    ImageCart,
    Button
} from './styles'
import Carousel from 'react-elastic-carousel'

export function OffersCarousel() {
    const [offers, setOffers] = useState([])

    useEffect(() => {
        async function loadOffers() {
            const { data } = await api.get('products')

            const onlyOffers = data.filter(product => product.offer)
                .map(product => {
                    return { ...product, formatedPrice: formatCurrency(product.price) }
                })


            setOffers(onlyOffers)
        }
        loadOffers()
    }, [])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
        { width: 1300, itemsToShow: 5 }
    ]


    return (
        <Container>
            <Divisory></Divisory>
            <CategoryImg src={Offers} alt="logo destaque" />

            <Carousel itemsToShow={5} style={{ width: '90%' }}
                breakPoints={breakPoints}>
                {
                    offers &&
                    offers.map(product => (

                        <ContainerItens key={product.id}>
                            <Image src={product.url} alt="foto do produto" />
                            <p> {product.name}</p>
                            <p> {product.formatedPrice}</p>
                            <Button>Alugar <ImageCart src={Cart} alt="Carrinho de compra" /></Button>
                        </ContainerItens>

                    ))
                }
            </Carousel>
            <Carousel itemsToShow={5} style={{ width: '90%' }}
                breakPoints={breakPoints}>
                {
                    offers &&
                    offers.map(product => (

                        <ContainerItens key={product.id}>
                            <Image src={product.url} alt="foto do produto" />
                            <p> {product.name}</p>
                            <p> {product.formatedPrice}</p>
                            <Button>Alugar <ImageCart src={Cart} alt="Carrinho de compra" /></Button>
                        </ContainerItens>

                    ))
                }
            </Carousel>
        </Container>
    )
}
