import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
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
`;

export const SwiperSlider = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 200px;
  overflow: hidden;
`;

export const SwiperImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 200px;
  background: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  object-position: center center;
`;
