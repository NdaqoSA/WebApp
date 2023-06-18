import {
  BackCardButton,
  ButtonTooltip,
  CardButton,
  CardButtonLang,
  CardHeader,
  CardRegisterButton,
  Card as CardShape,
  CardSigntButton,
  CardTextBottom,
  CardTextHeader,
  CardTitle,
  ExitCardButton,
} from "../layouts/shape/Card";
import { SubText, Text, TextLogo } from "../typo/Typo";
import EditInput from "../icons/EditInput";
import Language from "../icons/Language";
import UserAccount from "../icons/UserAccount";
import { useEffect, useState } from "react";
import CardLangPopup from "./CardLangPopup";
import Logo from "../icons/Logo";
import Back from "../icons/Back";
import Exit from "../icons/Exit";

const Card = () => {
  const [openLang, setOpenLang] = useState(false);
  const [alter, setAlter] = useState(false);
  const [exitAction, setExitAction] = useState(false);
  const [backAction, setBackAction] = useState(false);

  const currentBorder = (disable: boolean, type: "back" | "exit") => {
    if (disable && type === "back" && exitAction) {
      return "exit";
    }
    if (disable && type === "exit" && backAction) {
      return "back";
    }
    if (disable && type === "back" && !openLang) {
      return "default";
    }

    if (disable && type === "back" && openLang) {
      return "hide";
    }
    if (disable && type === "exit" && !openLang) {
      return "default";
    }

    if (disable && type === "exit" && openLang) {
      return "hide";
    }
    if (backAction) {
      return "back";
    }
    if (exitAction) {
      return "exit";
    }
    if (openLang) {
      return "hide";
    }
    return "default";
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAlter(!alter);
    }, 6000);

    return () => clearInterval(interval);
  }, [alter]);

  return (
    <CardShape border={currentBorder(true, "back")}>
      <>
        <CardHeader>
          <BackCardButton
            to={"#"}
            onClick={() => setOpenLang(false)}
            onMouseEnter={() => setBackAction(true)}
            onMouseLeave={() => setBackAction(false)}
            disable
          >
            <Back w={16} h={12} />
          </BackCardButton>
          <CardTitle>
            {exitAction ? (
              <ButtonTooltip>Page d'acceuil</ButtonTooltip>
            ) : openLang ? (
              <div>null</div>
            ) : alter ? (
              <TextLogo>Ndaqo.com</TextLogo>
            ) : (
              <Logo w={72} h={24} />
            )}
          </CardTitle>
          <ExitCardButton
            to={"/home"}
            onMouseEnter={() => setExitAction(true)}
            onMouseLeave={() => setExitAction(false)}
          >
            <Exit w={12} h={12} />
          </ExitCardButton>
        </CardHeader>
        <CardTextHeader>
          <Text align="center">
            Utilise ton compte Ndaqo pour découvrir des services et contacter
            les propriétaires fonciers
          </Text>
        </CardTextHeader>
        <CardButton>
          <CardRegisterButton to={"/register"}>
            <EditInput w={29} h={18} />
            Je n'ai pas de compte
          </CardRegisterButton>
          <CardSigntButton to={"/login"}>
            <UserAccount w={21} h={18} />
            J’ai déjà un compte
          </CardSigntButton>
        </CardButton>
        <CardTextBottom>
          <SubText align="center">
            La plateforme qui facilite la connexion entre les utilisateurs,
            propriétaires et prestataires de services.
          </SubText>
        </CardTextBottom>
        <CardButtonLang to={""} onClick={() => setOpenLang(true)}>
          <Language w={13} h={13} />
          Changer de langue
        </CardButtonLang>
      </>
      {openLang && <CardLangPopup setOpenLang={setOpenLang} />}
    </CardShape>
  );
};

export default Card;
