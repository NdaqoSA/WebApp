import { useEffect, useState } from "react";
import {
  MobileCardBottom,
  MobileCardTextBottom,
  MobileContainer,
} from "../../components/layouts/box/BoxLayout";
import {
  BackCardButton,
  CardButtonLang,
  CardHeader,
  CardRegisterButton,
  CardSigntButton,
  CardTitle,
  ExitCardButton,
} from "../../components/layouts/shape/Card";
import {
  Card,
  MobileTextContent,
} from "../../components/layouts/shape/MobileCard";
import { SubText, Text, TextLogo } from "../../components/typo/Typo";
import Back from "../../components/icons/Back";
import Logo from "../../components/icons/Logo";
import Exit from "../../components/icons/Exit";
import EditInput from "../../components/icons/EditInput";
import UserAccount from "../../components/icons/UserAccount";
import Language from "../../components/icons/Language";
import CardLangMobile from "../lang/CardLangMobile";
const SignOrLoginMobile = () => {
  const [openLang, setOpenLang] = useState(false);
  const [alter, setAlter] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAlter(!alter);
    }, 6000);

    return () => clearInterval(interval);
  }, [alter]);
  return (
    <>
      <MobileContainer>
        {openLang ? (
          <CardLangMobile setOpenLang={setOpenLang} />
        ) : (
          <Card>
            <CardHeader mb={20}>
              {!openLang && (
                <BackCardButton
                  to={"#"}
                  onClick={() => setOpenLang(false)}
                  disable
                  width={71}
                  height={57}
                >
                  <Back w={23} h={17} />
                </BackCardButton>
              )}
              <CardTitle>
                {openLang ? (
                  <div>null</div>
                ) : alter ? (
                  <TextLogo>Ndaqo.com</TextLogo>
                ) : (
                  <Logo w={72} h={24} />
                )}
              </CardTitle>
              {!openLang && (
                <ExitCardButton to={"/"} width={71} height={57} fill>
                  <Exit w={15} h={15} />
                </ExitCardButton>
              )}
            </CardHeader>
            <MobileTextContent>
              <Text size={14} weight={600} fill align="center">
                Utilise ton compte Ndaqo pour découvrir des services et
                contacter les propriétaires fonciers
              </Text>
            </MobileTextContent>
            <MobileCardBottom>
              <CardRegisterButton to={"/register"} size={16}>
                <EditInput w={31} h={20} />
                Je n'ai pas de compte
              </CardRegisterButton>
              <CardSigntButton to={"/login"} size={16}>
                <UserAccount w={28} h={23} />
                J’ai déjà un compte
              </CardSigntButton>
            </MobileCardBottom>
            <MobileCardTextBottom>
              <SubText align="center" size={12} fill>
                La plateforme qui facilite la connexion entre les utilisateurs,
                propriétaires et prestataires de services.
              </SubText>
            </MobileCardTextBottom>
            <CardButtonLang
              to={""}
              onClick={() => setOpenLang(true)}
              width={183}
              height={40}
              fill
              size={14}
            >
              <Language w={19} h={17} />
              Changer de langue
            </CardButtonLang>
          </Card>
        )}
      </MobileContainer>
    </>
  );
};

export default SignOrLoginMobile;
