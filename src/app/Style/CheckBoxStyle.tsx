import styled from "styled-components";

const CheckLabelStyle = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  user-select: none;
`;

const CheckInputStyle = styled.input`
  cursor: pointer;
  appearance: none;
  width: 20px;
  height: 20px;
  background-image: url("/check2-circle.svg");

  &:checked {
    background-image: url("check2-circle_checked.svg");
    background-repeat: no-repeat;
  }
`;

const CheckBoxTextStyle = styled.span`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 400;
`;

export { CheckLabelStyle, CheckInputStyle, CheckBoxTextStyle };
