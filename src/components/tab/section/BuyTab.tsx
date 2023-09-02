import ItemCard from "../../../mobile/card/ItemCard";
import {
  SwiperContainer,
  SwiperSlideContainer,
  TabBox,
} from "../../layouts/box/BoxLayout";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const BuyTab = () => {
  return (
    <TabBox>
      <SwiperContainer slidesPerView={"auto"} className="mySwiper">
        <SwiperSlideContainer>
          <ItemCard />
        </SwiperSlideContainer>
        <SwiperSlideContainer>
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </SwiperSlideContainer>
      </SwiperContainer>
    </TabBox>
  );
};

export default BuyTab;
