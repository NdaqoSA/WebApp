import { SVGProps } from "react";

interface Props {
  svg?: SVGProps<SVGSVGElement>;
  w: number;
  h: number;
}

const AccountTab = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.w}
    height={props.h}
    fill="none"
    {...props}
  >
    <path
      fill="#0E0E1A"
      d="M2.088 20h14.827C18.222 20 19 19.386 19 18.366c0-2.828-3.685-6.709-9.504-6.709-5.807 0-9.496 3.88-9.496 6.71C0 19.385.782 20 2.088 20ZM9.504 9.713c2.477 0 4.552-2.15 4.552-4.916 0-2.7-2.085-4.797-4.552-4.797-2.467 0-4.556 2.13-4.549 4.816.004 2.746 2.067 4.897 4.549 4.897Z"
    />
  </svg>
);
export default AccountTab;
