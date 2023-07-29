import styled from "styled-components";
import { toRem } from "../../../utils/styles/convert";
import { color } from "../../../utils/styles/color";

/**
 * mw:number [Max Width x px]
 * pi:number [Padding Inline x px]
 */
interface FormProps {
  mw?: number;
  pi?: number;
}

interface FormContainerProps {
  mb?: number;
}

interface InputButtonProps {
  active: boolean;
}

interface InputProps {
  active: boolean;
}

export const Form = styled.form<FormProps>`
  width: 100%;
  min-width: 250px;
  max-width: ${(props) => (props.mw ? toRem(props.mw) : "100%")};
  padding-inline: ${(props) => (props.pi ? toRem(props.pi) : 0)};
`;
export const FormMobile = styled.form<FormProps>`
  width: 100%;
  padding-inline: 22px;
`;
export const InputLoginButton = styled.button<InputButtonProps>`
  position: relative;
  width: 100%;
  height: 52px;
  border-radius: 15px;
  font-size: 14px;
  border: 1px solid
    ${({ active }) => (active ? color.deep_blue_2 : color.fade_blue_n)};
  background: ${({ active }) => (active ? color.deep_blue_2 : color.fade_blue)};
  color: ${({ active }) => (active ? color.text_white : color.fade_grey)};
  transition: linear 0.2s;
  cursor: ${({ active }) => (active ? "pointer" : "default")};
`;

export const InputContainer = styled.div<InputProps>`
  position: relative;
  width: 100%;
  height: 52px;
  border-radius: 15px;
  border: 1px solid
    ${({ active }) => (active ? color.deep_blue_2 : color.border)};
  overflow: hidden;
`;

export const InputTextLabel = styled.label<InputProps>`
  position: absolute;
  width: max-content;
  top: ${({ active }) => (active ? "5px" : "50%")};
  left: ${({ active }) => (active ? "12px" : "50%")};
  font-size: ${({ active }) => (active ? toRem(10) : toRem(16))};
  font-weight: 500;
  color: ${({ active }) => (active ? color.text_color_2 : color.fade_grey)};
  transform: translateX(${({ active }) => (active ? 0 : "-50%")})
    translateY(${({ active }) => (active ? 0 : "-50%")});
  transition: linear 0.3s;
  pointer-events: none;

  & span {
    color: ${({ active }) => (active ? color.red : color.fade_grey)};
  }
`;

export const InputIcon = styled.div<InputProps>`
  position: absolute;
  top: 50%;
  right: 15px;
  width: 34px;
  height: 32px;
  border-radius: 5px;
  transform: translateY(-50%);
  pointer-events: ${({ active }) => (active ? "visible" : "none")};
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: linear 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & path {
    transition: linear 0.2s;
  }

  &:hover path {
    fill: ${color.deep_blue_2};
  }

  &:hover {
    background-color: ${color.fade_blue};
  }
`;

export const InputText = styled.input<InputProps>`
  position: absolute;
  top: ${({ active }) => (active ? "20px" : "50%")};
  left: 50%;
  width: ${({ active }) => (active ? "307px" : "100%")};
  height: ${({ active }) => (active ? "25px" : "100%")};
  caret-color: ${color.deep_blue_2};
  transform: translateX(-50%)
    translateY(${({ active }) => (active ? 0 : "-50%")});
  background: transparent;
  border: none;
  color: ${color.text_color_2};
  font-size: 16px;
  display: ${({ active }) => (active ? "block" : "none")};
  transition: ease 0.3s;

  &:focus {
    outline: none;
  }
`;

export const InputTextPassword = styled(InputText)`
  left: 12px;
  width: ${({ active }) => (active ? "260px" : "100%")};
  transform: translateX(0);
`;

export const FormTextContainer = styled.div<FormContainerProps>`
  margin-bottom: ${({ mb }) => (mb ? toRem(mb) : "15px")};
`;

export const FormInputContainer = styled.div<FormContainerProps>`
  margin-bottom: ${({ mb }) => (mb ? toRem(mb) : "15px")};
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
