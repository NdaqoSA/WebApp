import ItemCard from "../../../mobile/card/ItemCard";
import { TabBox } from "../../layouts/box/BoxLayout";

const RentTab = () => {
  return (
    <TabBox style={{ color: "black" }}>
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </TabBox>
  );
};

export default RentTab;
