import styled from "styled-components";

export const SliderConatainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 767px) {
    .slick-arrow .slick-next {
      display: none;
    }
  }
`;

export const ImageSlidev = styled.img`
  display: flex;
  width: 100%;
  border-radius: 10px;
  padding: 20px 0 50px;

  @media screen and (max-width: 768px) {
    padding: 0px 0 0px;
  }
`;

export const ContainerImage = styled.div`
  width: 60%;
  margin: 0 auto;

  @media (max-width: 767px) {
    width: 100%;
    padding-bottom: 25px;

    .slick-arrow .slick-next {
      display: none;
    }
  }
`;
