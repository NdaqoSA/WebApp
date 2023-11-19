import { SVGProps } from "react";

interface Props {
  svg?: SVGProps<SVGSVGElement>;
  w: number;
  h: number;
  color?: string;
}

const VerticalArrow = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.w}
      height={props.h}
      fill="none"
      {...props}
    >
      <path
        d="M4.00145 13C4.18209 13 4.36209 12.9282 4.50254 12.7823L7.79465 9.32928C7.92517 9.1959 8 8.99716 8 8.82826C8 8.41553 7.72734 8.14455 7.34525 8.14455C7.15028 8.14455 6.99958 8.22335 6.87873 8.35018L5.54493 9.76589L4.61055 10.8863L4.67279 9.4155V3.58448L4.61055 2.11245L5.54493 3.2329L6.87873 4.64863C6.99958 4.77548 7.15028 4.85427 7.34525 4.85427C7.72734 4.85427 8 4.5833 8 4.17058C8 4.00165 7.92517 3.80411 7.79465 3.66954L4.50254 0.216484C4.36209 0.0705501 4.18209 0 4.00145 0C3.81561 0 3.63446 0.0705501 3.50035 0.216484L0.210555 3.66954C0.0799883 3.80411 0 4.00165 0 4.17058C0 4.5833 0.272668 4.85427 0.654733 4.85427C0.854895 4.85427 1.00561 4.77548 1.12123 4.64863L2.4591 3.2329L3.38715 2.11245L3.33011 3.58448V9.4155L3.38715 10.8863L2.4591 9.76589L1.12123 8.35018C1.00561 8.22335 0.854895 8.14455 0.654733 8.14455C0.272668 8.14455 0 8.41553 0 8.82826C0 8.99716 0.0799883 9.1959 0.210555 9.32928L3.50035 12.7823C3.63446 12.9282 3.81561 13 4.00145 13Z"
        fill={props.color ? props.color : "#0E0E1A"}
      />
    </svg>
  );
};

export default VerticalArrow;