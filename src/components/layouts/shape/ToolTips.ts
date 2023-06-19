import styled from "styled-components";
import { color } from "../../../utils/styles/color";

interface ToolTipsProps {
  click: boolean;
}

export const ToolTipsContainer = styled.div<ToolTipsProps>`
  position: relative;
  width: 167px;
  height: 32px;
  cursor: pointer;

  & > * {
    cursor: pointer;
  }
  &:hover p {
  }
  &:hover p {
    color: ${({ click }) => (click ? color.light_grey : color.blue_violet)};
    background: ${({ click }) =>
      click ? color.blue_violet : color.light_grey};
  }

  & path {
    cursor: pointer;
    fill: ${({ click }) => (click ? color.light_grey : color.blue_violet)};
  }

  &:hover div:first-child {
    background: ${({ click }) =>
      click ? color.blue_violet : color.light_grey};
    border: 1px solid ${color.blue_violet};
  }

  &:hover div:last-child {
    border: 1px solid ${color.blue_violet};
    background: ${({ click }) =>
      click ? color.blue_violet : color.light_grey};
  }
  &:hover div:last-child::before {
    background: ${({ click }) =>
      click ? color.blue_violet : color.light_grey};
  }
`;

export const ToolTipsRectanle = styled.div`
  position: relative;
  width: 100%;
  height: 32px;
  background: ${color.light_grey};
  border: 1px solid ${color.deep_grey};
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
  cursor: pointer;

  & path {
    transition: linear 0.2s;
  }
  & p {
    transition: linear 0.2s;
    text-transform: capitalize;
    cursor: pointer;
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
  border: 1px solid ${color.deep_grey};
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
