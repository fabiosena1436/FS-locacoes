import React, { useEffect, useState } from "react";

import { Container, CategoryButton, CategoriesMenu, ProductsContainer } from './styles'
import ProductsCarousel from "../../components/HomeCarousel";
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {CardProduct} from "../../components/index";

function Products() {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [activeCategory, setactiveCategory] = useState([0])

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            const newCategories = [{ id: 0, name: 'Todos' }, ...data]
            setCategories(newCategories)
        }

        async function loadProducts() {
            const { data: allProducts } = await api.get('products')

            const newPoducts = allProducts.map(product => {
                return { ...product, formatedPrice: formatCurrency(product.price) }
            })

            setProducts(newPoducts)
        }
        loadProducts()
        loadCategories()
    }, [])


    useEffect(() => {
        if (activeCategory === 0) {
            setFilteredProducts(products)
        } else {
            const newFilteredProduct = products.filter(
                product => product.category_id === activeCategory
            )
            setFilteredProducts(newFilteredProduct)
        }
    }, [activeCategory, products])

    return (
        <Container>

            <ProductsCarousel />
            <CategoriesMenu>
                {categories && categories.map(category => <CategoryButton type="button" key={category.id}

                    isActiveCategory={activeCategory === category.id}
                    onClick={() => { setactiveCategory(category.id) }}>
                    {category.name}</CategoryButton>)}
            </CategoriesMenu>
            <ProductsContainer>
                {filteredProducts && filteredProducts.map(product => (

                    <CardProduct key={product.id} product={product} />

                ))}
            </ProductsContainer>
        </Container >
    )
}

export default Products