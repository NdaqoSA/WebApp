import styled from "styled-components";
import { color } from "../../../utils/styles/color";
import { dimensions } from "../../../utils/styles/dimensions";
import { toRem } from "../../../utils/styles/convert";

interface CardSearchProps {
  active: boolean;
}

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
  width: 271px;
  height: 39px;
  margin-inline: 33px 27px;
  display: flex;
`;

export const CardSearch = styled.div<CardSearchProps>`
  width: ${({ active }) => (active ? "207px" : "254px")};
  height: 39px;
  border-radius: 10px;
  transition: ease-in 0.4s;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-self: flex-start;
  transition: linear 0.2s;

  & > span {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  & > small {
    position: absolute;
    top: 50%;
    left: ${({ active }) => (active ? "29%" : "50%")};
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    column-gap: 5px;
    font-weight: 500;
    font-size: ${toRem(14)};
    pointer-events: none;
    color: ${color.text_color_trans_2};
    transition: linear 0.2s;
    & span {
      opacity: ${({ active }) => (active ? 0 : 1)};
      transform: tranlateX(${({ active }) => (active ? "-10px" : 0)});
      transition: linear 0.2s;
    }

    & path {
      fill: ${({ active }) => (active ? color.text_color_2 : color.deep_grey)};
    }

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
    padding-inline: 35px;
    color: ${color.text_color_2};
    font-weight: 600;
    transition: linear 0.2s;
    background-color: ${color.grey_trans};

    &:hover {
      background: ${color.inactive_text};
    }

    &:focus {
      outline: none;
      background: ${color.fade_blue};
    }
  }
`;
export const CardSearchCancel = styled.div<CardSearchProps>`
  width: ${({ active }) => (active ? "64px" : "11px")};
  height: 39px;
  transition: linear 0.2s;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & > p {
    transform: translateX(${({ active }) => (active ? 0 : "10px")});
    opacity: ${({ active }) => (active ? 1 : 0)};
    transition: linear 0.1s;
    cursor: pointer;
  }
`;

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
