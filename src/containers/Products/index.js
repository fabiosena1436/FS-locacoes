import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Carousel from 'react-elastic-carousel';

import {
    Container,
    CategoryButton,
    ProductsContainer
} from './styles'

import ProductsCarousel from "../../components/HomeCarousel";
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { CardProduct } from "../../components/index";

function Products({ location: { state } }) {

    let categoryId = 0;
    if (state?.categoryId) {
        categoryId = state.categoryId;
    }

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState(categoryId);

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories');

            const newCategories = [{ id: 0, name: 'Todos' }, ...data];
            setCategories(newCategories);
        }

        async function loadProducts() {
            const { data: allProducts } = await api.get('products');

            const newPoducts = allProducts.map(product => {
                return { ...product, formatedPrice: formatCurrency(product.price) };
            });

            setProducts(newPoducts);
        }
        loadProducts();
        loadCategories();
    }, []);

    useEffect(() => {
        if (activeCategory === 0) {
            setFilteredProducts(products);
        } else {
            const newFilteredProduct = products.filter(
                product => product.category_id === activeCategory
            );
            setFilteredProducts(newFilteredProduct);
        }
    }, [activeCategory, products]);

    return (
        <Container>
            <ProductsCarousel />
            <Carousel itemsToShow={15} breakPoints={[
                { width: 1, itemsToShow: 4 }, // 1 px de largura (todos os dispositivos)
                { width: 400, itemsToShow: 3 }, // 400px e acima (dispositivos maiores)
                { width: 800, itemsToShow: 15 } // 800px e acima (dispositivos ainda maiores)
            ]}>
                {categories.map(category => (
                    <CategoryButton
                        key={category.id}
                        type="button"
                        isActiveCategory={activeCategory === category.id}
                        onClick={() => setActiveCategory(category.id)}
                    >
                        {category.name}
                    </CategoryButton>
                ))}
            </Carousel>
            <ProductsContainer>
                {filteredProducts.map(product => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </ProductsContainer>
        </Container>
    );
}

Products.propTypes = {
    location: PropTypes.object
}

export default Products;
