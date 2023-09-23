import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import {
  //   Img,
  //   ItemCardIcon,
  ItemCardImage,
  //   ItemCardImageContent,
} from "../../layouts/shape/MobileItemCard";
import styled from "styled-components";

interface Props {
  images: string[];
}

const CarouselImage = ({}: Props) => {
  return (
    <ItemCardImage>
      <Swipe
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        {/* <SwipeSlide>1</SwipeSlide>
        <SwipeSlide>2</SwipeSlide> */}
        {/*
        {images.map((image) => (
          <SwipeSlide>
            <ItemCardImageContent>
              <ItemCardIcon>
                <TripleDots w={13} h={3} />
              </ItemCardIcon>
              <Img src={image} alt="image" radius="17px" />
            </ItemCardImageContent>
          </SwipeSlide>
        ))} */}
      </Swipe>
    </ItemCardImage>
  );
};

export const Swipe = styled(Swiper)`
  width: 100%;
  height: 100%;
  background: #000;
`;
export const SwipeSlide = styled(SwiperSlide)`
  width: 100%;
  height: 254px;
  background: green;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

export default CarouselImage;
