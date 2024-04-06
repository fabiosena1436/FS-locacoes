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
    background-color: rgb(9 9 9 / 50%);
    box-shadow: 0 0 1px 3px rgb(3 3 3);
    display: none;
  }

  .llDoiR:hover,
  .llDoiR:focus {
    box-shadow: rgb(22 22 22 / 50%) 0px 0px 1px 3px;
  }

  @media screen and (max-width: 768px) {
    .cQZIKn {
      display: none;
    }

    .hIaoYK:hover,
    .hIaoYK:focus {
      cursor: pointer;
      box-shadow: rgb(11 10 11) 0px 0px 1px 3px;
    }

    .hIaoYK {
      background-color: rgb(23 23 24 / 50%);
      font-size: 1.3em;
      height: 1px;
      width: 1px;
      box-shadow: rgb(15 15 16) 0px 0px 1px 3px;
    }

    .llDoiR {
      height: 1px;
      width: 1px;
      box-shadow: rgb(9 9 9 / 50%) 0px 0px 1px 2px;
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
    grid-template-columns: repeat(1, 0fr);
    gap: 10px;
  }
`;
