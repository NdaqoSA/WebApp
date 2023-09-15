import ItemCard from "../../../mobile/card/ItemCard";
import {
  SwiperContainer,
  TabBox,
} from "../../layouts/box/BoxLayout";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const BuyTab = () => {
  return (
    <TabBox>
      <SwiperContainer slidesPerView={"auto"} className="mySwiper">
        <ItemCard />
      </SwiperContainer>
    </TabBox>
  );
};

export default BuyTab;
