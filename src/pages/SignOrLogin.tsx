import { useEffect, useState } from "react";
import Card from "../components/card/Card";
import { Container } from "../components/layouts/box/BoxLayout";
import SignOrLoginMobile from "../mobile/auth/SignOrLoginMobile";

const SignOrLogin = () => {
  const [width, setWidth] = useState<number>(innerWidth);

  useEffect(() => {
    window.onresize = () => setWidth(innerWidth);
  }, [innerWidth]);

  return (
    <Container>{width > 505 ? <Card /> : <SignOrLoginMobile />}</Container>
  );
};

export default SignOrLogin;
