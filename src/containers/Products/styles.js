import styled from "styled-components";

export const Container = styled.div`
  background: #f2f2f2;
  min-height: calc(100vh - 72px);

  .liNuNA {
    display: none;
  }

  .blnmcK {
    display: none;
  }

  .gCgsXv {
    background-color: #000000;

    display: none;
  }

  .hIaoYK {
    background-color: #000000;
    
}

.hIaoYK:hover, .hIaoYK:focus {

    box-shadow: none;
}

  .llDoiR:hover,
  .llDoiR:focus {
    background-color: #000000;
  }

  @media screen and (max-width: 768px) {
    .cQZIKn {
      display: none;
    }

    .hIaoYK:hover,
    .hIaoYK:focus {
      cursor: pointer;
      background-color: #000000;
    }

    .hIaoYK {
      font-size: 1.3em;
      height: 5px;
      width: 5px;
    }

    .llDoiR {
      height: 5px;
      width: 5px;
      background-color: #000000;
      box-shadow: none;
    }
  }
`;

export const ProductsImg = styled.img`
  width: 100%;
`;

export const CategoryButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${(props) => props.isActiveCategory && "2px solid #F9585D"};
  color: ${(props) => (props.isActiveCategory ? "#F9585D" : " #1E1E1E")};
  font-size: 17px;
  line-height: 20px;
  padding-bottom: 5px;
  margin-top: 40px;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 50px;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0fr);
  gap: 30px;
  padding: 40px;
  justify-content: center;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 0fr);
    gap: 10px;

    .lgnkSX {
      /* configuração do container */
      display: flex;
      padding: 20px 0 20px;
      flex-direction: column;
      align-items: center;
    }

    .cGVoGD {
      /* consfiguração da imagem */
      width: 140px;
    }
    .hQouLH {
      width: 149.81px;
      height: 30.129px;
      margin: 0 10px;
      /* configuraçao do botão */
    }

    .daBCsl {
      /* configuração do price */
      margin: 9px;
    }
  }
`;
