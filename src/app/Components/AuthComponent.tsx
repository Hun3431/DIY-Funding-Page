import { useRouter } from "next/navigation";
import {
  DividerStyle,
  LoginBoxStyle,
  LoginTitleButtonStyle,
  LoginTitleStyle,
  SocialLoginBoxStyle,
  SocialLoginIconStyle,
  SocialLoginStyle,
  SocialLoginTextStyle,
} from "../Style/AuthComponentStyle";
import LoginComponent from "./LoginComponent";
import JoinComponent from "./JoinComponent";

export default function AuthComponent({ ...props }: any) {
  const router = useRouter();
  return (
    <LoginBoxStyle>
      <LoginTitleStyle>
        <LoginTitleButtonStyle
          onClick={() => {
            router.push("/auth/login");
          }}
          fColor={props.page === "login" ? "#487056" : "#ffffff"}
          bgColor={props.page === "login" ? "#ffffff" : "#54595E"}
        >
          로그인
        </LoginTitleButtonStyle>
        <LoginTitleButtonStyle
          onClick={() => {
            router.push("/auth/join");
          }}
          fColor={props.page === "join" ? "#487056" : "#ffffff"}
          bgColor={props.page === "join" ? "#ffffff" : "#54595E"}
        >
          회원가입
        </LoginTitleButtonStyle>
      </LoginTitleStyle>
      {props.page === "login" ? <LoginComponent /> : <JoinComponent />}
      <SocialLoginBoxStyle>
        <DividerStyle />
        <SocialLoginTextStyle>다른 계정으로 로그인 하기</SocialLoginTextStyle>
        <SocialLoginStyle>
          <button>
            <SocialLoginIconStyle src="/Kakao.png" />
          </button>
          <button>
            <SocialLoginIconStyle src="/Naver.png" />
          </button>
          <button>
            <SocialLoginIconStyle src="/Google.png" />
          </button>
        </SocialLoginStyle>
      </SocialLoginBoxStyle>
    </LoginBoxStyle>
  );
}
