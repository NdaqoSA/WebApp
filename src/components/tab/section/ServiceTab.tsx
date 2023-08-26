import ItemCard from "../../../mobile/card/ItemCard";
import FilterTab from "../../../mobile/filterTab/FilterTab";
import { TabBox } from "../../layouts/box/BoxLayout";

const ServiceTab = () => {
  return (
    <TabBox style={{ color: "black" }}>
      <h1>Service</h1>
      <FilterTab />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </TabBox>
  );
};

export default ServiceTab;
