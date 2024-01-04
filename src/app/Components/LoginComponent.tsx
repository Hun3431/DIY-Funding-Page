import {
  LoginButtonStyle,
  LoginContentStyle,
  LoginContentsStyle,
  LoginFindBoxStyle,
  LoginFindStyle,
  LoginInputBoxStyle,
  LoginInputStyle,
  LoginInputTitleStyle,
} from "../Style/LoginComponentStyle";

export default function LoginComponent() {
  return (
    <LoginContentsStyle>
      <LoginContentStyle>
        <LoginInputTitleStyle>이메일</LoginInputTitleStyle>
        <LoginInputBoxStyle>
          <LoginInputStyle type="text" placeholder="이메일을 입력해 주세요." />
        </LoginInputBoxStyle>
      </LoginContentStyle>
      <LoginContentStyle>
        <LoginInputTitleStyle>비밀번호</LoginInputTitleStyle>
        <LoginInputBoxStyle>
          <LoginInputStyle
            type="password"
            placeholder="비밀번호를 입력해 주세요."
          />
        </LoginInputBoxStyle>
      </LoginContentStyle>
      <LoginContentStyle>
        <LoginButtonStyle type="submit" value="로그인"></LoginButtonStyle>
      </LoginContentStyle>
      <LoginFindBoxStyle>
        <LoginFindStyle href="">아이디 찾기</LoginFindStyle>
        <LoginFindStyle href="">비밀번호 재설정</LoginFindStyle>
      </LoginFindBoxStyle>
    </LoginContentsStyle>
  );
}
