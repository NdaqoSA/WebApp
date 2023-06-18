import { useState } from "react";
import Check from "../icons/Check";
import {
  ToolTipsArrow,
  ToolTipsContainer,
  ToolTipsRectanle,
  ToolTipsText,
} from "../layouts/shape/ToolTips";
import { Text } from "../typo/Typo";

interface Props {
  username: string;
}

const ToolTips = ({ username }: Props) => {
  const [clickState, setClickState] = useState(false);
  return (
    <ToolTipsContainer
      click={clickState}
      onMouseDown={() => {
        setClickState(true);
      }}
      onMouseUp={() => setClickState(false)}
    >
      <ToolTipsRectanle />
      <ToolTipsText>
        <Text size={14}>{username}</Text>
        <Check w={16} h={15} />
      </ToolTipsText>
      <ToolTipsArrow />
    </ToolTipsContainer>
  );
};

export default ToolTips;
