import { useEffect, useState } from "react";
import Back from "../../components/icons/Back";
import Exit from "../../components/icons/Exit";
import { MobileContainer } from "../../components/layouts/box/BoxLayout";
import {
  BackCardButton,
  CardHeader,
  ExitCardButton,
} from "../../components/layouts/shape/Card";
import { Card } from "../../components/layouts/shape/MobileCard";
import { Text, TextLogo } from "../../components/typo/Typo";
import Logo from "../../components/icons/Logo";
import {
  CardFooterMobile,
  CardSlideImageMobile,
  CardToolTip,
} from "../../components/layouts/shape/CardLogin";
import ToolTips from "../../components/Tooltips/ToolTips";
import { UserInfos } from "../../utils/types/user";
import AuthSliderMobile from "../../components/slider/mobile/AuthSliderMobile";
import FormLoginMobile from "../../components/form/formLogin/mobile/FormLoginMobile";

const LoginMobile = () => {
  const [alter, setAlter] = useState(false);
  const [username, setUsername] = useState<string>("");
  const [userInfos, setUserInfos] = useState<UserInfos>();

  useEffect(() => {
    const interval = setInterval(() => {
      setAlter(!alter);
    }, 6000);

    return () => clearInterval(interval);
  }, [alter]);

  useEffect(() => {
    setUsername(userInfos && userInfos.name);
  }, [userInfos]);
  return (
    <MobileContainer>
      <Card height={621}>
        <CardHeader mb={20}>
          <BackCardButton to={"#"} width={71} height={57} fill>
            <Back w={23} h={17} />
          </BackCardButton>
          {alter ? <TextLogo>Ndaqo.com</TextLogo> : <Logo w={72} h={24} />}
          <ExitCardButton to={"/"} width={71} height={57} fill>
            <Exit w={15} h={15} />
          </ExitCardButton>
        </CardHeader>
        <Text size={11} weight={600} style={{ marginBottom: 10 }}>
          Populaire sur Ndaqo cette semaine
        </Text>
        <CardToolTip>
          <ToolTips username={username} />
        </CardToolTip>
        <CardSlideImageMobile>
          <AuthSliderMobile getUserIndex={setUserInfos} />
        </CardSlideImageMobile>
        <FormLoginMobile />
        <CardFooterMobile>
          <Text size={11} align="center" weight={600}>
            En continuant, tu acceptes les
            <span> Conditions générales d’utilisation </span>
            de Ndaqo. Lire notre
            <span> Politique de confidentialité.</span>
          </Text>
        </CardFooterMobile>
      </Card>
    </MobileContainer>
  );
};

export default LoginMobile;
