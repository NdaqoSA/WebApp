import styled from "styled-components";
import { color } from "../../../utils/styles/color";

interface FlexRowProps {
  x: "start" | "center" | "end" | "between";
  y: "start" | "center" | "end";
}

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.bg};
`;

export const FlexRow = styled.div<FlexRowProps>`
  display: flex;
  justify-content: ${({ x }) => (x === "between" ? "space-between" : x)};
  align-items: ${({ y }) => y};
`;

export const MobileContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${color["ndaqo-black"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;
export const MobileContainerLang = styled(MobileContainer)`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const MobileCardTextBottom = styled.div`
  margin-bottom: 18px;
  width: 308px !important;
`;
export const MobileCardBottom = styled.div`
  margin-bottom: 20px;
  padding-inline: 20px;
  display: flex;
  flex-direction: column;
`;
