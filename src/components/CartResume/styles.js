import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  padding: 15px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 30px;

  .container-top {
    display: grid;
    grid-gap: 10px 100px;
    grid-template-areas:
      "title title"
      "itens intems-price"
      "delivery-tax delivery-tax-price";

    .title {
      grid-area: title;
      margin-bottom: 20px;
    }

    .itens {
      grid-area: itens;
    }

    .intems-price {
      grid-area: intems-price;
    }

    .delivery-tax {
      grid-area: delivery-tax;
    }

    .delivery-tax-price {
      grid-area: delivery-tax-price;
    }

    @media screen and (max-width: 768px) {
      h2 {
        font-size: 1.8;
      }

      p {
        font-size: 1rem;
      }
    }
  }

  .container-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    margin-top: 50px;
  }

  @media screen and (max-width: 768px) {

      p {
        font-size: 1.3rem;
      }
    }
`;
