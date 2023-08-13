import { useEffect, useRef, useState } from "react";
import {
  Container,
  SelectedTab,
  Tab,
  TabContainer,
  TabContent,
} from "../layouts/shape/MobileBottomMenu";
import SearchTab from "../icons/SearchTab";
import HomeTab from "../icons/HomeTab";
import AccountTab from "../icons/AccountTab";

const MobileBottomMenu = () => {
  const [cursor, setCursor] = useState(2);
  const [firstEl, setFirstEl] = useState("0");
  const [secondEl, setSecondEl] = useState("");
  const [thirdEl, setThirddEl] = useState("");
  const [selectedTab, setSelectedTab] = useState("0");
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const thirdRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedTab(`${secondRef.current.getBoundingClientRect().width}px`);
    setFirstEl("0");
    setSecondEl(`${secondRef.current.getBoundingClientRect().width}px`);
    setThirddEl(`${thirdRef.current.getBoundingClientRect().width * 2}px`);
  }, [innerWidth]);

  const switchTab = (e: React.SyntheticEvent, position: number) => {
    e.preventDefault();
    if (position === cursor) return;
    if (position === 1) {
      setFirstEl("0");
    } else if (position === 2) {
      setSecondEl(`${secondRef.current.getBoundingClientRect().width}px`);
    } else {
      setThirddEl(`${thirdRef.current.getBoundingClientRect().width * 2}px`);
    }
    setSelectedTab(`${secondRef.current.getBoundingClientRect().width}px`);
    setCursor(position);
    e.stopPropagation();
  };
  return (
    <Container>
      <TabContainer>
        <SelectedTab
          position={cursor}
          width={cursor === 1 ? firstEl : cursor === 2 ? secondEl : thirdEl}
          selectedWidth={selectedTab}
        />
        <TabContent>
          <Tab
            ref={firstRef}
            onClick={(e: React.SyntheticEvent) => switchTab(e, 1)}
          >
            <SearchTab w={20} h={20} />
          </Tab>
          <Tab
            ref={secondRef}
            onClick={(e: React.SyntheticEvent) => switchTab(e, 2)}
          >
            <HomeTab w={22} h={20} />
          </Tab>
          <Tab
            ref={thirdRef}
            onClick={(e: React.SyntheticEvent) => switchTab(e, 3)}
          >
            <AccountTab w={19} h={20} />
          </Tab>
        </TabContent>
      </TabContainer>
    </Container>
  );
};

export default MobileBottomMenu;

// <MobileBottomMenuContainer>
//   <SelectedTab position={cursor} />
//   <TabContent>
//     <Tab onClick={(e: React.SyntheticEvent) => switchTab(e, 1)}>
//       <SearchTab w={20} h={20} />
//     </Tab>
//     <Tab onClick={(e: React.SyntheticEvent) => switchTab(e, 2)}>
//       <HomeTab w={22} h={20} />
//     </Tab>
//     <Tab onClick={(e: React.SyntheticEvent) => switchTab(e, 3)}>
//       <AccountTab w={19} h={20} />
//     </Tab>
//   </TabContent>
// </MobileBottomMenuContainer>
