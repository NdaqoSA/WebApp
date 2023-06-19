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
  ButtonBackTooltip,
  ButtonTooltip,
  CardHeader,
  CardTitle,
  ExitCardButton,
} from "../layouts/shape/Card";
import { Text, TextLogo } from "../typo/Typo";
import Logo from "../icons/Logo";
import ToolTips from "../Tooltips/ToolTips";
import FormLogin from "../form/formLogin/FormLogin";
import AuthSlider from "../slider/AuthSlider";
import Back from "../icons/Back";
import Exit from "../icons/Exit";
import { UserInfos } from "../../utils/types/user";

const CardLogin = () => {
  const [alter, setAlter] = useState<boolean>(false);
  const [exitAction, setExitAction] = useState<boolean>(false);
  const [backAction, setBackAction] = useState<boolean>(false);
  const [userInfos, setUserInfos] = useState<UserInfos>();
  const [username, setUsername] = useState<string>("");

  const currentBorder = () => {
    if (backAction) {
      return "back";
    }
    if (exitAction) {
      return "exit";
    }
    return "default";
  };

  useEffect(() => {
    setUsername(userInfos && userInfos.name);
  }, [userInfos]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAlter(!alter);
    }, 6000);

    return () => clearInterval(interval);
  }, [alter]);
  return (
    <CardShape border={currentBorder()}>
      <CardHeader style={{ marginBottom: 5 }}>
        <BackCardButton
          to={"/auth"}
          onMouseEnter={() => setBackAction(true)}
          onMouseLeave={() => setBackAction(false)}
        >
          <Back w={16} h={12} />
        </BackCardButton>
        <CardTitle>
          {exitAction ? (
            <ButtonTooltip>Page d'acceuil</ButtonTooltip>
          ) : backAction ? (
            <ButtonBackTooltip>Retour</ButtonBackTooltip>
          ) : alter ? (
            <TextLogo>Ndaqo.com</TextLogo>
          ) : (
            <Logo w={72} h={24} />
          )}
        </CardTitle>
        <ExitCardButton
          to={"/"}
          onMouseEnter={() => setExitAction(true)}
          onMouseLeave={() => setExitAction(false)}
        >
          <Exit w={12} h={12} />
        </ExitCardButton>
      </CardHeader>
      <CardProfile>
        <CardProfileText>
          <Text size={11} align="center">
            Visiter le profil de Roberson Mafoua
          </Text>
        </CardProfileText>
        <CardToolTip>
          <ToolTips username={username} />
        </CardToolTip>
        <CardSlideImage>
          <AuthSlider getUserIndex={setUserInfos} />
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
