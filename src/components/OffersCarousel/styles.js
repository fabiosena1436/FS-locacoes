import styled from "styled-components";

export const ContainerCategory = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    .fJHrVW {
      display: flex;
      flex-direction: row;
      width: 100vw;
    }
  }
`;
export const Container = styled.div`
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 35px 0;
  width: 100vw;

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

  @media screen and (max-width: 768px) {
    gap: 15px;
    .rec.rec-arrow {
      display: none;
    }

    .gCgsXv {
      background-color: rgb(14 14 14 / 50%);
      box-shadow: 0 0 1px 3px rgb(12 12 12);
    }
  }
`;

export const CategoryImg = styled.img`
  width: 15%;
`;
export const ImageCart = styled.img`
  width: 10%;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffff;
  padding: 20px 30px;
  border-radius: 10px;
  /* border: .2rem solid #000000; */
  transition: 0.5s ease;
  align-items: center;
  &:hover {
    border-color: #ffff;
    transform: scale(1.02);
  }

  p {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    color: #424242;
  }

  .hIaoYK {
    background-color: rgb(4 1 9);
    box-shadow: rgb(9 9 9) 0px 0px 1px 3px;
  }

  @media screen and (max-width: 768px) {
    padding: 20px 10px;
    p {
      font-size: 0.8rem;
      text-align: center;
      height: 8vw;
    }

    .hIaoYK {
      height: 1px;
      width: 1px;
    }
  }
`;
export const Image = styled.img`
  width: 200px;
  border-radius: 5px;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    width: 35vw;
  }
`;

export const ImgEmphasis = styled.img`
  width: 13vw;

  @media screen and (max-width: 768px) {
    width: 130px;
  }
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

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 15px;
    height: 40px;
    margin-top: 0;
  }
`;
