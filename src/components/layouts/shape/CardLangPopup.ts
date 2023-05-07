import styled from "styled-components";
import { color } from "../../../utils/styles/color";
import { dimensions } from "../../../utils/styles/dimensions";

export const CardPopup = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  background: ${color.white_trans};
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  border-radius: ${dimensions.radius};
`;

export const CardList = styled.div`
  width: 100%;
  height: 100%;
`;

export const CardSearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CardSearch = styled.div`
  width: 254px;
  height: 39px;
  border-radius: 10px;
  background-color: ${color.grey_trans};
  margin-inline: auto;
`;
export const CardSearchCancel = styled.div`
  display: flex;
`;
