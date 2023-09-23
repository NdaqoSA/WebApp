import {
  FlagBox,
  FlagRounded,
  MobileHomeContainer,
  MobileHomeHeader,
  MobileHomeHeaderContainer,
  MobileHomeHeaderGroup,
  MobileHomeHeaderTabContainer,
  MobileMainHome,
  SizeBox,
} from "../../components/layouts/box/BoxLayout";
import Flag from "../../assets/images/Congo flag circle.svg";
import {
  LangMobileButton,
  PriceMobileButton,
} from "../../components/layouts/input/input";
import Logo from "../../components/icons/Logo";
import MobileTab from "../../components/tab/MobileTab";
import MobileBottomMenu from "../../components/tab/MobileBottomMenu";
import { useState } from "react";
import BuyTab from "../../components/tab/section/BuyTab";
import RentTab from "../../components/tab/section/RentTab";
import ServiceTab from "../../components/tab/section/ServiceTab";
import MobileCategoryTab from "../../components/tab/MobileCategoryTab";
import FilterTab from "../filterTab/FilterTab";
import { Text } from "../../components/typo/Typo";
import ArrowDown from "../../components/icons/ArrowDown";
import SmallArrowDown from "../../components/icons/SmallArrow";

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
          {/* Header Start */}
          <MobileHomeHeader>
            <PriceMobileButton>
              <Text size={12} weight={700}>
                XAF
              </Text>
              <SmallArrowDown w={10} h={7} />
            </PriceMobileButton>
            <Logo w={75} h={25} white />
            <LangMobileButton>
              <SmallArrowDown w={10} h={7} />
              <FlagBox>
                <Text size={12} weight={700}>
                  CG
                </Text>
                <FlagRounded src={Flag} alt="Flag of countries" />
              </FlagBox>
            </LangMobileButton>
          </MobileHomeHeader>
          {/* Header End */}
          {/* Tab Container Start */}
          <MobileHomeHeaderTabContainer>
            <MobileTab activeTab={setActiveTab} />
            <MobileCategoryTab activeCategory={setActiveCategory} />
            <MobileBottomMenu />
          </MobileHomeHeaderTabContainer>
          {/* Tab Container End */}
        </MobileHomeHeaderGroup>
        <FilterTab />
      </MobileHomeHeaderContainer>
      <MobileMainHome>
        <SizeBox />
        {activeTab === 1 && <BuyTab />}
        {activeTab === 2 && <RentTab />}
        {activeTab === 3 && <ServiceTab />}
      </MobileMainHome>
    </MobileHomeContainer>
  );
};

export default MobileHome;
