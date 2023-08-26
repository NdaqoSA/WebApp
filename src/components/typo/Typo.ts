import styled from "styled-components";
import { color } from "../../utils/styles/color";
import { toRem } from "../../utils/styles/convert";

interface TextProps {
  align?: "left" | "center" | "right";
  size?: number;
  weight?: number;
  fill?: true;
}

export const TextLogo = styled.h1`
  font-size: ${toRem(13)};
  color: ${color.text_color};
  font-weight: 700;
  text-align: center;
`;

export const Text = styled.p<TextProps>`
  display: flex;
  align-items: center;
  color: ${({ fill }) =>
    fill ? color["ndaqo-black"] : color.text_color_trans};
  font-size: ${(props) => (props.size ? toRem(props.size) : toRem(12))};
  font-weight: ${(props) => (props.weight ? props.weight : 600)};
  text-align: ${({ align }) => (align ? align : "left")};
  line-height: ${toRem(15)};
  gap: 3px;
`;

export const SubText = styled.p<TextProps>`
  color: ${({ fill }) => (fill ? color["ndaqo-black"] : color.text_color)};
  font-size: ${({ size }) => (size ? toRem(size) : toRem(10))};
  font-weight: ${({ weight }) => (weight ? weight : 500)};
  text-align: ${({ align }) => align};
  line-height: ${toRem(12)};
`;
