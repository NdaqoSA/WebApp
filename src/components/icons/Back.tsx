import { SVGProps } from "react";

interface Props {
  svg?: SVGProps<SVGSVGElement>;
  w: number;
  h: number;
}

const Back = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.w}
    height={props.h}
    fill="none"
    {...props}
  >
    <path
      fill="#0050C8"
      d="M0 6.002c0 .295.14.598.366.8L5.72 11.66c.246.224.538.34.83.34.698 0 1.175-.441 1.175-1.028 0-.325-.156-.583-.374-.773L5.51 8.52 2.79 6.252l-.505.677 3.192.157h9.29c.74 0 1.233-.438 1.233-1.084 0-.647-.493-1.084-1.233-1.084h-9.29l-3.192.157.505.684 2.72-2.276 1.84-1.682c.219-.198.375-.448.375-.773C7.725.44 7.248 0 6.55 0c-.292 0-.584.112-.839.348L.366 5.202a1.1 1.1 0 00-.366.8z"
    ></path>
  </svg>
);
export default Back;
