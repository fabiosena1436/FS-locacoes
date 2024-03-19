import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageSlid from '../../assets/home-Header.svg'
import {
    SliderConatainer,
    ImageSlidev
} from './styles'

export function HomeCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <Slider {...settings}>
            <SliderConatainer>
                <ImageSlidev src={ImageSlid} alt="imagem home" />
            </SliderConatainer>
            <SliderConatainer>
                <ImageSlidev src={ImageSlid} alt="imagem home" />
            </SliderConatainer>
            <SliderConatainer>
                <ImageSlidev src={ImageSlid} alt="imagem home" />
            </SliderConatainer>
            <SliderConatainer>
                <ImageSlidev src={ImageSlid} alt="imagem home" />
            </SliderConatainer>
        </Slider>
    );
}


export default HomeCarousel