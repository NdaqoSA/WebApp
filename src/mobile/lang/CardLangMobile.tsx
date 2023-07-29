import { useEffect, useState } from "react";
import { MobileContainerLang } from "../../components/layouts/box/BoxLayout";
import {
  BackCardButton,
  CardHeader,
  CardTitle,
  ExitCardButton,
} from "../../components/layouts/shape/Card";
import { Card } from "../../components/layouts/shape/MobileCard";
import { TextLogo, Text } from "../../components/typo/Typo";
import Logo from "../../components/icons/Logo";
import Exit from "../../components/icons/Exit";
import Valid from "../../components/icons/Valid";
import {
  CardCircleDeleteButton,
  CardLangContainer,
  CardListLangMobile,
  CardSearchCancelMobile,
  CardSearchMobile,
  CardSearchMobileContainer,
  EmptyLangMobile,
  LangMobile,
  LangSpaceSeparator,
} from "../../components/layouts/shape/CardLangPopup";
import Search from "../../components/icons/Search";
import Delete from "../../components/icons/Delete";
import SearchFailed from "../../components/icons/SearchFailed";

interface Props {
  setOpenLang: Function;
}

type Language = {
  id: number;
  language: string;
}[];

const CardLangMobile = ({ setOpenLang }: Props) => {
  const [alter, setAlter] = useState<boolean>(false);
  const [enable, setEnable] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [cancelAction, setCancelAction] = useState(false);
  const [wrongText, setWrongText] = useState<string>("");
  const [languages] = useState<Language>(data);
  const [selectedLang, setSelectedLang] = useState(languages);
  useEffect(() => {
    const interval = setInterval(() => {
      setAlter(!alter);
    }, 6000);

    return () => clearInterval(interval);
  }, [alter]);

  useEffect(() => {
    if (searchText.length >= 13) {
      setWrongText(searchText.substring(0, 10) + "...");
      return;
    }
    setWrongText(searchText);
  }, [searchText]);

  useEffect(() => {
    if (searchText) {
      setSelectedLang(
        languages.filter((lang) => {
          if (
            lang.language.toLowerCase().search(searchText.toLowerCase()) !== -1
          ) {
            return lang;
          }
        })
      );
    } else {
      setSelectedLang(languages);
    }
  }, [searchText]);

  return (
    <MobileContainerLang>
      <Card>
        <CardHeader mb={10}>
          <BackCardButton
            fill
            to={"#"}
            onClick={() => setOpenLang(false)}
            width={71}
            height={57}
          >
            <Valid w={18} h={18} />
          </BackCardButton>

          <CardTitle>
            {alter ? <TextLogo>Ndaqo.com</TextLogo> : <Logo w={72} h={24} />}
          </CardTitle>

          <ExitCardButton to={"/"} width={71} height={57} disable>
            <Exit w={15} h={15} />
          </ExitCardButton>
        </CardHeader>
        <CardSearchMobileContainer>
          <CardSearchMobile active={enable}>
            <small>
              <Search w={19} h={19} weight={enable ? 600 : 500} />
              <span>Recherche</span>
            </small>
            {searchText && (
              <CardCircleDeleteButton onClick={() => setSearchText("")}>
                <Delete w={19} h={19} />
              </CardCircleDeleteButton>
            )}
            <input
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              onClick={() => setEnable(true)}
              value={searchText}
            />
          </CardSearchMobile>
          <CardSearchCancelMobile active={enable} click={cancelAction}>
            <Text
              size={18}
              weight={600}
              onClick={() => {
                setSearchText("");
                setEnable(false);
                setCancelAction(false)
              }}
            >
              Annuler
            </Text>
          </CardSearchCancelMobile>
        </CardSearchMobileContainer>
        <CardLangContainer>
          {selectedLang.length > 0 ? (
            <CardListLangMobile>
              {selectedLang.map((item) => (
                <LangMobile key={`mobile-${item.id}`}>
                  {item.language}
                </LangMobile>
              ))}
            </CardListLangMobile>
          ) : (
            <EmptyLangMobile>
              <Text size={16} weight={700} align="center">
                Oups, aucune langue ne correspond à votre recherche “{wrongText}
                ”
              </Text>
              <Text size={12} weight={500} align="center">
                Vérifiez la saisie ou essayez une nouvelle recherche
              </Text>
              <span>
                <SearchFailed w={37} h={29} />
              </span>
            </EmptyLangMobile>
          )}
        </CardLangContainer>
        <LangSpaceSeparator />
      </Card>
    </MobileContainerLang>
  );
};

const data = [
  {
    id: 1,
    language: "English",
  },
  {
    id: 1,
    language: "Français",
  },
  {
    id: 2,
    language: "Lingala",
  },
  {
    id: 3,
    language: "Swahili ",
  },
  {
    id: 4,
    language: "やまと",
  },
  {
    id: 5,
    language: "中国",
  },
  {
    id: 6,
    language: "Italiano",
  },
  {
    id: 7,
    language: "Portugesh",
  },
  {
    id: 8,
    language: "KinKongo",
  },
  {
    id: 10,
    language: "Mbembe",
  },
  {
    id: 11,
    language: "Mbembe",
  },
  {
    id: 12,
    language: "Mbembe",
  },
];

export default CardLangMobile;
