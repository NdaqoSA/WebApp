import styled from "styled-components";
import { color } from "../../../utils/styles/color";

interface TabProps {
  position: number;
}

export const Container = styled.div`
  width: 100%;
  height: 51px;
  padding-top: 20px;
  padding-inline: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TabContainer = styled.div`
  width: 100%;
  max-width: 324px;
  height: 31px;
  background: ${color.grey_trans};
  border-radius: 7px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding-inline: 3px;
  margin-bottom: 15px;
`;

export const TabContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Tab = styled.div`
  width: 100%;
  max-width: 106px;
  height: 25px;
  border-radius: 5px;
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
  left: ${({ position }) =>
    position === 1 ? "3px" : position === 2 ? "109px" : "215px"};
  width: 100%;
  max-width: 106px;
  height: 25px;
  border-radius: 5px;
  background-color: ${color.blue_violet};
  z-index: 2;
  transition: ease 0.4s;

  & + div div:nth-child(${({ position }) => (position ? position : 2)}) p {
    transition: ease 0.4s;
    color: ${color.white};
  }
`;
