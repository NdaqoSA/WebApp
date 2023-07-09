import { SVGProps } from "react";

interface Props {
  svg?: SVGProps<SVGSVGElement>;
  w: number;
  h: number;
}

const Show = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.w}
    height={props.h}
    fill="none"
    {...props}
  >
    <path
      fill="#001EC8"
      d="M9 12c5.404 0 9-4.593 9-6.002C18 4.586 14.4 0 9 0 3.672 0 0 4.586 0 5.998 0 7.407 3.673 12 9 12zm.003-2.247c-1.986 0-3.576-1.71-3.58-3.753-.005-2.098 1.594-3.753 3.58-3.753 1.973 0 3.577 1.657 3.577 3.753 0 2.042-1.604 3.753-3.577 3.753zM9 7.431c.752 0 1.367-.645 1.367-1.427 0-.788-.615-1.438-1.367-1.438s-1.363.65-1.363 1.438c0 .782.611 1.427 1.363 1.427z"
    ></path>
  </svg>
);
export default Show;
