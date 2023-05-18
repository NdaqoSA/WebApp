import { RxArrowLeft, RxCross2 } from "react-icons/rx";
import {
  BackCardButton,
  CardHeader,
  CardTitle,
  ExitCardButton,
} from "../layouts/shape/Card";
import { TextLogo } from "../typo/Typo";
import {
  CardList,
  CardListLang,
  CardPopup,
  CardSearch,
  CardSearchCancel,
  CardSearchContainer,
  Lang,
} from "../layouts/shape/CardLangPopup";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import Logo from "../icons/Logo";

interface Props {
  setOpenLang: Function;
}

const CardLangPopup = ({ setOpenLang }: Props) => {
  const [focus, setFocus] = useState(false);

  const [alter, setAlter] = useState(false);

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
          <CardSearch>
            <small>
              <FaSearch />
              Recherche
            </small>
            <input type="text" onFocus={() => setFocus(true)} />
          </CardSearch>
          <CardSearchCancel></CardSearchCancel>
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
