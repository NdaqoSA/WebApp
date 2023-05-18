import styled from "styled-components";
import { color } from "../../../utils/styles/color";
import { dimensions } from "../../../utils/styles/dimensions";
import { toRem } from "../../../utils/styles/convert";

export const CardPopup = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  background: ${color.white_trans};
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  border-radius: ${dimensions.radius};
`;

export const CardList = styled.div`
  width: 100%;
  height: 100%;
`;

export const CardSearchContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const CardSearch = styled.div`
  width: 254px;
  height: 39px;
  border-radius: 10px;
  background-color: ${color.grey_trans};
  margin-inline: auto;
  transition: ease-in 0.4s;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-self: flex-start;

  & > small {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    column-gap: 5px;
    font-weight: 500;
    font-size: ${toRem(14)};
    pointer-events: none;

    & * {
      color: ${color.deep_grey};
    }
  }

  & > input {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: transparent;
    border: none;
    padding-inline: 0.5rem;

    &:focus {
      outline: none;
    }
  }

  &:hover {
    background: ${color.inactive_text};
  }
`;
export const CardSearchCancel = styled.div``;

export const CardListLang = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  margin-top: 10px;
  padding-inline: 58px;
`;

export const Lang = styled.p`
  width: 100%;
  font-size: ${toRem(14)};
  font-weight: 600;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  color: ${color.text_color_trans};
  transition: font-size ease-in 0.1s;
  &:hover {
    background: ${color.deep_blue};
    color: ${color.text_white};
    font-size: ${toRem(18)};
  }
`;
