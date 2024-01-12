import {
  AgreementItemStyle,
  AgreementStyle,
  LoginButtonStyle,
  LoginContentStyle,
  LoginContentsStyle,
  LoginFindBoxStyle,
  LoginFindStyle,
  LoginInputBoxStyle,
  LoginInputStyle,
  LoginInputTitleStyle,
} from "../Style/LoginComponentStyle";
import CheckBoxComponent from "./CheckBoxComponent";

export default function JoinComponent() {
  return (
    <LoginContentsStyle>
      <LoginContentStyle>
        <LoginInputTitleStyle>이메일</LoginInputTitleStyle>
        <LoginInputBoxStyle>
          <LoginInputStyle
            type="text"
            name="email"
            placeholder="이메일을 입력해 주세요."
          />
          <button
            onClick={(event) => {
              event.preventDefault();
              alert("인증번호가 전송되었습니다.");
            }}
          >
            전송
          </button>
        </LoginInputBoxStyle>
        <LoginInputBoxStyle>
          <LoginInputStyle type="text" name="email_auth" />
        </LoginInputBoxStyle>
      </LoginContentStyle>
      <LoginContentStyle>
        <LoginInputTitleStyle>비밀번호</LoginInputTitleStyle>
        <LoginInputBoxStyle>
          <LoginInputStyle
            type="password"
            name="password"
            placeholder="영문, 숫자, 특수문자 포함 8~20자"
          />
        </LoginInputBoxStyle>
      </LoginContentStyle>
      <LoginContentStyle>
        <LoginInputTitleStyle>비밀번호 확인</LoginInputTitleStyle>
        <LoginInputBoxStyle>
          <LoginInputStyle
            type="password"
            name="password_check"
            placeholder="비밀번호를 다시 입력해 주세요."
          />
        </LoginInputBoxStyle>
      </LoginContentStyle>
      <LoginContentStyle>
        <LoginInputTitleStyle>닉네임</LoginInputTitleStyle>
        <LoginInputBoxStyle>
          <LoginInputStyle
            type="text"
            name="username"
            placeholder="닉네임을 입력해주세요."
          />
        </LoginInputBoxStyle>
      </LoginContentStyle>
      <AgreementStyle>
        <CheckBoxComponent checkId="check1" text="개인정보 수집 및 이용 동의" />
        <a href="" target="_blank" rel="noopener noreferrer">
          [보기]
        </a>
      </AgreementStyle>
      <AgreementStyle>
        <CheckBoxComponent checkId="check2" text="서비스 이용약관 동의" />
        <a href="" target="_blank" rel="noopener noreferrer">
          [보기]
        </a>
      </AgreementStyle>
      <LoginContentStyle>
        <LoginButtonStyle type="submit" value="회원가입"></LoginButtonStyle>
      </LoginContentStyle>
    </LoginContentsStyle>
  );
}
