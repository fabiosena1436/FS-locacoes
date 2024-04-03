import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageSlid from '../../assets/home-Header.svg'
import ImageSlid1 from '../../assets/home-Header-1.svg'
import ImageSlid2 from '../../assets/home-Header-2.svg'
import ImageSlid3 from '../../assets/home-Header-3.svg'
import {
    SliderConatainer,
    ImageSlidev,ContainerImage
} from './styles'

export function HomeCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
    };

    return (
        <div style={{backgroundColor:'#ffffff'}}>
            <ContainerImage>
                <Slider {...settings} className='itemSlide'>
                    <SliderConatainer>
                        <ImageSlidev src={ImageSlid} alt="imagem home" />
                    </SliderConatainer>
                    <SliderConatainer>
                        <ImageSlidev src={ImageSlid1} alt="imagem home" />
                    </SliderConatainer>
                    <SliderConatainer>
                        <ImageSlidev src={ImageSlid2} alt="imagem home" />
                    </SliderConatainer>
                    <SliderConatainer>
                        <ImageSlidev src={ImageSlid3} alt="imagem home" />
                    </SliderConatainer>
                </Slider>
            </ContainerImage>
        </div>
    );
}


export default HomeCarousel