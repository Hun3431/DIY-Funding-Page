import styled from "styled-components";

const DividerStyle = styled.div`
  border-top: #dddddd solid 1px;
`;

const SocialLoginTextStyle = styled.div`
  text-align: center;
  font-size: 12px;
  color: #54595e;
  margin: 20px 0;
`;

const SocialLoginBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 50px 50px;
`;

const SocialLoginIconStyle = styled.img`
  margin: 0 25px;
`;

const SocialLoginStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LoginTitleStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #54595e;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

const LoginTitleButtonStyle = styled.button`
  width: 50%;
  height: 60px;
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.fColor};
  background-color: ${(props) => props.bgColor};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  text-align: center;
`;

const LoginBoxStyle = styled.div`
  margin: 40px;
  width: 500px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export {
  DividerStyle,
  SocialLoginTextStyle,
  SocialLoginBoxStyle,
  SocialLoginIconStyle,
  SocialLoginStyle,
  LoginTitleStyle,
  LoginTitleButtonStyle,
  LoginBoxStyle,
};
