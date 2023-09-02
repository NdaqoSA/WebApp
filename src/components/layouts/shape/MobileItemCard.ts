import styled from "styled-components";
import { color } from "../../../utils/styles/color";

export const ItemCardContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  border-bottom: 5px solid ${color.inactive_text};
`;

export const ItemCardContent = styled.div`
  width: 100%;
  padding: 15px 5px;
  display: flex;
  flex-direction: column;
`;

export const ItemCardImage = styled.div`
  width: 100%;
  height: 258px;
  border-radius: 17px;
  overflow: hidden;
  position: relative;
  margin-bottom: 10px;
`;

export const ItemCardIcon = styled.a`
  position: absolute;
  top: 19px;
  right: 15px;
  width: 59px;
  height: 43px;
  border-radius: 10px;
  background-color: ${color.black_trans};
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export const Img = styled.img<{ radius: string }>`
  width: 100%;
  height: 100%;
  border-radius: ${({ radius }) => radius && radius};
  object-fit: cover;
  object-position: center center;
`;

export const LoctionInfos = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
`;

export const BuyButton = styled.button`
  width: 84px;
  height: 25px;
  background-color: ${color["ndaqo-black"]};
  color: ${color.white};
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid ${color["ndaqo-black"]};
  border-radius: 7px;
`;

export const ItemCardInfos = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 70px 1fr;
  gap: 5px;
`;

export const ItemCardUser = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 70px;
  margin-bottom: 10px;
`;

export const ItemCardInfosData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ItemCardInfosIconData = styled.div`
  width: 100%;
  height: 30px;
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  padding-inline: 10px 15px;
  background-color: ${color.grey_trans};
  gap: 10px;
`;
export const HouseDetailContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const HouseDetail = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const MoreDetailButton = styled.button`
  background: transparent;
  border: none;
  width: 13px;
`;

export const ItemCardInfosTextData = styled.div`
  display: flex;
  justify-content: space-between;
  height: 35px;
`;

export const ItemCardInfosTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const ItemsCardInfosTextTop = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;
export const ItemsCardInfosTextBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ItemsCardMessageButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 35px;
  border-radius: 10px;
  background-color: ${color.inactive_text};
  border: none;
`;

export const ItemCardButtonGroupContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr 3fr;
  gap: 10px;
  width: 100%;
  height: 74px;
`;

export const ItemCardButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const ItemCardButton = styled.button`
  width: 100%;
  height: 43px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;
  border: none;
`;

export const ItemLikeButton = styled(ItemCardButton)`
  background-color: ${color.inactive_text};
`;
export const ItemCollectionButton = styled(ItemCardButton)`
  background-color: ${color["ndaqo-black"]};
`;
export const ItemVisitedButton = styled(ItemCardButton)`
  background-color: ${color.deep_blue_2};

  & p {
    color: ${color.light_grey};
  }
`;
