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
  @media screen and (max-width: 768px) {
    .cQZIKn {
      display: none;
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
