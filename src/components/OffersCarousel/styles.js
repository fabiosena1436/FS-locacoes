import styled from "styled-components";


export const Divisory = styled.div`
width: 70vw;
border: solid 1px  #bebebf;

`


export const Container = styled.div`
  background-color: #f6f6f6;
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
    background-color: #bebebf;
    color: #efefef;
  }
`;

export const CategoryImg = styled.img``;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffff;
  padding: 2rem;
  border-radius: 10px;
  /* border: .2rem solid #000000; */
  transition: 0.5s ease;

  &:hover {
    border-color: #ffff;
    transform: scale(1.02);
  }

  p {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    color:  #424242;
  }
`;
export const Image = styled.img`
  width: 200px;
  border-radius: 10px;
  margin-bottom:16px;
`;
export const Button = styled.button`
  margin-top: 16px;
  background-color: #fa4e3c;
  border: none;
  border-radius: 8px;
  height: 50px;
  font-size: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 100%;
  text-align: center;
  color: #ffff;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
