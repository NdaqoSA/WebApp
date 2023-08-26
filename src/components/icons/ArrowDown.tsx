import { SVGProps } from "react";

interface Props {
  svg?: SVGProps<SVGSVGElement>;
  w: number;
  h: number;
}

const ArrowDown = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.w}
    height={props.h}
    fill="none"
    {...props}
  >
    <path
      d="M6.50362 8C6.79943 7.99757 7.05385 7.87986 7.2826 7.63276L12.7196 1.75028C12.9047 1.55484 13 1.31878 13 1.03794C13 0.460997 12.5684 0 12.029 0C11.7632 0 11.514 0.112821 11.3198 0.320055L6.17746 5.90509H6.83406L1.68257 0.320055C1.49095 0.117678 1.2441 0 0.970958 0C0.429266 0 0 0.460997 0 1.03794C0 1.31636 0.0976253 1.55241 0.278077 1.75549L5.71971 7.63276C5.95833 7.88478 6.20518 8 6.50362 8Z"
      fill="#0E0E1A"
      fill-opacity="0.8"
    />
  </svg>
);
export default ArrowDown;
