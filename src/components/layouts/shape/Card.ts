import styled from "styled-components";
import { color } from "../../../utils/styles/color";
import { dimensions } from "../../../utils/styles/dimensions";
import { Link } from "react-router-dom";
import { toRem } from "../../../utils/styles/convert";
import { Text } from "../../typo/Typo";
interface CardButtonProps {
  disable?: true;
  width?: number;
  height?: number;
  fill?: true;
  size?: number;
}

interface DimensionsProps {
  mw?: number;
  pi?: number;
}

interface ButtonProps {
  size?: number;
  weight?: number;
}

interface CardProps {
  border: "default" | "hide" | "back" | "exit";
}

interface CardHeaderProps {
  mb?: number;
}

export const Card = styled.div<CardProps>`
  position: relative;
  max-width: 327px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  border-radius: ${dimensions.radius};
  background-color: ${color.bg};
  border: 1px solid
    ${({ border }) =>
      border === "default"
        ? color.border
        : border === "hide"
        ? "transparent"
        : border === "back"
        ? color.deep_blue_2
        : color.red};
  box-shadow: inset 0px 0px 15px rgba(247, 248, 252, 0.4),
    inset 0px 0px 0px 1px rgba(247, 248, 252, 0.15);
  overflow: hidden;
`;

// CARD HEADER

export const CardHeader = styled.div<CardHeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 5px;
  padding-top: 5px;
  margin-bottom: ${({ mb }) => (mb ? toRem(mb) : "15px")};
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonTooltip = styled(Text)`
  color: ${color.red};
  font-weight: 700 !important;
  font-size: 13px !important;
`;
export const ButtonBackTooltip = styled(Text)`
  color: ${color.deep_blue_2};
  font-weight: 700 !important;
  font-size: 13px !important;
`;

export const CardTextHeader = styled.div`
  padding-inline: 27px;
  margin-bottom: 20px;
`;
export const CardTextBottom = styled.div<DimensionsProps>`
  padding-inline: ${({ pi }) => (pi ? toRem(pi) : "35px")};
  margin-bottom: 15px;
`;

export const CardButton = styled.div`
  padding-inline: 20px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`;

const DefaultCardButton = styled(Link)<CardButtonProps>`
  width: ${({ width }) => (width ? `${width}px` : "57px")};
  height: ${({ height }) => (height ? `${height}px` : "46px")};
  transition: ease 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.5rem;
  cursor: ${({ disable }) => (disable ? "default" : "pointer")};
`;

export const BackCardButton = styled(DefaultCardButton)<CardButtonProps>`
  border-radius: 16px 0;
  transition: linear 0.2s;
  background: ${({ disable, fill }) =>
    disable ? color.inactive : fill ? color.blue : color.blue_trans};

  & path {
    transition: linear 0.2s;
    fill: ${({ disable, fill }) =>
      disable ? color.inactive_text : fill ? color.white : color.blue};
  }

  &:hover {
    background: ${({ disable }) => (disable ? color.inactive : color.blue)};
  }

  &:hover path {
    fill: ${({ disable }) => (disable ? color.inactive_text : color.white)};
  }
`;
export const ExitCardButton = styled(DefaultCardButton)<CardButtonProps>`
  border-radius: 0px 16px;
  transition: linear 0.2s;
  background: ${({ disable, fill }) =>
    disable ? color.inactive : fill ? color.red : color.red_trans};
  & path {
    fill: ${({ disable, fill }) =>
      disable ? color.inactive_text : fill ? color.white : color.red};
    transition: linear 0.2s;
  }
  &:hover {
    background: ${({ disable }) => (disable ? color.inactive : color.red)};
  }

  &:hover path {
    fill: ${({ disable }) => (disable ? color.inactive_text : color.white)};
  }
`;

export const DefaultButton = styled(Link)<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${toRem(3)};
  width: 100%;
  height: 52px;
  font-weight: 600;
  border-radius: ${dimensions.card_radius_btn};
  transition: ease 0.2s;
`;
export const CardRegisterButton = styled(DefaultButton)`
  background-color: ${color.grey_trans};
  margin-bottom: 14px;
  color: ${color.text_color};
  font-size: ${({ size }) => (size ? toRem(size) : toRem(14))};
  width: ${({ weight }) => (weight ? weight : 500)};

  &:hover {
    color: ${color.text_color};
    background: ${color.grey};
  }
`;
export const CardSigntButton = styled(DefaultButton)`
  background-color: ${color.blue};
  color: ${color.text_white};
  font-size: ${toRem(14)};
  font-size: ${({ size }) => (size ? toRem(size) : toRem(14))};
  width: ${({ weight }) => (weight ? weight : 500)};

  &:hover {
    color: ${color.text_white};
    background: ${color.deep_blue};
  }
  & > * {
    font-size: ${toRem(14)};
    font-weight: 500;
  }
`;

export const CardButtonLang = styled(Link)<CardButtonProps>`
  width: ${({ width }) => (width ? toRem(width) : "147px")};
  height: ${({ height }) => (height ? toRem(height) : "27px")};
  border-radius: 5px;
  color: ${({ fill }) => (fill ? color.blue : color.text_color_trans_2)};
  background-color: ${({ fill }) =>
    fill ? color.blue_trans_2 : color.grey_trans};
  display: flex;
  gap: 3px;
  transition: ease 0.4s;
  font-size: ${({ size }) => (size ? toRem(size) : toRem(11))};
  font-weight: 600;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  & > *:first-child {
    position: relative;
    top: ${({ fill }) => (fill ? toRem(2) : "")};
    left: ${({ fill }) => (fill ? toRem(8) : "")};
  }

  & path {
    fill: ${({ fill }) => (fill ? color.blue : color.text_color_trans_2)};
  }

  &:hover {
    background-color: ${color.blue_trans_2};
    color: ${color.blue};
  }

  &:hover path {
    fill: ${color.blue};
  }
`;
