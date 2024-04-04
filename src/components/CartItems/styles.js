import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  padding: 10px;
  width: max-content;
  margin: 30px;
  @media screen and (max-width: 768px) {
    margin: 5px 0;
   width: 100%;
  }
  
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  border-bottom: 1px solid #f2f2f2;
  p {
    font-size: 16px;
    color: #b5b5b5;
  }

  @media screen and (max-width: 768px) {
   width: 100vw;
  }

  p {
    font-size: 0.8rem;
    
  }
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 20px;
  width: max-content;
  grid-gap: 10px 15px;

  img {
    border-radius: 10px;
    width: 120px;
  }

  p {
    font-size: 16px;
    color: #000000;
    padding-top: 5px;
  }

  .quantity-container {
    display: flex;
    gap: 20px;

    button {
      height: 30px;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }

  }

  @media screen and (max-width: 768px) {
   width: 90vw;
   padding: 20px 5px;
   img{
    width: 50px;
   }
   p{
    font-size: 0.7rem;
   }
   
   .quantity-container {
   
    button {
      
      font-size: 1rem;
      
    }

  }
  }
`;

export const StatusCar = styled.div`
  padding: 20px;
  text-align: center;
  font-weight: bold;
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
    margin-top: 20px;
  }
`;
