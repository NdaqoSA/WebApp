import styled from "styled-components";
import { color } from "../../../utils/styles/color";
import { Swiper, SwiperSlide } from "swiper/react";

interface FilterProps {
  selected: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding-block: 15px;
  padding-inline: 11px;
  border-bottom: 1px solid ${color.inactive_text};
`;

export const SwiperContainer = styled(Swiper)``;
export const SwiperSlideContainer = styled(SwiperSlide)`
  width: fit-content !important;
`;

export const Filter = styled.div<FilterProps>`
  height: 39px;
  width: fit-content;
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
