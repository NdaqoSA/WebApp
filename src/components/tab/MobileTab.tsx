import { useEffect, useRef, useState } from "react";
import {
  Container,
  SelectedTab,
  Tab,
  TabContainer,
  TabContent,
} from "../layouts/shape/MobileTab";
import { Text } from "../typo/Typo";

interface Props {
  activeTab: React.Dispatch<React.SetStateAction<number>>;
}

const MobileTab = ({ activeTab }: Props) => {
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
    activeTab(position);
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
            <Text size={12} weight={600}>
              Acheter
            </Text>
          </Tab>
          <Tab
            ref={secondRef}
            onClick={(e: React.SyntheticEvent) => switchTab(e, 2)}
          >
            <Text size={12} weight={600}>
              louer
            </Text>
          </Tab>
          <Tab
            ref={thirdRef}
            onClick={(e: React.SyntheticEvent) => switchTab(e, 3)}
          >
            <Text size={12} weight={600}>
              Service
            </Text>
          </Tab>
        </TabContent>
      </TabContainer>
    </Container>
  );
};

export default MobileTab;
