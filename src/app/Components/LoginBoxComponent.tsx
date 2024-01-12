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
