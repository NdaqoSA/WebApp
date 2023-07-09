import styled from "styled-components";
import { color } from "../../../utils/styles/color";

export const Card = styled.div`
  width: 100%;
  height: 396px;
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
