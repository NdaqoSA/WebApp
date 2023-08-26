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
  const [one, setOne] = useState("0");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");
  const [six, setSix] = useState("");
  const [selectedTab, setSelectedTab] = useState("0");
  const oneRef = useRef<HTMLDivElement>(null);
  const twoRef = useRef<HTMLDivElement>(null);
  const threeRef = useRef<HTMLDivElement>(null);
  const fourRef = useRef<HTMLDivElement>(null);
  const fiveRef = useRef<HTMLDivElement>(null);
  const sixRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedTab(`${oneRef.current.getBoundingClientRect().width}px`);
    setOne("0");
    setTwo(`${twoRef.current.getBoundingClientRect().width + 9}px`);
    setThree(`${threeRef.current.getBoundingClientRect().width * 2 + 18}px`);
    setFour(`${fourRef.current.getBoundingClientRect().width * 3 + 27}px`);
    setFive(`${fiveRef.current.getBoundingClientRect().width * 4 + 36}px`);
    setSix(`${sixRef.current.getBoundingClientRect().width * 5 + 45}px`);
  }, [innerWidth]);

  const switchTab = (e: React.SyntheticEvent, position: number) => {
    e.preventDefault();
    if (position === cursor) return;
    if (position === 1) {
      setOne("0");
    } else if (position === 2) {
      setTwo(`${twoRef.current.getBoundingClientRect().width + 9}px`);
    } else if (position === 3) {
      setThree(`${threeRef.current.getBoundingClientRect().width * 2 + 18}px`);
    } else if (position === 4) {
      setFour(`${fourRef.current.getBoundingClientRect().width * 3 + 27}px`);
    } else if (position === 5) {
      setFive(`${fiveRef.current.getBoundingClientRect().width * 4 + 36}px`);
    } else {
      setSix(`${sixRef.current.getBoundingClientRect().width * 5 + 45}px`);
    }
    setSelectedTab(`${twoRef.current.getBoundingClientRect().width}px`);
    setCursor(position);
    e.stopPropagation();
  };
  return (
    <Container>
      <TabContainer>
        <SelectedTab
          position={cursor}
          width={
            cursor === 1
              ? one
              : cursor === 2
              ? two
              : cursor === 3
              ? three
              : cursor === 4
              ? four
              : cursor === 5
              ? five
              : six
          }
          selectedWidth={selectedTab}
        />
        <TabContent>
          <Tab
            ref={oneRef}
            onClick={(e: React.SyntheticEvent) => switchTab(e, 1)}
          >
            <SearchTab w={20} h={20} />
          </Tab>
          <Tab
            ref={twoRef}
            onClick={(e: React.SyntheticEvent) => switchTab(e, 2)}
          >
            <HomeTab w={22} h={20} />
          </Tab>
          <Tab
            ref={threeRef}
            onClick={(e: React.SyntheticEvent) => switchTab(e, 3)}
          >
            <AccountTab w={19} h={20} />
          </Tab>
          <Tab
            ref={fourRef}
            onClick={(e: React.SyntheticEvent) => switchTab(e, 4)}
          >
            <SearchTab w={20} h={20} />
          </Tab>
          <Tab
            ref={fiveRef}
            onClick={(e: React.SyntheticEvent) => switchTab(e, 5)}
          >
            <HomeTab w={22} h={20} />
          </Tab>
          <Tab
            ref={sixRef}
            onClick={(e: React.SyntheticEvent) => switchTab(e, 6)}
          >
            <AccountTab w={19} h={20} />
          </Tab>
        </TabContent>
      </TabContainer>
    </Container>
  );
};

export default MobileBottomMenu;
