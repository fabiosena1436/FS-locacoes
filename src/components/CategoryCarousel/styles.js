import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerCategory = styled.div`
  width: 65vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  .hIaoYK {
    background-color: rgb(12 12 12);
    height: 5px;
    width: 5px;
    box-shadow: none;
  }

  .hIaoYK:hover,
  .hIaoYK:focus {
    cursor: pointer;
    box-shadow: rgb(12 12 12) 0px 0px 1px 3px;
  }

  .llDoiR {
    height: 5px;
    width: 5px;
    box-shadow: rgb(0 0 0) 0px 0px 1px 2px;
  }

  .hIaoYK:hover,
  .hIaoYK:focus {
    box-shadow: none;
  }

  @media screen and (max-width: 768px) {
    .fJHrVW {
      display: flex;
      flex-direction: row;
      width: 100vw;
    }
  }
`;
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
    background-color: #f2f2f2;
    color: #efefef;
  }

  .gCgsXv {
    background-color: rgb(14 14 14 / 50%);
    box-shadow: 0 0 1px 3px rgb(12 12 12);
  }

  @media screen and (max-width: 768px) {
    background-color: #efefef;
    padding: 10px 0;
  }
`;

export const CategoryImg = styled.img`
  width: 15vw;
  margin: 40px;

  @media screen and (max-width: 768px) {
    width: 150px;
    margin: 20px;
  }
`;

export const ContainerItens = styled.div`
  background-color: #ffff;
  padding: 0 12px;
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
    width: 38vw;
  }
`;

export const Button = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 16px;
  border: none;
  border-radius: 8px;
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
    margin-bottom: 16px;
    flex-direction: column;
  }
`;

export const Divisory = styled.div`
  width: 70vw;
  border: solid 1px #f2f2f2;
`;
