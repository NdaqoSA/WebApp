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

  console.log(activeCategory);

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
          <Tab onClick={(e: React.SyntheticEvent) => switchTab(e, 1)}>
            <Text size={12} weight={700} ref={firstRef} nogap>
              <span>V</span>
              <span>i</span>
              <span>d</span>
              <span>e</span>
              <span>o</span>
              <span>s</span>
            </Text>
          </Tab>
          <Tab onClick={(e: React.SyntheticEvent) => switchTab(e, 2)}>
            <Text size={12} weight={700} ref={secondRef} nogap>
              <span>P</span>
              <span>o</span>
              <span>u</span>
              <span>r</span>
              <span>&nbsp;</span>
              <span>t</span>
              <span>o</span>
              <span>i</span>
            </Text>
          </Tab>
          <Tab onClick={(e: React.SyntheticEvent) => switchTab(e, 3)}>
            <Text size={12} weight={700} ref={thirdRef} nogap>
              <span>P</span>
              <span>o</span>
              <span>p</span>
              <span>u</span>
              <span>l</span>
              <span>a</span>
              <span>i</span>
              <span>r</span>
              <span>e</span>
              <span>&nbsp;</span>
              <span>c</span>
              <span>e</span>
              <span>t</span>
              <span>t</span>
              <span>e</span>
              <span>&nbsp;</span>
              <span>s</span>
              <span>e</span>
              <span>m</span>
              <span>a</span>
              <span>i</span>
              <span>n</span>
              <span>e</span>
            </Text>
          </Tab>
          <Tab onClick={(e: React.SyntheticEvent) => switchTab(e, 4)}>
            <Text size={12} weight={700} ref={fourthRef} nogap>
              <span>P</span>
              <span>r</span>
              <span>i</span>
              <span>x</span>
              <span>&nbsp;</span>
              <span>p</span>
              <span>l</span>
              <span>u</span>
              <span>s</span>
              <span>&nbsp;</span>
              <span>é</span>
              <span>l</span>
              <span>e</span>
              <span>v</span>
              <span>é</span>
              <span>s</span>
            </Text>
          </Tab>
        </TabContent>
      </TabContainer>
    </Container>
  );
};

export default MobileCategoryTab;
