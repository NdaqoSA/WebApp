import { SVGProps } from "react";

interface Props {
  svg?: SVGProps<SVGSVGElement>;
  w: number;
  h: number;
  color?: string;
}

const ChevronDown = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.w}
      height={props.h}
      fill="none"
      {...props}
    >
      <path
        d="M6.00334 7C6.2764 6.99788 6.51125 6.89487 6.7224 6.67867L11.7412 1.5315C11.912 1.36049 12 1.15393 12 0.908201C12 0.403372 11.6016 0 11.1037 0C10.8583 0 10.6283 0.0987182 10.449 0.280048L5.70227 5.16695H6.30836L1.55314 0.280048C1.37626 0.102968 1.1484 0 0.896269 0C0.396246 0 0 0.403372 0 0.908201C0 1.15181 0.0901157 1.35836 0.256686 1.53605L5.27974 6.67867C5.5 6.89919 5.72786 7 6.00334 7Z"
        fill={props.color ? props.color : "#0E0E1A"}
      />
    </svg>
  );
};

export default ChevronDown;
