import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Carousel from "react-elastic-carousel";

import {
  Container,
  CategoryButton,
  ProductsContainer,
} from "./styles";

import ProductsCarousel from "../../components/HomeCarousel";
import api from "../../services/api";
import formatCurrency from "../../utils/formatCurrency";
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
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function loadCategories() {
      try {
        const { data } = await api.get("categories");
        const newCategories = [{ id: 0, name: "Todos" }, ...data];
        setCategories(newCategories);
      } catch (err) {
        console.error("Erro ao carregar categorias", err);
      }
    }

    async function loadProducts() {
      try {
        const { data: allProducts } = await api.get("products");

        const formattedProducts = allProducts.map((product) => {
          return { ...product, formatedPrice: formatCurrency(product.price) };
        });

        setProducts(formattedProducts);
      } catch (err) {
        console.error("Erro ao carregar produtos", err);
      }
    }
    loadProducts();
    loadCategories();
  }, []);

  useEffect(() => {
    let result = products;

    if (activeCategory !== 0) {
      result = result.filter(
        (product) => product.category_id === activeCategory
      );
    }

    if (searchQuery.trim() !== "") {
      const term = searchQuery.toLowerCase();
      result = result.filter((product) =>
        product.name.toLowerCase().includes(term)
      );
    }

    setFilteredProducts(result);
  }, [activeCategory, products, searchQuery]);

  return (
    <Container>
      <ProductsCarousel />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          padding: "0 20px",
        }}
      >
        <input
          type="text"
          placeholder="Buscar produto pelo nome..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "100%",
            maxWidth: "500px",
            padding: "12px 20px",
            fontSize: "16px",
            borderRadius: "25px",
            border: "1px solid #ddd",
            boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
            outline: "none",
          }}
        />
      </div>

      <Carousel
        itemsToShow={15}
        breakPoints={[
          { width: 1, itemsToShow: 3 },
          { width: 400, itemsToShow: 3 },
          { width: 800, itemsToShow: 15 },
        ]}
        renderArrow={() => <></>}
      >
        {categories.map((category) => (
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
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))
        ) : (
          <div
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              padding: "40px",
              color: "#777",
            }}
          >
            Nenhum produto encontrado.
          </div>
        )}
      </ProductsContainer>
    </Container>
  );
}

Products.propTypes = {
  location: PropTypes.object,
};

export default Products;
