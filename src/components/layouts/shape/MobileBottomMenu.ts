import styled from "styled-components";
import { color } from "../../../utils/styles/color";

interface TabProps {
  position: number;
  width?: string;
  selectedWidth?: string;
}

export const Container = styled.div`
  width: 100%;
  height: 78px;
  padding-top: 20px;
  padding-inline: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${color.grey};
  background: ${color.white_trans2};
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
`;

export const TabContainer = styled.div`
  width: 100%;
  height: 55px;
  border-radius: 7px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const TabContent = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
`;

export const Tab = styled.div`
  width: 100%;
  height: 55px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    transition: ease 0.4s;
    position: relative;
    z-index: 10;
  }
  & path {
    transition: ease 0.4s;
  }
`;

export const SelectedTab = styled.div<TabProps>`
  position: absolute;
  left: ${({ width }) => width && width};
  width: ${({ selectedWidth }) => (selectedWidth ? selectedWidth : 0)};
  height: 55px;
  border-radius: 15px;
  background-color: ${color.blue_violet};
  z-index: 2;
  transition: ease 0.4s;

  & + div div:nth-child(${({ position }) => (position ? position : 2)}) path {
    transition: ease 0.4s;
    fill: ${color["ndaqo-white"]};
  }
`;
