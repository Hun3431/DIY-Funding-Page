import { useRouter } from "next/navigation";
import styled from "styled-components";
import {
  LoginBoxStyle,
  LoginTitleButtonStyle,
  LoginTitleStyle,
} from "../Style/LoginBoxStyle";
import LoginComponent from "./LoginComponent";
import JoinComponent from "./JoinComponent";

export default function LoginBoxComponent({ ...props }: any) {
  const router = useRouter();
  return (
    <LoginBoxStyle>
      <LoginTitleStyle>
        <LoginTitleButtonStyle
          onClick={() => {
            router.push("/login");
          }}
          fColor={props.page === "login" ? "#487056" : "#ffffff"}
          bgColor={props.page === "login" ? "#ffffff" : "#54595E"}
        >
          로그인
        </LoginTitleButtonStyle>
        <LoginTitleButtonStyle
          onClick={() => {
            router.push("/join");
          }}
          fColor={props.page === "join" ? "#487056" : "#ffffff"}
          bgColor={props.page === "join" ? "#ffffff" : "#54595E"}
        >
          회원가입
        </LoginTitleButtonStyle>
      </LoginTitleStyle>
      {props.page === "login" ? <LoginComponent /> : <JoinComponent />}
      <SocialLoginBoxStyle>
        <button>
          <SocialLoginIconStyle src="/Kakao.png" />
        </button>
        <button>
          <SocialLoginIconStyle src="/Naver.png" />
        </button>
        <button>
          <SocialLoginIconStyle src="/Google.png" />
        </button>
      </SocialLoginBoxStyle>
    </LoginBoxStyle>
  );
}

const SocialLoginIconStyle = styled.img`
  margin: 0 25px;
`;

const SocialLoginBoxStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 50px;
`;
