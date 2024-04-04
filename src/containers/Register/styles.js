import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterImage = styled.img`
  height: 90%;
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
  height: 90%;
  background: #919191;
  box-shadow: 0px 4px 15px 0px rgba(74, 144, 226, 0.24);
  border-radius: 0 10px 10px 0;
  padding: 25px 75px;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    color: #fff;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    margin-top: 25px;
  }

  @media screen and (max-width: 768px) {
    height: 90%;
    width: 90vw;
    padding: 25px 10px;
    align-items: center;
    border-radius: 10px 10px 10px 10px;
    img {
      width: 200px;
      margin-top: 30px;
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
  margin-top: ${(props) => (props.error ? " 12px" : "28px")};
  margin-bottom: 5px;
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
    width: 250px;
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
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;
