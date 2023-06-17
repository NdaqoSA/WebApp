import { RxArrowLeft, RxCross2 } from "react-icons/rx";
import {
  BackCardButton,
  CardHeader,
  CardTitle,
  ExitCardButton,
} from "../layouts/shape/Card";

import { TextLogo, Text } from "../typo/Typo";
import {
  CardList,
  CardListLang,
  CardPopup,
  CardSearch,
  CardSearchCancel,
  CardSearchContainer,
  Lang,
} from "../layouts/shape/CardLangPopup";
import { useEffect, useState } from "react";
import Logo from "../icons/Logo";
import Search from "../icons/Search";
import Delete from "../icons/Delete";

interface Props {
  setOpenLang: Function;
}

const CardLangPopup = ({ setOpenLang }: Props) => {
  const [enable, setEnable] = useState<boolean>(false);
  // const [focus, setFocus] = useState<boolean>(false);
  const [alter, setAlter] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      setAlter(!alter);
    }, 6000);

    return () => clearInterval(interval);
  }, [alter]);
  return (
    <CardPopup>
      <CardHeader style={{ marginBottom: 10 }}>
        <BackCardButton to={""} onClick={() => setOpenLang(false)}>
          <RxArrowLeft />
        </BackCardButton>
        <CardTitle>
          {alter ? <TextLogo>Ndaqo.com</TextLogo> : <Logo w={72} h={24} />}
        </CardTitle>
        <ExitCardButton to={""} disable>
          <RxCross2 />
        </ExitCardButton>
      </CardHeader>
      <CardList>
        <CardSearchContainer>
          <CardSearch active={enable}>
            <small>
              <Search w={15} h={15} />
              <span>Recherche</span>
            </small>
            <span onClick={() => setSearchText("")}>
              <Delete w={15} h={15} />
            </span>
            <input
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              onClick={() => setEnable(true)}
              // onKeyUp={() => setFocus(true)}
              value={searchText}
            />
          </CardSearch>
          <CardSearchCancel active={enable}>
            <Text size={14} onClick={() => setEnable(false)}>
              Annuler
            </Text>
          </CardSearchCancel>
        </CardSearchContainer>
        <CardListLang>
          {data.map((item) => (
            <Lang key={item.id}>{item.language}</Lang>
          ))}
        </CardListLang>
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
