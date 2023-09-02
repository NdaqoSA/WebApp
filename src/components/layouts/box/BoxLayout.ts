import styled from "styled-components";
import { color } from "../../../utils/styles/color";
import { motion } from "framer-motion";
import { SwiperSlide, Swiper } from "swiper/react";
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

export const SwiperContainer = styled(Swiper)`
  width: 100%;
`;
export const SwiperSlideContainer = styled(SwiperSlide)``;

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

export const MobileHomeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${color.white};
  width: 100vw;
  min-height: 100vh;
  height: 100%;
`;

export const MobileHomeHeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: auto;
  background: ${color.black};
  z-index: 3;
`;

export const MobileHomeHeaderTabContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${color.white};
  border-radius: 25px 25px 0 0;
`;

export const MobileHomeHeader = styled.div`
  margin-top: 15px;
  margin-inline: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const FlagRounded = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  object-fit: cover;
  object-position: center center;
`;

export const MobileMainHome = styled.div`
  height: auto;
  width: 100%;
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 0;
  margin-top: 234px;
  margin-bottom: 60px;
`;

export const MobileTabPage = styled(motion.div)`
  width: 100%;
  min-height: auto;
  background: ${color.white};
`;

export const TabBox = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${color.white};
`;
