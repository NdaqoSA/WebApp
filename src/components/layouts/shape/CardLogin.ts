import styled from "styled-components";
import { color } from "../../../utils/styles/color";
import { dimensions } from "../../../utils/styles/dimensions";
// import { Link } from "react-router-dom";
// import { toRem } from "../../../utils/styles/convert";

// interface CardButtonProps {
//   disable?: true;
// }

export const Card = styled.div`
  position: relative;
  max-width: 457px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  border-radius: ${dimensions.radius};
  background-color: ${color.bg};
  border: 1px solid ${color.border};
  box-shadow: inset 0px 0px 15px rgba(247, 248, 252, 0.4),
    inset 0px 0px 0px 1px rgba(247, 248, 252, 0.15);
  overflow: hidden;
`;

export const CardProfile = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 15px;
`;

export const CardToolTip = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
`;

export const CardProfileText = styled.div`
  width: 100%;
  margin-bottom: 5px;
`;

export const CardSlideImage = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 11px;
  padding-inline: 30px;
  background: #000;
`;

export const CardFooter = styled.div`
  padding-inline: 67px;
  margin-bottom: 15px;
  & > p {
    color: ${color.deep_grey};
    font-weight: 500;
    line-height: 12.1px;

    & span {
      color: ${color.text_color_2};
      font-weight: 600;
    }
  }
`;
