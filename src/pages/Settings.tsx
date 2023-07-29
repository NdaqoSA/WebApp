import { useEffect, useState } from "react";
import { Container } from "../components/layouts/box/BoxLayout";
import HomeSettingsMobile from "../mobile/settings/HomeSettingsMobile";

const Settings = () => {
  const [width, setWidth] = useState<number>(innerWidth);

  useEffect(() => {
    window.onresize = () => setWidth(innerWidth);
  }, [innerWidth]);
  return (
    <Container>
      {width > 505 ? <>Paramètre</> : <HomeSettingsMobile />}
    </Container>
  );
};

export default Settings;
