import {
  CheckBoxTextStyle,
  CheckInputStyle,
  CheckLabelStyle,
} from "../Style/CheckBoxStyle";

export default function CheckBoxComponent(props: any) {
  return (
    <>
      <CheckLabelStyle htmlFor={props.text}>
        <CheckInputStyle type="checkbox" id={props.text} name={props.text} />
        <CheckBoxTextStyle>{props.text}</CheckBoxTextStyle>
      </CheckLabelStyle>
    </>
  );
}
