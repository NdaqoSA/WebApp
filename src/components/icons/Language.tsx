import { SVGProps } from "react";

interface Props {
  svg?: SVGProps<SVGSVGElement>;
  w: number;
  h: number;
}

const Language = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.w}
    height={props.h}
    fill="none"
    {...props}
  >
    <path d="M7.015 8.202a.587.587 0 0 0-.139-.63L5.618 6.336l.018-.018A10.502 10.502 0 0 0 7.87 2.4h1.168a.6.6 0 0 0 .596-.594v-.012a.6.6 0 0 0-.596-.594H5.419V.6a.603.603 0 0 0-1.204 0v.6H.596A.6.6 0 0 0 0 1.794c0 .33.271.594.596.594h6.13A9.39 9.39 0 0 1 4.817 5.61a9.29 9.29 0 0 1-1.24-1.728.533.533 0 0 0-.47-.282c-.415 0-.68.45-.476.81.38.678.843 1.326 1.385 1.926L1.385 8.922a.593.593 0 0 0 0 .852.608.608 0 0 0 .855 0L4.817 7.2l1.216 1.212a.6.6 0 0 0 .982-.21ZM9.935 4.8a.864.864 0 0 0-.813.564l-2.21 5.88a.556.556 0 0 0 .524.756.566.566 0 0 0 .53-.366l.536-1.434h2.86l.542 1.434a.574.574 0 0 0 .53.366c.391 0 .668-.39.53-.756l-2.21-5.88a.878.878 0 0 0-.819-.564ZM8.96 9l.975-2.598L10.911 9H8.96Z" />
  </svg>
);
export default Language;