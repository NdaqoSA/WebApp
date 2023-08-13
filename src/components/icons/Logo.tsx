import { SVGProps } from "react";
import { color } from "../../utils/styles/color";

interface Props {
  svg?: SVGProps<SVGSVGElement>;
  w: number;
  h: number;
  white?: true;
}

const Logo = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.w}
    height={props.h}
    fill="none"
    {...props}
  >
    <path
      fill={props.white ? color["ndaqo-white"] : color["ndaqo-black"]}
      d="M21.33.804a3.328 3.328 0 0 1 4.34 0l20.16 17.318C48.18 20.14 46.754 24 43.66 24H3.34c-3.095 0-4.52-3.86-2.17-5.878L21.33.804ZM33.684 1.006a2.847 2.847 0 0 1 4.027-.319L59 18.95a2.878 2.878 0 0 1 .317 4.044 2.847 2.847 0 0 1-4.027.319L34 5.05a2.878 2.878 0 0 1-.317-4.044ZM45.684 1.006a2.847 2.847 0 0 1 4.027-.319L71 18.95a2.878 2.878 0 0 1 .317 4.044 2.847 2.847 0 0 1-4.027.319L46 5.05a2.878 2.878 0 0 1-.317-4.044Z"
    />
  </svg>
);
export default Logo;
