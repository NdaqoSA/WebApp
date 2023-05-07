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
  CardPopup,
  CardSearch,
  CardSearchCancel,
  CardSearchContainer,
} from "../layouts/shape/CardLangPopup";

interface Props {
  setOpenLang: Function;
}

const CardLangPopup = ({ setOpenLang }: Props) => {
  return (
    <CardPopup>
      <CardHeader style={{ marginBottom: 10 }}>
        <BackCardButton to={""} onClick={() => setOpenLang(false)}>
          <RxArrowLeft />
        </BackCardButton>
        <CardTitle>
          <TextLogo>Ndaqo.com</TextLogo>
        </CardTitle>
        <ExitCardButton to={""} disable>
          <RxCross2 />
        </ExitCardButton>
      </CardHeader>
      <CardList>
        <CardSearchContainer>
          <CardSearch></CardSearch>
          <CardSearchCancel></CardSearchCancel>
        </CardSearchContainer>
      </CardList>
    </CardPopup>
  );
};

export default CardLangPopup;
