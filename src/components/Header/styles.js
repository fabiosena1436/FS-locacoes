import styled from "styled-components";

export const Container = styled.div``;

export const ContainerHeader = styled.div`
  height: 15vh;
  background-color: #ffffff;
  box-shadow: 2px 3px 5px rgb(0, 0, 0, 0.115);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
gap: 10px;
    height: auto;
  }
`;

export const ContainerLeft = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;

  img {
    max-height: 10vh;
    max-width: 100%;
  }


  @media screen and (max-width: 768px) {
   
    height: auto;
    gap: 10px;
    img {
    max-height: 5vh;
    max-width: 100%;
  }
  }
`;

export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => (props.isActive ? "#d77424" : "#555555")};
  font-size: 20px;
  line-height: 19px;
  font-weight: ${props => (props.isActive ? "bold" : "normal")};

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;

    img{
     width: 15px;
    }

  
  }
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

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    max-height: 30px;
    max-width: 100%;
  }
  
  @media screen and (max-width: 768px) {
   gap: 10px;
  }
`;

export const Line = styled.div`
  height: 40px;
  border: 0.5px solid #f2f2f2;
`;

export const ContainerText = styled.div`
  p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #555555;
  }

  
  @media screen and (max-width: 768px) {
    p{
      font-size: 10px;
    }
  }
`

export const SectionHeader = styled.div`
  position: relative;
  min-height: 40px;
  background-color: #d77424;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 20px;
    color: #ffffff;
  }
`;
