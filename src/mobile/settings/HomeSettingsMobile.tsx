import { useEffect, useState } from "react";
import { MobileContainer } from "../../components/layouts/box/BoxLayout";
import { Card } from "../../components/layouts/shape/MobileCard";
import {
  BackCardButton,
  CardHeader,
  ExitCardButton,
} from "../../components/layouts/shape/Card";
import Back from "../../components/icons/Back";
import { TextLogo } from "../../components/typo/Typo";
import Exit from "../../components/icons/Exit";
import Logo from "../../components/icons/Logo";
import {
  CircleImage,
  Img,
  SettingOption,
  SettingOptionGroup,
  SettingsContainer,
  UserInfosContainer,
  UserList,
} from "../../components/layouts/shape/SettingsMobile";
import Picture from "../../assets/images/im1.jpg";
import { Text } from "../../components/typo/Typo";
import Check from "../../components/icons/Check";

const HomeSettingsMobile = () => {
  const [alter, setAlter] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setAlter(!alter);
    }, 6000);

    return () => clearInterval(interval);
  }, [alter]);

  return (
    <MobileContainer>
      <Card height={729}>
        <CardHeader mb={20}>
          <BackCardButton to={"#"} width={71} height={57} disable>
            <Back w={23} h={17} />
          </BackCardButton>
          {alter ? <TextLogo>Ndaqo.com</TextLogo> : <Logo w={72} h={24} />}
          <ExitCardButton to={"/"} width={71} height={57} fill>
            <Exit w={15} h={15} />
          </ExitCardButton>
        </CardHeader>
        <CircleImage>
          <Img src={Picture} alt="User image" />
        </CircleImage>
        <SettingsContainer>
          <UserInfosContainer>
            <UserList>
              <Text size={14} weight={600} fill>
                Nom:
              </Text>
              <Text size={14} weight={600} fill>
                Werner Nebonne
              </Text>
            </UserList>
            <UserList>
              <Text size={14} weight={600} fill>
                Identifiant:
              </Text>
              <Text size={14} weight={600} fill>
                @nebonne
              </Text>
            </UserList>
            <UserList>
              <Text size={14} weight={600} fill>
                Status:
              </Text>
              <Text
                size={14}
                weight={600}
                fill
                style={{ display: "flex", alignItems: "center", gap: "3px" }}
              >
                Certifié <Check w={15} h={15} />
              </Text>
            </UserList>
          </UserInfosContainer>
          <SettingOption>
            <Text size={16} weight={700} fill>
              Details du compte
            </Text>
            <SettingOptionGroup></SettingOptionGroup>
          </SettingOption>
        </SettingsContainer>
      </Card>
    </MobileContainer>
  );
};

export default HomeSettingsMobile;
