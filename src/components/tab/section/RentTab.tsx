import ItemCard from "../../../mobile/card/ItemCard";
import FilterTab from "../../../mobile/filterTab/FilterTab";
import { TabBox } from "../../layouts/box/BoxLayout";

const RentTab = () => {
  return (
    <TabBox style={{ color: "black" }}>
      <FilterTab />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </TabBox>
  );
};

export default RentTab;
