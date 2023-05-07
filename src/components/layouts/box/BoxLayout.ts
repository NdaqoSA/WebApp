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
  padding: 1rem 0.5rem;
`;

export const FlexRow = styled.div<FlexRowProps>`
  display: flex;
  justify-content: ${({ x }) => (x === "between" ? "space-between" : x)};
  align-items: ${({ y }) => y};
`;
