import styled from "styled-components";
import { color } from "../../../utils/styles/color";

interface FilterProps {
  selected: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding-block: 15px;
  display: flex;
  justify-content: center;
  border-bottom: 5px solid ${color.grey};
  gap: 10px;
`;

export const Filter = styled.div<FilterProps>`
  width: fit-content;
  height: 39px;
  border-radius: 10px;
  padding-inline: 13px;
  background-color: ${({ selected }) =>
    selected ? color.blue_violet : color.grey};
  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    color: ${({ selected }) => (selected ? color.white : color["ndaqo-black"])};
    font-weight: ${({ selected }) => (selected ? 700 : 500)};
  }
`;
