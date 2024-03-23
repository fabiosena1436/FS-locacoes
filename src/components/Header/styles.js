import styled from "styled-components";

export const Container = styled.div`
 

`;

export const ContainerHeader = styled.div`
  height: 15vh;
  background-color: #ffffff;
  box-shadow: 2px 3px 5px rgb(0, 0, 0, 0.115);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  

`;

export const ContainerLeft = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;

  img {
    max-height: 10vh;
  }
`;

export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color:${props => (props.isActive ? "#d77424" : "  #555555")} ;
  font-size: 20px;
  line-height: 19px;
  font-weight: ${props => (props.isActive ? "bold" : "  normal")};
`;

export const PageLinkExit = styled.a`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #d77424;
  cursor: pointer;
`;

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    max-height: 30px;
  }
`;
export const Line = styled.div`
  height: 40px;
  border: 0.5px solid #F2F2F2;
`;

export const ContainerText = styled.div`
  p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #555555;
  }
`;

export const SectionHeader = styled.div`
  position: relative;
  min-height: 40px;
  background-color: #d77424;
  display: flex;
  justify-content: center;
  align-items: center;

  p{
    font-size: 20px;
    color: #ffffff;
  }
`;
