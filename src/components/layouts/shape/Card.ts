import styled from "styled-components";
import { color } from "../../../utils/styles/color";
import { dimensions } from "../../../utils/styles/dimensions";
import { Link } from "react-router-dom";
import { toRem } from "../../../utils/styles/convert";

interface CardButtonProps {
  disable?: true;
}

export const Card = styled.div`
  position: relative;
  max-width: 327px;
  width: 100%;
  height: 355px;
  display: flex;
  flex-direction: column;
  border-radius: ${dimensions.radius};
  background-color: ${color.bg};
  border: 1px solid ${color.border};
  box-shadow: inset 0px 0px 15px rgba(247, 248, 252, 0.4),
    inset 0px 0px 0px 1px rgba(247, 248, 252, 0.15);
  overflow: hidden;
`;

// CARD HEADER

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 5px;
  padding-top: 5px;
  margin-bottom: 15px;
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardTextHeader = styled.div`
  padding-inline: 27px;
  margin-bottom: 20px;
`;
export const CardTextBottom = styled.div`
  padding-inline: 37px;
  margin-bottom: 15px;
`;

export const CardButton = styled.div`
  padding-inline: 20px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`;

const DefaultCardButton = styled(Link)<CardButtonProps>`
  width: 57px;
  height: 46px;
  transition: ease 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.5rem;
  cursor: ${({ disable }) => (disable ? "default" : "pointer")};
`;

export const BackCardButton = styled(DefaultCardButton)<CardButtonProps>`
  border-radius: 16px 0;
  background: ${({ disable }) => (disable ? color.inactive : color.blue_trans)};
  color: ${({ disable }) => (disable ? color.inactive_text : color.blue)};

  &:hover {
    background: ${({ disable }) => (disable ? color.inactive : color.blue)};
    color: ${({ disable }) => (disable ? color.inactive_text : color.white)};
  }
`;
export const ExitCardButton = styled(DefaultCardButton)<CardButtonProps>`
  border-radius: 0px 16px;
  background: ${({ disable }) => (disable ? color.inactive : color.red_trans)};
  color: ${({ disable }) => (disable ? color.inactive_text : color.red)};
  &:hover {
    background: ${({ disable }) => (disable ? color.inactive : color.red)};
    color: ${({ disable }) => (disable ? color.inactive_text : color.white)};
  }
`;

export const DefaultButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${toRem(3)};
  width: 100%;
  height: 52px;
  border-radius: ${dimensions.card_radius_btn};
  transition: ease 0.4s;
`;
export const CardRegisterButton = styled(DefaultButton)`
  background-color: ${color.grey_trans};
  margin-bottom: 15px;
  color: ${color.text_color};
  font-size: ${toRem(14)};

  &:hover {
    color: ${color.text_color};
    background: ${color.grey};
  }
  & > * {
    font-weight: 500;
  }
`;
export const CardSigntButton = styled(DefaultButton)`
  background-color: ${color.blue};
  color: ${color.text_white};
  font-size: ${toRem(14)};

  &:hover {
    color: ${color.text_white};
    background: ${color.deep_blue};
  }
  & > * {
    font-size: ${toRem(14)};
    font-weight: 500;
  }
`;

export const CardButtonLang = styled(Link)`
  width: 147px;
  height: 27px;
  border-radius: 5px;
  color: ${color.text_color_trans_2};
  background-color: ${color.grey_trans};
  display: flex;
  gap: 3px;
  transition: ease 0.4s;
  font-size: ${toRem(11)};
  font-weight: 600;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  &:hover {
    background-color: ${color.blue_trans_2};
    color: ${color.blue};
  }
`;
