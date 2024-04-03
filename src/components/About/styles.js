import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  width: 100vw;
  padding: 30px;

  h1 {
    text-align: center;
    margin: 10px;
  }

  p {
    text-align: justify;
    width: 50vw;
  }

  @media screen and (max-width: 768px) {
    p {
      text-align: justify;
      width: 80vw;
    }

    h1 {
    text-align: center;
    
  }
  }
`;

export const ContainerText = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  padding: 50px;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
   padding-top: 10px;
  }
`;
