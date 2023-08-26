import { SVGProps } from "react";

interface Props {
  svg?: SVGProps<SVGSVGElement>;
  w: number;
  h: number;
}

const Visited = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.w}
    height={props.h}
    fill="none"
    {...props}
  >
    <path
      d="M2.4375 0C1.0918 0 0 1.0638 0 2.375C0 3.12214 0.360547 3.82474 0.975 4.275L12.025 12.35C12.6039 12.7706 13.3961 12.7706 13.975 12.35L25.025 4.275C25.6395 3.82474 26 3.12214 26 2.375C26 1.0638 24.9082 0 23.5625 0H2.4375ZM4.77005 9.02747C2.7879 7.57898 0 8.99464 0 11.4496V15.8333C0 17.5799 1.45742 19 3.25 19H22.75C24.5426 19 26 17.5799 26 15.8333V11.4496C26 8.99464 23.2121 7.57898 21.2299 9.02747L14.95 13.6167C13.7922 14.4628 12.2078 14.4628 11.05 13.6167L4.77005 9.02747Z"
      fill="white"
    />
  </svg>
);
export default Visited;
