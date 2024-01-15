"use client";

import styled from "styled-components";
import AuthComponent from "../../Components/AuthComponent";

export default function Home() {
  return (
    <LoginMainStyled>
      join!
      <AuthComponent page="join" />
    </LoginMainStyled>
  );
}

const LoginMainStyled = styled.main`
  background-color: #487056;
`;
