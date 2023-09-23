import styled from "styled-components";
import { color } from "../../../utils/styles/color";
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
  z-index: 3;
  width: 100vw;
  height: auto;
`;

export const MobileHomeHeaderGroup = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  top: 0;
  background: ${color.black};
`;

export const MobileHomeHeaderTabContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${color.white};
  border-radius: 25px 25px 0 0;
`;

export const MobileHomeHeader = styled.div`
  margin-top: 0;
  margin-inline: 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 15px;
  height: 60px;
`;

export const FlagRounded = styled.img`
  width: 15px;
  height: 15px;
  border-radius: 35px;
  object-fit: cover;
  object-position: center center;
`;

export const FlagBox = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 5px;

  & > p {
    line-height: 0;
  }
`;

export const MobileMainHome = styled.div`
  height: auto;
  width: 100%;
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 0;
  margin-bottom: 60px;
`;

export const SizeBox = styled.div`
  width: 100%;
  height: 196px;
`;

export const MobileTabPage = styled.div`
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
