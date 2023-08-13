import { useState } from "react";
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

  const switchTab = (e: React.SyntheticEvent, position: number) => {
    e.preventDefault();
    if (position === cursor) return;
    setCursor(position);
    activeTab(position);
    e.stopPropagation();
  };
  return (
    <Container>
      <TabContainer>
        <SelectedTab position={cursor} />
        <TabContent>
          <Tab onClick={(e: React.SyntheticEvent) => switchTab(e, 1)}>
            <Text size={12} weight={600}>
              Acheter
            </Text>
          </Tab>
          <Tab onClick={(e: React.SyntheticEvent) => switchTab(e, 2)}>
            <Text size={12} weight={600}>
              louer
            </Text>
          </Tab>
          <Tab onClick={(e: React.SyntheticEvent) => switchTab(e, 3)}>
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
