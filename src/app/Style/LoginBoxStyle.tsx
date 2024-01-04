import styled from "styled-components";

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

export { LoginTitleStyle, LoginTitleButtonStyle, LoginBoxStyle };
