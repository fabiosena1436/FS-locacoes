import styled from "styled-components";

export const Container = styled.div``;
export const FooterimgDiv = styled.div`
  img {
    width: 15vw;
  }

  @media screen and (max-width: 768px) {
   
    img {
      display: flex;
    width: 30vw;
    margin-top: 20px;
  }
  }
`;

export const SbFooter = styled.div`
  height: 20vh;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 100px;

  @media screen and (max-width: 768px) {
    gap: 20px;
   
  }
`;

export const SbFooterLinksDiv = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    margin-bottom: 10px;
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {
   p{
    font-size: 0.6rem;
   }
   
  }

`;
export const SocialMedea = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    width: 30px;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 20px;
    }
    flex-direction: column;
  }
`;
export const Footerreserv = styled.div`
  height: 50px;
  background-color: #d77424;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;

  
`;
