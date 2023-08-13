import styled from "styled-components";
import { color } from "../../../utils/styles/color";

interface TabProps {
  position: number;
  width?: string;
  selectedWidth?: string;
}

export const Container = styled.div`
  width: 100%;
  height: 29px;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid ${color.grey};
  z-index: 20;
`;

export const TabContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TabContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Tab = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    transition: ease 0.4s;
    position: relative;
    z-index: 10;
  }
`;

export const SelectedTab = styled.div<TabProps>`
  position: absolute;
  left: ${({ width }) => width && width};
  bottom: 0;
  width: ${({ selectedWidth }) => (selectedWidth ? selectedWidth : 0)};
  height: 4px;
  border-radius: 5px;
  background-color: ${color.blue_violet};
  z-index: 2;
  transition: ease 0.4s;
  /* transform: translateX(-50%); */
`;