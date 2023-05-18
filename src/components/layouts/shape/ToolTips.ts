import styled from "styled-components";
import { color } from "../../../utils/styles/color";

export const ToolTipsContainer = styled.div`
  position: relative;
  width: 167px;
  height: 32px;
  &:hover p {
    color: ${color.white};
  }
  &:hover path {
    fill: ${color.white};
  }

  &:hover div:first-child {
    background: ${color.blue_violet};
  }

  &:hover div:last-child {
    background: ${color.blue_violet};
  }
  &:hover div:last-child::before {
    background: ${color.blue_violet};
  }
`;

export const ToolTipsRectanle = styled.div`
  position: relative;
  width: 100%;
  height: 32px;
  background: ${color.light_grey};
  border: 1px solid ${color.blue_violet};
  border-radius: 8px;
  z-index: 1;
  transition: linear 0.2s;
`;

export const ToolTipsText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 32px;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  transition: linear 0.2s;

  & path {
    transition: linear 0.2s;
  }
  & p {
    transition: linear 0.2s;
    text-transform: capitalize;
    cursor: default;
  }
`;

export const ToolTipsArrow = styled.div`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 30px;
  height: 15px;
  background: ${color.light_grey};
  border: 1px solid ${color.blue_violet};
  border-radius: 2px;
  z-index: 1;
  transition: linear 0.2s;
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 2.5px;
    transform: translateX(-50%) rotate(-45deg);
    width: 60px;
    height: 25px;
    background: ${color.light_grey};
    z-index: 2;
    transition: linear 0.2s;
  }
`;
