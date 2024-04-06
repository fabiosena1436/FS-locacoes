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

  @media screen and (max-width: 768px) {
  }
`;
