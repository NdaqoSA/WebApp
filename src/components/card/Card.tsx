import {
  BackCardButton,
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
import { RxCross2, RxArrowLeft } from "react-icons/rx";
import EditInput from "../icons/EditInput";
import Language from "../icons/Language";
import UserAccount from "../icons/UserAccount";
import { useEffect, useState } from "react";
import CardLangPopup from "./CardLangPopup";
import Logo from "../icons/Logo";

const Card = () => {
  const [openLang, setOpenLang] = useState(false);
  const [alter, setAlter] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAlter(!alter);
    }, 6000);

    return () => clearInterval(interval);
  }, [alter]);

  return (
    <CardShape>
      <>
        <CardHeader>
          <BackCardButton to={""} disable>
            <RxArrowLeft />
          </BackCardButton>
          <CardTitle>
            {alter ? <TextLogo>Ndaqo.com</TextLogo> : <Logo w={72} h={24} />}
          </CardTitle>
          <ExitCardButton to={""}>
            <RxCross2 />
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
