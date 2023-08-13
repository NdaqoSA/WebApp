import { useState, useEffect } from "react";
import { Container } from "../components/layouts/box/BoxLayout";
import MobileHome from "../mobile/home/MobileHome";

const Home = () => {
  const [width, setWidth] = useState<number>(innerWidth);

  useEffect(() => {
    window.onresize = () => setWidth(innerWidth);
  }, [innerWidth]);
  return (
    <Container>
      {width > 505 ? <h1>Desktop Home Page</h1> : <MobileHome />}
    </Container>
  );
};

export default Home;
