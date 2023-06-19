import {
  BackCardButton,
  ButtonBackTooltip,
  ButtonTooltip,
  CardHeader,
  CardTitle,
  ExitCardButton,
} from "../layouts/shape/Card";

import { TextLogo, Text } from "../typo/Typo";
import {
  CardCircleDeleteButton,
  CardList,
  CardListLang,
  CardPopup,
  CardSearch,
  CardSearchCancel,
  CardSearchContainer,
  EmptyLang,
  Lang,
} from "../layouts/shape/CardLangPopup";
import { useEffect, useState } from "react";
import Logo from "../icons/Logo";
import Search from "../icons/Search";
import Delete from "../icons/Delete";
import SearchFailed from "../icons/SearchFailed";
import Exit from "../icons/Exit";
import Back from "../icons/Back";

interface Props {
  setOpenLang: Function;
}

type Language = {
  id: number;
  language: string;
}[];

const CardLangPopup = ({ setOpenLang }: Props) => {
  const [enable, setEnable] = useState<boolean>(false);
  const [alter, setAlter] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [wrongText, setWrongText] = useState<string>("");
  const [languages] = useState<Language>(data);
  const [selectedLang, setSelectedLang] = useState(languages);
  const [exitAction, setExitAction] = useState(false);
  const [backAction, setBackAction] = useState(false);
  const [cancelAction, setCancelAction] = useState(false);

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
    const interval = setInterval(() => {
      setAlter(!alter);
    }, 6000);

    return () => clearInterval(interval);
  }, [alter]);
  return (
    <CardPopup border={currentBorder()}>
      <CardHeader style={{ marginBottom: 10 }}>
        <BackCardButton
          to={"#"}
          onClick={() => setOpenLang(false)}
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
      <CardList>
        <CardSearchContainer>
          <CardSearch active={enable}>
            <small>
              <Search w={15} h={15} />
              <span>Recherche</span>
            </small>
            {searchText && (
              <CardCircleDeleteButton onClick={() => setSearchText("")}>
                <Delete w={15} h={15} />
              </CardCircleDeleteButton>
            )}
            <input
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              onClick={() => setEnable(true)}
              value={searchText}
            />
          </CardSearch>
          <CardSearchCancel active={enable} click={cancelAction}>
            <Text
              size={14}
              onClick={() => {
                setSearchText("");
                setEnable(false);
              }}
              onMouseEnter={() => setCancelAction(true)}
              onMouseLeave={() => setCancelAction(false)}
            >
              Annuler
            </Text>
          </CardSearchCancel>
        </CardSearchContainer>
        {selectedLang.length > 0 ? (
          <CardListLang>
            {selectedLang.map((item) => (
              <Lang key={item.id}>{item.language}</Lang>
            ))}
          </CardListLang>
        ) : (
          <EmptyLang>
            <Text size={15} weight={700} align="center">
              Oups, aucune langue ne correspond à votre recherche “{wrongText}”
            </Text>
            <Text size={11} weight={500} align="center">
              Vérifiez la saisie ou essayez une nouvelle recherche
            </Text>
            <span>
              <SearchFailed w={29} h={23} />
            </span>
          </EmptyLang>
        )}
      </CardList>
    </CardPopup>
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
];

export default CardLangPopup;
