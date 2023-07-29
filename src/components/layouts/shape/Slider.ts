import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { toRem } from "../../../utils/styles/convert";

interface SwiperProps {
  width?: number;
  height?: number;
  br?: number;
}

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Swipe = styled(Swiper)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SwiperSlider = styled(SwiperSlide)<SwiperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (width ? toRem(width) : toRem(200))};
  height: ${({ height }) => (height ? toRem(height) : toRem(200))};
  border-radius: ${({ br }) => (br ? toRem(br) : toRem(200))};
  overflow: hidden;
`;

export const SwiperImage = styled.img<SwiperProps>`
  width: ${({ width }) => (width ? toRem(width) : toRem(200))};
  height: ${({ height }) => (height ? toRem(height) : toRem(200))};
  border-radius: ${({ br }) => (br ? toRem(br) : toRem(200))};
  background: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  object-position: center center;
`;
