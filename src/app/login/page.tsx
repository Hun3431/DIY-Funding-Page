"use client";

import styled from "styled-components";
import LoginBoxComponent from "../Components/LoginBoxComponent";

export default function Home() {
  return (
    <LoginMainStyled>
      login!
      <LoginBoxComponent page="login"></LoginBoxComponent>
    </LoginMainStyled>
  );
}

const LoginMainStyled = styled.main`
  background-color: #487056;
`;
