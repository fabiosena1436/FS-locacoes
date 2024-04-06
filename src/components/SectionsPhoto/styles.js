import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerImage = styled.div`
  display: flex;
  width: 80vh;
  justify-content: center;
  gap: 46px;
  img {
    width: 15vw;
    padding: 81px 0;

  }

  h1{
    margin: 20px 0;
  }

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 0fr);
    gap: 15px;
    img {
    width: 15vw;
    padding: 81px 0;
    width: 155px;
    padding: 4px 0px;
  }

  h1{
    margin: 20px 0;
    font-size: 0.8rem;
    margin-top: 20px;
  }
  }
`;
