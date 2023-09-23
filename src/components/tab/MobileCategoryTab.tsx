import { useEffect, useRef, useState } from "react";
import {
  Container,
  SelectedTab,
  Tab,
  TabContent,
  TabContainer,
} from "../layouts/shape/MobileCategoryTab";
import { Text } from "../typo/Typo";

interface Props {
  activeCategory: React.Dispatch<React.SetStateAction<number>>;
}

const MobileCategoryTab = ({ activeCategory }: Props) => {
  const [cursor, setCursor] = useState(1);
  const [firstEl, setFirstEl] = useState("0");
  const [secondEl, setSecondEl] = useState("0");
  const [thirdEl, setThirddEl] = useState("0");
  const [fourthEl, setFourthEl] = useState("0");
  const [selectedTab, setSelectedTab] = useState("0");
  const [tabPos, setTabPos] = useState(1);
  const firstRef = useRef<HTMLParagraphElement>(null);
  const secondRef = useRef<HTMLParagraphElement>(null);
  const thirdRef = useRef<HTMLParagraphElement>(null);
  const fourthRef = useRef<HTMLParagraphElement>(null);
  const tabRef = useRef<HTMLDivElement>(null);

  console.log(activeCategory, tabPos);

  useEffect(() => {
    if (cursor === 1) {
      setSelectedTab(firstRef.current.getBoundingClientRect().width + "px");
    } else if (cursor === 2) {
      setSelectedTab(secondRef.current.getBoundingClientRect().width + "px");
    } else if (cursor === 3) {
      setSelectedTab(thirdRef.current.getBoundingClientRect().width + "px");
    } else {
      setSelectedTab(fourthRef.current.getBoundingClientRect().width + "px");
    }
  }, [cursor]);

  useEffect(() => {
    setFirstEl(firstRef.current.getBoundingClientRect().left + "px");
    setSecondEl(firstRef.current.getBoundingClientRect().left + "px");
    setThirddEl(firstRef.current.getBoundingClientRect().left + "px");
    setFourthEl(firstRef.current.getBoundingClientRect().left + "px");
  }, [innerWidth]);

  const switchTab = (e: React.SyntheticEvent, position: number) => {
    e.preventDefault();
    if (position === cursor) return;
    setTabPos(position);
    if (position === 1) {
      setFirstEl(firstRef.current.getBoundingClientRect().left + "px");
    } else if (position === 2) {
      setSecondEl(secondRef.current.getBoundingClientRect().left + "px");
    } else if (position === 3) {
      setThirddEl(thirdRef.current.getBoundingClientRect().left + "px");
    } else {
      setFourthEl(fourthRef.current.getBoundingClientRect().left + "px");
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
          width={
            cursor === 1
              ? firstEl
              : cursor === 2
              ? secondEl
              : cursor === 3
              ? thirdEl
              : fourthEl
          }
          selectedWidth={selectedTab}
          ref={tabRef}
        />
        <TabContent>
          <Tab
            onClick={(e: React.SyntheticEvent) => switchTab(e, 1)}
            isActive={cursor === 1}
          >
            <Text size={12} weight={700} ref={firstRef} nogap>
              Videos
            </Text>
          </Tab>
          <Tab
            onClick={(e: React.SyntheticEvent) => switchTab(e, 2)}
            isActive={cursor === 2}
          >
            <Text size={12} weight={700} ref={secondRef} nogap>
              Pour toi
            </Text>
          </Tab>
          <Tab
            onClick={(e: React.SyntheticEvent) => switchTab(e, 3)}
            isActive={cursor === 3}
          >
            <Text size={12} weight={700} ref={thirdRef} nogap>
              Populaire cette semaine
            </Text>
          </Tab>
          <Tab
            onClick={(e: React.SyntheticEvent) => switchTab(e, 4)}
            isActive={cursor === 4}
          >
            <Text size={12} weight={700} ref={fourthRef} nogap>
              Prix plus élevés
            </Text>
          </Tab>
        </TabContent>
      </TabContainer>
    </Container>
  );
};

const filters = [
  {
    id: 1,
    name: "Videos",
  },
  {
    id: 2,
    name: "Pour toi",
  },
  {
    id: 3,
    name: "Populaire cette semaine",
  },
  {
    id: 4,
    name: "Prix plus élevés",
  },
];

export default MobileCategoryTab;
