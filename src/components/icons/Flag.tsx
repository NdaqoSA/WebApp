import { SVGProps } from "react";

interface Props {
  svg?: SVGProps<SVGSVGElement>;
  w: number;
  h: number;
  color?: string;
}

const Flag = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.w}
      height={props.h}
      fill="none"
      {...props}
    >
      <path
        d="M15 7.49987C15 11.6416 11.6415 15.0001 7.49991 15.0001C6.06683 15.0001 4.72668 14.598 3.58716 13.9003L14.2155 4.15747C14.7175 5.1625 15 6.29882 15 7.49987Z"
        fill="#DB1332"
      />
      <path
        d="M14.2153 4.15582L3.58699 13.9001C2.38922 13.166 1.41334 12.1055 0.78418 10.8434L11.4125 1.09912C12.6103 1.83325 13.5861 2.89375 14.2153 4.15582Z"
        fill="#FBDF49"
      />
      <path
        d="M11.4128 1.09931L0.784491 10.8436C0.282916 9.83716 0 8.7013 0 7.49979C0 3.35809 3.35847 -0.000488281 7.50005 -0.000488281C8.93497 -0.000488281 10.2737 0.401709 11.4128 1.09931Z"
        fill="#009641"
      />
    </svg>
  );
};

export default Flag;
