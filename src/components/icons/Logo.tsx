import { SVGProps } from "react";

interface Props {
  svg?: SVGProps<SVGSVGElement>;
  w: number;
  h: number;
  color?: string;
}

const Logo = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.w}
      height={props.h}
      fill="none"
      {...props}
    >
      <path
        d="M21.7841 0.8379C23.0592 -0.279302 24.9408 -0.279299 26.2159 0.837904L46.8042 18.877C49.2043 20.9799 47.7494 25 44.5883 25H3.41168C0.250585 25 -1.20426 20.9798 1.19582 18.8769L21.7841 0.8379Z"
        fill={props.color ? props.color : "#0E0E1A"}
      />
      <path
        d="M34.7097 1.04763C35.7721 -0.207362 37.6417 -0.355816 38.8856 0.716051L60.9616 19.7392C62.2055 20.8111 62.3527 22.6974 61.2903 23.9524C60.2279 25.2074 58.3583 25.3558 57.1144 24.2839L35.0384 5.26079C33.7945 4.18892 33.6473 2.30263 34.7097 1.04763Z"
        fill={props.color ? props.color : "#0E0E1A"}
      />
      <path
        d="M46.7097 1.04763C47.7721 -0.207362 49.6417 -0.355816 50.8856 0.716051L72.9616 19.7392C74.2055 20.8111 74.3527 22.6974 73.2903 23.9524C72.2279 25.2074 70.3583 25.3558 69.1144 24.2839L47.0384 5.26079C45.7945 4.18892 45.6473 2.30263 46.7097 1.04763Z"
        fill={props.color ? props.color : "#0E0E1A"}
      />
    </svg>
  );
};

export default Logo;
