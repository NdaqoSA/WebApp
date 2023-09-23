import { SVGProps } from "react";

interface Props {
  svg?: SVGProps<SVGSVGElement>;
  w: number;
  h: number;
}

const SmallArrowDown = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.w}
    height={props.h}
    fill="none"
    {...props}
  >
    <path
      d="M5.00274 6.5C5.27566 6.49723 5.49946 6.39515 5.71781 6.17432L9.75166 1.99586C9.91811 1.82751 10 1.6288 10 1.38868C10 0.897422 9.60974 0.5 9.13211 0.5C8.89467 0.5 8.67087 0.596596 8.49345 0.781511L4.7844 4.65363H5.22927L1.50928 0.781511C1.33188 0.602116 1.11081 0.5 0.867903 0.5C0.387555 0.5 0 0.897422 0 1.38868C0 1.62604 0.084607 1.82475 0.245633 1.99862L4.28494 6.17432C4.50874 6.40063 4.72981 6.5 5.00274 6.5Z"
      fill="#F7F8FC"
    />
  </svg>
);
export default SmallArrowDown;
