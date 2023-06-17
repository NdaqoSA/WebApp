import { useEffect, useState } from "react";
import {
  CardFooter,
  CardProfile,
  CardProfileText,
  Card as CardShape,
  CardSlideImage,
  CardToolTip,
} from "../layouts/shape/CardLogin";
import {
  BackCardButton,
  CardHeader,
  CardTitle,
  ExitCardButton,
} from "../layouts/shape/Card";
import { RxArrowLeft, RxCross2 } from "react-icons/rx";
import { Text, TextLogo } from "../typo/Typo";
import Logo from "../icons/Logo";
import ToolTips from "../Tooltips/ToolTips";
import FormLogin from "../form/formLogin/FormLogin";
import AuthSlider from "../slider/AuthSlider";

const CardLogin = () => {
  const [alter, setAlter] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAlter(!alter);
    }, 6000);

    return () => clearInterval(interval);
  }, [alter]);
  return (
    <CardShape>
      <CardHeader style={{ marginBottom: 5 }}>
        <BackCardButton to={""}>
          <RxArrowLeft />
        </BackCardButton>
        <CardTitle>
          {alter ? <TextLogo>Ndaqo.com</TextLogo> : <Logo w={72} h={24} />}
        </CardTitle>
        <ExitCardButton to={""}>
          <RxCross2 />
        </ExitCardButton>
      </CardHeader>
      <CardProfile>
        <CardProfileText>
          <Text size={11} align="center">
            Visiter le profil de Roberson Mafoua
          </Text>
        </CardProfileText>
        <CardToolTip>
          <ToolTips username="Roberson Mafoua" />
        </CardToolTip>
        <CardSlideImage>
          <AuthSlider />
        </CardSlideImage>
      </CardProfile>
      <FormLogin />
      <CardFooter>
        <Text size={10} align="center">
          En continuant, tu acceptes les
          <span> Conditions générales d’utilisation </span>
          de Ndaqo. Lire notre
          <span> Politique de confidentialité.</span>
        </Text>
      </CardFooter>
    </CardShape>
  );
};

export default CardLogin;
