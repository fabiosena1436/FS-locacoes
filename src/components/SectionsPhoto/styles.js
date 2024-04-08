import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    margin-top: 20px;
  }

  @media screen and (max-width: 768px) {
    h1 {
      margin: 20px 0;
      font-size: 0.9rem;
     
    }
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  gap: 46px;
  img {
    width: 15vw;
    padding: 81px 0;
  }

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 0fr);
    gap: 15px;
    img {
      width: 45vw;
      padding: 4px 0px;
    }
  }
`;
