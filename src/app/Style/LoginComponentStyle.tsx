import styled from "styled-components";

const AgreementStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const AgreementItemStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const LoginFindBoxStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LoginFindStyle = styled.a`
  font-size: 12px;
  margin: 10px 15px;
`;

const LoginContentStyle = styled.div`
  margin-bottom: 10px;
`;

const LoginInputTitleStyle = styled.div`
  margin-bottom: 7px;
`;

const LoginInputBoxStyle = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #54595e;
  border-radius: 6px;
`;

const LoginButtonStyle = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 6px;
  border: 1px solid #54595e;
  background-color: #54595e;
  color: white;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  &:hover {
    background-color: #487056;
  }
`;

const LoginInputStyle = styled.input`
  width: 90%;
  outline: none;
`;

const LoginContentsStyle = styled.form`
  display: flex;
  font-size: 16px;
  flex-direction: column;
  margin: 40px 50px 10px;
`;

export {
  LoginFindBoxStyle,
  LoginFindStyle,
  LoginContentStyle,
  LoginInputTitleStyle,
  LoginInputBoxStyle,
  LoginButtonStyle,
  LoginInputStyle,
  LoginContentsStyle,
  AgreementStyle,
  AgreementItemStyle,
};
