import { SVGProps } from "react";

interface Props {
  svg?: SVGProps<SVGSVGElement>;
  w: number;
  h: number;
  color?: string;
}

const DataCenter = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.w}
      height={props.h}
      fill="none"
      {...props}
    >
      <path
        d="M1.88956 15.0001H15.1104C16.363 15.0001 17 14.3676 17 13.0753V10.028C17 8.74857 16.363 8.10962 15.1104 8.10962H1.88956C0.635602 8.10962 0 8.74857 0 10.028V13.0753C0 14.3676 0.635602 15.0001 1.88956 15.0001Z"
        fill={props.color ? props.color : "#0E0E1A"}
      />
      <path
        d="M1.88956 6.89042H15.1104C16.363 6.89042 17 6.2515 17 4.95927V1.91832C17 0.633913 16.363 0 15.1104 0H1.88956C0.635602 0 0 0.633913 0 1.91832V4.95927C0 6.2515 0.635602 6.89042 1.88956 6.89042Z"
        fill={props.color ? props.color : "#0E0E1A"}
      />
    </svg>
  );
};

export default DataCenter;
