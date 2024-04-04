import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LoginImage = styled.img`
  height: 80%;
  flex-shrink: 0;
  border-radius: 10px 0px 0px 10px;
  @media screen and (max-width: 768px) {
    display: none;
   
  }
`;

export const ContainerItens = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 80%;
  background: #919191;
  box-shadow: 0px 4px 15px 0px rgba(74, 144, 226, 0.24);
  border-radius: 0 10px 10px 0;
  padding: 25px 75px;

  @media screen and (max-width: 768px) {
    width: 90vw;
    border-radius: 10px 10px 10px 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
      align-items: center;
    }
  }

  h1 {
    color: #fff;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    margin-top: 100px;

    @media screen and (max-width: 768px) {
      margin-top: 25px;
    }
  }
`;

export const Label = styled.p`
  color: #fff;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 25px 0 5px 0;
`;

export const Input = styled.input`
  width: 391.416px;
  height: 38.319px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
  border: ${(props) => (props.error ? " 2px solid #cc1717" : "none")};
  padding-left: 10px;

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 38.319px;
  }
`;

export const SignInlink = styled.p`
  color: #fff;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  width: 187.296px;
  height: 22.991px;

  a {
    cursor: pointer;
    text-decoration: underline;
    color: #fff;
  }
`;
