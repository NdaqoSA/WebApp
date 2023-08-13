import { SVGProps } from "react";

interface Props {
  svg?: SVGProps<SVGSVGElement>;
  w: number;
  h: number;
}

const SearchTab = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.w}
    height={props.h}
    fill="none"
    {...props}
  >
    <path
      fill="#0E0E1A"
      d="M0 8.228c0 4.545 3.723 8.232 8.305 8.232 1.624 0 3.12-.476 4.379-1.282l4.366 4.334c.334.33.779.488 1.244.488.988 0 1.706-.742 1.706-1.71 0-.453-.165-.881-.491-1.204l-4.327-4.312a7.895 7.895 0 0 0 1.428-4.546C16.61 3.687 12.887 0 8.305 0S0 3.687 0 8.228Zm2.447 0c0-3.203 2.626-5.802 5.858-5.802 3.231 0 5.854 2.6 5.854 5.802 0 3.206-2.623 5.806-5.854 5.806-3.232 0-5.858-2.6-5.858-5.806Z"
    />
  </svg>
);
export default SearchTab;
