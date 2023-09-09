import { SVGProps } from "react";

interface Props {
  svg?: SVGProps<SVGSVGElement>;
  w: number;
  h: number;
}

const TripleDots = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.w}
    height={props.h}
    fill="none"
    {...props}
  >
    <path
      d="M1.47155 3C2.28375 3 2.95894 2.31641 2.95894 1.5C2.95894 0.655364 2.31144 0 1.47155 0C0.664542 0 0 0.66839 0 1.5C0 2.31641 0.664542 3 1.47155 3ZM6.50106 3C7.30201 3 7.97261 2.31641 7.97261 1.5C7.97261 0.655364 7.32971 0 6.50106 0C5.69192 0 5.03195 0.66839 5.03195 1.5C5.03195 2.31641 5.69192 3 6.50106 3ZM11.5284 3C12.3294 3 13 2.31641 13 1.5C13 0.655364 12.357 0 11.5284 0C10.7056 0 10.0457 0.66839 10.0457 1.5C10.0457 2.31641 10.7056 3 11.5284 3Z"
      fill="white"
    />
  </svg>
);
export default TripleDots;
