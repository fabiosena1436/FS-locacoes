import { Link } from 'react-router-dom'
import styled from "styled-components";


export const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;
  

  .rec.rec-arrow {
    background-color: #fa4e3c;
    color: #ffff;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .rec.rec-arrow:hover {
    border: 2px solid #fa4e3c;
    background-color: #ffff;
    color: #fa4e3c;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color:#F2F2F2;
    color: #efefef;
  }

  @media screen and (max-width: 768px) {
    background-color:#efefef;
  }
`;

export const CategoryImg = styled.img`
width: 15vw;
margin-top: 40px;


@media screen and (max-width: 768px) {
   width: 150px;
   margin-top:0;
}
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffff;
  padding: 20px;
  border-radius: 10px;
  transition: 0.5s ease;

  &:hover {
    border-color: #ffff;
    transform: scale(1.02);
  
  }

  
`;


export const Image = styled.img`
  width: 200px;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    width: 35vw;
  }
`;


export const Button = styled(Link)`
  margin-top: 16px;
  /* background-color: #fa4e3c; */
  border: none;
  border-radius: 8px;
  height: 50px;
  font-size: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 100%;
  text-align: center;
  color: #000000;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
   width: 100%;
   font-size: 15px;
   height: 40px;
  }
`;

export const Divisory = styled.div`
width: 70vw;
border: solid 1px  #F2F2F2;

`