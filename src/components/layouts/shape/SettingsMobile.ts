import { color } from "../../../utils/styles/color";
import styled from "styled-components";

export const CircleImage = styled.div`
  width: 100%;
  height: 151px;
  border-radius: 151px;
  margin-top: 15px;
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  width: 151px;
  height: 151px;
  border-radius: 151px;
  object-fit: cover;
  object-position: center center;
`;

export const SettingsContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 550px;
  background: ${color.white_trans};
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserInfosContainer = styled.div`
  width: 100%;
  max-width: 342px;
  margin-inline: 20px;
  margin-bottom: 10px;
  padding: 15px 11px;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const UserList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SettingOption = styled.div`
  width: 100%;
  padding-inline: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SettingOptionGroup = styled.div`
  width: 100%;
  height: 82px;
  border-radius: 8px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
`;
