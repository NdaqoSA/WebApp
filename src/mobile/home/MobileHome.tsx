import {
  FlagRounded,
  MobileHomeContainer,
  MobileHomeHeader,
  MobileMainHome,
  MobileTabPage,
} from "../../components/layouts/box/BoxLayout";
import Flag from "../../assets/images/Congo flag circle.svg";
import { PriceMobileButton } from "../../components/layouts/input/input";
import Logo from "../../components/icons/Logo";
import MobileTab from "../../components/tab/MobileTab";
import MobileBottomMenu from "../../components/tab/MobileBottomMenu";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import BuyTab from "../../components/tab/section/BuyTab";
import RentTab from "../../components/tab/section/RentTab";
import ServiceTab from "../../components/tab/section/ServiceTab";
import MobileCategoryTab from "../../components/tab/MobileCategoryTab";

const MobileHome = () => {
  const [activeTab, setActiveTab] = useState(2);
  const [activeCategory, setActiveCategory] = useState(1);
  return (
    <MobileHomeContainer>
      <MobileHomeHeader>
        <PriceMobileButton>XAF</PriceMobileButton>
        <Logo w={74} h={25} white />
        <FlagRounded src={Flag} alt="Flag of countries" />
      </MobileHomeHeader>
      <MobileMainHome>
        <MobileTab activeTab={setActiveTab} />
        <MobileCategoryTab activeCategory={setActiveCategory} />
        <AnimatePresence mode="wait">
          <MobileTabPage
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === 1 ? (
              <BuyTab />
            ) : activeTab === 2 ? (
              <RentTab />
            ) : (
              <ServiceTab />
            )}
          </MobileTabPage>
        </AnimatePresence>
        <MobileBottomMenu />
      </MobileMainHome>
    </MobileHomeContainer>
  );
};

export default MobileHome;
