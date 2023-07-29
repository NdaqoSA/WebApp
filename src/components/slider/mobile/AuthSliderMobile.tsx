import Img1 from "../../../assets/images/im1.jpg";
import Img2 from "../../../assets/images/im2.jpg";
import Img4 from "../../../assets/images/im4.jpg";
import Img3 from "../../../assets/images/im3.jpg";
import Img5 from "../../../assets/images/im5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
// import required modules
import { Autoplay, EffectCoverflow, Scrollbar } from "swiper/modules";
import {
  SliderContainer,
  Swipe,
  SwiperImage,
  SwiperSlider,
} from "../../layouts/shape/Slider";
import { SetStateAction, useEffect, useState } from "react";

interface AuthCurrentProps {
  getUserIndex: Function;
}

const AuthSliderMobile = ({ getUserIndex }: AuthCurrentProps) => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    getUserIndex(datas[currentState]);
  }, [currentState]);
  return (
    <SliderContainer>
      <Swipe
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slideToClickedSlide={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 4,
          depth: 200,
          modifier: 5,
          slideShadows: false,
        }}
        scrollbar={{ draggable: true }}
        onSlideChange={(swiper: { realIndex: SetStateAction<number> }) => {
          setCurrentState(swiper.realIndex);
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectCoverflow, Scrollbar]}
        className="mySwiper"
      >
        {datas.map(({ img }, id) => (
          <SwiperSlider key={id} height={150} width={150} br={150}>
            <SwiperImage src={img} height={150} width={150} br={150} />
          </SwiperSlider>
        ))}
      </Swipe>
    </SliderContainer>
  );
};
export default AuthSliderMobile;

const datas = [
  {
    name: "John Doe",
    img: Img1,
  },
  {
    name: "Mark Henry",
    img: Img2,
  },
  {
    name: "Terry Beaugard",
    img: Img3,
  },
  {
    name: "Mike Tyson",
    img: Img4,
  },
  {
    name: "Tom Sawyer",
    img: Img5,
  },
];
