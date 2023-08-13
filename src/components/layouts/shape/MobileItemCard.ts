import styled from "styled-components";
import { color } from "../../../utils/styles/color";

export const ItemCardContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
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
`;

export const ItemCardInfosData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ItemCardInfosIconData = styled.div`
  width: 100%;
  height: 30px;
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  padding-inline: 10px;
  background-color: ${color.grey_trans};
`;
