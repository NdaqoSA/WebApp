import Img1 from "../../assets/images/im1.jpg";
import Img2 from "../../assets/images/im2.jpg";
import Img3 from "../../assets/images/im3.jpg";
import Img4 from "../../assets/images/im4.jpg";
import Img5 from "../../assets/images/im5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
// import required modules
import { EffectCoverflow, Scrollbar } from "swiper";
import {
  SliderContainer,
  Swipe,
  SwiperImage,
  SwiperSlider,
} from "../layouts/shape/Slider";
import { SetStateAction, useState } from "react";

const AuthSlider = () => {
  const [currentState, setCurrentState] = useState(0);
  return (
    <SliderContainer>
      <Swipe
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 2,
          depth: 200,
          modifier: 5,
        }}
        scrollbar={{ draggable: true }}
        onSlideChange={(swiper: { realIndex: SetStateAction<number> }) => {
          setCurrentState(swiper.realIndex);
        }}
        modules={[EffectCoverflow, Scrollbar]}
        className="mySwiper"
      >
        {datas.map(({ img }, id) => (
          <SwiperSlider key={id}>
            <SwiperImage src={img} />
          </SwiperSlider>
        ))}
      </Swipe>
    </SliderContainer>
  );
};
export default AuthSlider;

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
