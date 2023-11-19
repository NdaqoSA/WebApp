import { SVGProps } from "react";

interface Props {
  svg?: SVGProps<SVGSVGElement>;
  w: number;
  h: number;
  color?: string;
}

const Location = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.w}
      height={props.h}
      fill="none"
      {...props}
    >
      <path
        d="M6.17891 14.6629C7.64844 12.7772 11 8.20679 11 5.63959C11 2.52607 8.53646 0 5.5 0C2.46354 0 0 2.52607 0 5.63959C0 8.20679 3.35156 12.7772 4.82109 14.6629C5.17344 15.1124 5.82656 15.1124 6.17891 14.6629ZM5.5 3.75973C5.98623 3.75973 6.45255 3.95779 6.79636 4.31033C7.14018 4.66287 7.33333 5.14102 7.33333 5.63959C7.33333 6.13817 7.14018 6.61632 6.79636 6.96886C6.45255 7.3214 5.98623 7.51946 5.5 7.51946C5.01377 7.51946 4.54745 7.3214 4.20364 6.96886C3.85982 6.61632 3.66667 6.13817 3.66667 5.63959C3.66667 5.14102 3.85982 4.66287 4.20364 4.31033C4.54745 3.95779 5.01377 3.75973 5.5 3.75973Z"
        fill={props.color ? props.color : "#0E0E1A"}
      />
    </svg>
  );
};

export default Location;
