import {
  ItemCardContainer,
  ItemCardImage,
  ItemCardContent,
  Img,
  ItemCardIcon,
  LoctionInfos,
  BuyButton,
  ItemCardInfos,
  ItemCardUser,
  ItemCardInfosData,
  ItemCardInfosIconData,
} from "../../components/layouts/shape/MobileItemCard";
import Image from "../../assets/images/im4.jpg";
import User from "../../assets/images/im1.jpg";
import LinkIcon from "../../components/icons/LinkIcon";
import { Text } from "../../components/typo/Typo";

const ItemCard = () => {
  return (
    <ItemCardContainer>
      <ItemCardContent>
        <ItemCardImage>
          <ItemCardIcon>
            <LinkIcon w={17} h={17} />
          </ItemCardIcon>
          <Img src={Image} alt="image" radius="17px" />
        </ItemCardImage>
        <LoctionInfos>
          <BuyButton>Acheter</BuyButton>
          <Text size={18} weight={700}>
            Diata, Makélékélé, Brazzaville
          </Text>
        </LoctionInfos>
        <ItemCardInfos>
          <ItemCardUser>
            <Img src={User} alt="user image" radius="70px" />
          </ItemCardUser>
          <ItemCardInfosData>
            <ItemCardInfosIconData></ItemCardInfosIconData>
          </ItemCardInfosData>
        </ItemCardInfos>
      </ItemCardContent>
    </ItemCardContainer>
  );
};

export default ItemCard;
