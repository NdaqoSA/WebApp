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
  HouseDetailContainer,
  HouseDetail,
  MoreDetailButton,
  ItemCardInfosTextData,
  ItemCardInfosTextContainer,
  ItemsCardInfosTextBottom,
  ItemsCardInfosTextTop,
  ItemsCardMessageButton,
  ItemCardButtonGroupContainer,
  ItemCardButtonGroup,
  ItemLikeButton,
  ItemCollectionButton,
  ItemVisitedButton,
} from "../../components/layouts/shape/MobileItemCard";
import Image from "../../assets/images/im4.jpg";
import User from "../../assets/images/im1.jpg";
import { Text } from "../../components/typo/Typo";
// import Search from "../../components/icons/Search";
import BedRoom from "../../components/icons/BedRoom";
import Saloon from "../../components/icons/Saloon";
import BathRoom from "../../components/icons/BathRoom";
import CookRoom from "../../components/icons/CookRoom";
import SwimmingPool from "../../components/icons/SwimmingPool";
import Surface from "../../components/icons/Surface";
import ArrowDown from "../../components/icons/ArrowDown";
import Check from "../../components/icons/Check";
import Message from "../../components/icons/Message";
import Like from "../../components/icons/Like";
import Collection from "../../components/icons/Collection";
import Visited from "../../components/icons/Visited";
import TripleDots from "../../components/icons/TripleDots";

const ItemCard = () => {
  return (
    <ItemCardContainer>
      <ItemCardContent>
        <ItemCardImage>
          <ItemCardIcon>
            <TripleDots w={13} h={3} />
          </ItemCardIcon>
          <Img src={Image} alt="image" radius="17px" />
        </ItemCardImage>
        <LoctionInfos>
          <BuyButton>Acheter</BuyButton>
          <Text size={18} weight={700} fill>
            Diata, Makélékélé, Brazzaville
          </Text>
        </LoctionInfos>
        <ItemCardInfos>
          <ItemCardUser>
            <Img src={User} alt="user image" radius="70px" />
          </ItemCardUser>
          <ItemCardInfosData>
            <ItemCardInfosIconData>
              <HouseDetailContainer>
                <HouseDetail>
                  <BedRoom w={24} h={16} />
                  <Text size={12} weight={700}>
                    3
                  </Text>
                </HouseDetail>
                <HouseDetail>
                  <Saloon w={13} h={15} />
                  <Text size={12} weight={700}>
                    1
                  </Text>
                </HouseDetail>
                <HouseDetail>
                  <BathRoom w={20} h={15} />
                  <Text size={12} weight={700}>
                    7
                  </Text>
                </HouseDetail>
                <HouseDetail>
                  <CookRoom w={27} h={18} />
                  <Text size={12} weight={700}>
                    2
                  </Text>
                </HouseDetail>
                <HouseDetail>
                  <SwimmingPool w={14} h={17} />
                  <Text size={12} weight={700}>
                    1
                  </Text>
                </HouseDetail>
                <HouseDetail>
                  <Surface w={16} h={15} />
                  <Text size={12} weight={700}>
                    750
                  </Text>
                </HouseDetail>
              </HouseDetailContainer>
              <MoreDetailButton>
                <ArrowDown w={13} h={8} />
              </MoreDetailButton>
            </ItemCardInfosIconData>
            <ItemCardInfosTextData>
              <ItemCardInfosTextContainer>
                <ItemsCardInfosTextTop>
                  <Text size={18} weight={700} fill>
                    787 000 000 FCFA
                  </Text>
                  <Text size={9} weight={700} fill>
                    prix d'achat
                  </Text>
                </ItemsCardInfosTextTop>
                <ItemsCardInfosTextBottom>
                  <Text>
                    Werner Nabonne <Check w={16} h={16} />
                  </Text>
                  <Text size={8} weight={600}>
                    •
                  </Text>
                  <Text size={12} weight={500}>
                    il y a 2 jours
                  </Text>
                </ItemsCardInfosTextBottom>
              </ItemCardInfosTextContainer>
              <ItemsCardMessageButton>
                <Message w={21} h={20} />
              </ItemsCardMessageButton>
            </ItemCardInfosTextData>
          </ItemCardInfosData>
        </ItemCardInfos>
        <ItemCardButtonGroupContainer>
          <ItemCardButtonGroup>
            <ItemLikeButton>
              <Like w={25} h={20} />
              <Text size={14} weight={600} fill>
                J'aime
              </Text>
            </ItemLikeButton>
            <Text size={10} weight={600}>
              278 768 ont aimés
            </Text>
          </ItemCardButtonGroup>
          <ItemCardButtonGroup>
            <ItemCollectionButton>
              <Collection w={25} h={20} />
            </ItemCollectionButton>
            <Text size={10} weight={600}>
              865 Collections
            </Text>
          </ItemCardButtonGroup>
          <ItemCardButtonGroup>
            <ItemVisitedButton>
              <Visited w={26} h={19} />
              <Text size={14} weight={600}>
                Visiter
              </Text>
            </ItemVisitedButton>
            <Text size={10} weight={600}>
              5,1K visites • 98 utilisés
            </Text>
          </ItemCardButtonGroup>
        </ItemCardButtonGroupContainer>
      </ItemCardContent>
    </ItemCardContainer>
  );
};

export default ItemCard;
