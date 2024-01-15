"use client";

import styled from "styled-components";
import AuthComponent from "../../Components/AuthComponent";

export default function Home() {
  return (
    <LoginMainStyled>
      login!
      <AuthComponent page="login" />
    </LoginMainStyled>
  );
}

const LoginMainStyled = styled.main`
  background-color: #487056;
`;
