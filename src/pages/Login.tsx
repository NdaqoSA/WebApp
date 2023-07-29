import { useEffect, useState } from "react";
import CardLogin from "../components/card/CardLogin";
import { Container } from "../components/layouts/box/BoxLayout";
import LoginMobile from "../mobile/auth/LoginMobile";

const Login = () => {
  const [width, setWidth] = useState<number>(innerWidth);

  useEffect(() => {
    window.onresize = () => setWidth(innerWidth);
  }, [innerWidth]);
  return <Container>{width > 505 ? <CardLogin /> : <LoginMobile />}</Container>;
};

export default Login;
