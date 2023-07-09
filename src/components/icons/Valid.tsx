import { SVGProps } from "react";

interface Props {
  svg?: SVGProps<SVGSVGElement>;
  w: number;
  h: number;
}

const Valid = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.w}
    height={props.h}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M6.945 18c.588 0 1.052-.244 1.371-.741L17.671 2.4c.234-.37.329-.696.329-1.007C18 .578 17.421 0 16.614 0c-.565 0-.902.199-1.247.752l-8.462 13.77-4.336-5.64c-.323-.424-.672-.607-1.158-.607-.824 0-1.411.6-1.411 1.419 0 .356.119.695.414 1.055l5.17 6.551c.38.476.8.7 1.36.7z"
    ></path>
  </svg>
);
export default Valid;
