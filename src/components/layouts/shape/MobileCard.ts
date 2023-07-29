import styled from "styled-components";
import { color } from "../../../utils/styles/color";
import { toRem } from "../../../utils/styles/convert";

interface CardProps {
  height?: number
}

export const Card = styled.div<CardProps>`
  width: 100%;
  height: ${({height}) => height ? toRem(height): toRem(396)};
  background: ${color.white};
  border-radius: 25px 25px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    width: 100%;
  }
`;


export const MobileTextContent = styled.div`
  margin-bottom: 25px;
  padding-inline: 32px;
`;
