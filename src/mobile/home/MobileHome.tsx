import {
  FlagRounded,
  MobileHomeContainer,
  MobileHomeHeader,
  MobileHomeHeaderContainer,
  MobileHomeHeaderGroup,
  MobileHomeHeaderTabContainer,
  MobileMainHome,
} from "../../components/layouts/box/BoxLayout";
import Flag from "../../assets/images/Congo flag circle.svg";
import { PriceMobileButton } from "../../components/layouts/input/input";
import Logo from "../../components/icons/Logo";
import MobileTab from "../../components/tab/MobileTab";
import MobileBottomMenu from "../../components/tab/MobileBottomMenu";
import { useState } from "react";
import BuyTab from "../../components/tab/section/BuyTab";
import RentTab from "../../components/tab/section/RentTab";
import ServiceTab from "../../components/tab/section/ServiceTab";
import MobileCategoryTab from "../../components/tab/MobileCategoryTab";
import FilterTab from "../filterTab/FilterTab";

const MobileHome = () => {
  const [activeTab, setActiveTab] = useState(2);
  const [activeCategory, setActiveCategory] = useState(1);
  console.log(activeCategory);

  // const handleScroll = (e: Event) => {
  //   // const target = e.target as HTMLElement;

  //   console.log(window.Screen);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // });

  return (
    <MobileHomeContainer>
      <MobileHomeHeaderContainer>
        <MobileHomeHeaderGroup>
          <MobileHomeHeader>
            <PriceMobileButton>XAF</PriceMobileButton>
            <Logo w={74} h={25} white />
            <FlagRounded src={Flag} alt="Flag of countries" />
          </MobileHomeHeader>
          <MobileHomeHeaderTabContainer>
            <MobileTab activeTab={setActiveTab} />
            <MobileCategoryTab activeCategory={setActiveCategory} />
            <MobileBottomMenu />
          </MobileHomeHeaderTabContainer>
        </MobileHomeHeaderGroup>
        <FilterTab />
      </MobileHomeHeaderContainer>
      <MobileMainHome>
        {activeTab === 1 ? (
          <BuyTab />
        ) : activeTab === 2 ? (
          <RentTab />
        ) : (
          <ServiceTab />
        )}
      </MobileMainHome>
    </MobileHomeContainer>
  );
};

export default MobileHome;
