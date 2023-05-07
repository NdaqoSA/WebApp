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
import { RiAccountPinCircleFill } from "react-icons/ri";
import { MdOutlineEditNote } from "react-icons/md";
import { IoLanguageOutline } from "react-icons/io5";
import { useState } from "react";
import CardLangPopup from "./CardLangPopup";

const Card = () => {
  const [openLang, setOpenLang] = useState(true);
  return (
    <CardShape>
      <>
        <CardHeader>
          <BackCardButton to={""} disable>
            <RxArrowLeft />
          </BackCardButton>
          <CardTitle>
            <TextLogo>Ndaqo.com</TextLogo>
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
          <CardRegisterButton to={""}>
            <RiAccountPinCircleFill size={21} />
            Je n'ai pas de compte
          </CardRegisterButton>
          <CardSigntButton to={""}>
            <MdOutlineEditNote size={21} />
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
          <IoLanguageOutline size={16} />
          Changer de langue
        </CardButtonLang>
      </>
      {openLang && <CardLangPopup setOpenLang={setOpenLang} />}
    </CardShape>
  );
};

export default Card;
