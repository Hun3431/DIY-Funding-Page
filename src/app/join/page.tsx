"use client";

import styled from "styled-components";
import LoginBoxComponent from "../Components/LoginBoxComponent";

export default function Home() {
  return (
    <LoginMainStyled>
      join!
      <LoginBoxComponent page="join"></LoginBoxComponent>
    </LoginMainStyled>
  );
}

const LoginMainStyled = styled.main`
  background-color: #487056;
`;
