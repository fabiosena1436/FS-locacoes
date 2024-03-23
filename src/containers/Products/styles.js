import styled from "styled-components";

export const Container = styled.div`
 background:#F2F2F2;
 min-height: calc(100vh - 72px);

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
 
`;
