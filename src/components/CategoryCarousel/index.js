import React, { useEffect, useState } from "react";
import api from '../../services/api';
import Carousel from 'react-elastic-carousel';
import Category from '../../assets/CATEGORY.svg';

import {
    Container,
    CategoryImg,
    ContainerItens,
    Image,
    Button,
    Divisory,
    ContainerCategory
} from './styles';

export function CategoryCarousel() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function loadCategories() {
            try {
                const { data } = await api.get('categories');
                setCategories(data);
            } catch (error) {
                console.error('Error loading categories:', error);
            }
        }
        loadCategories();
    }, []);

    const breakPoints = [
        { width: 2, itemsToShow: 2 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
        { width: 1300, itemsToShow: 4 }
    ];

    return (
        <Container>
            <ContainerCategory>
                <Divisory></Divisory>
                <CategoryImg src={Category} alt="logo categoria" />
                <Carousel
                    breakPoints={breakPoints}
                    pagination={true} // Oculta a paginação
                    showArrows={false} // Oculta as setas de navegação
                
                >
                    {categories.map(category => (
                        <ContainerItens key={category.id}>
                           
                            <Button to={{
                                pathname:'/produtos',
                                state: { categoryId: category.id }
                            }}>
                                 <Image src={category.url} alt="foto da categoria" />
                                {category.name}
                            </Button>
                        </ContainerItens>
                    ))}
                </Carousel>
            </ContainerCategory>
        </Container>
    );
}
