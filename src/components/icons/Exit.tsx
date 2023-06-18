import { SVGProps } from "react";

interface Props {
  svg?: SVGProps<SVGSVGElement>;
  w: number;
  h: number;
}

const Exit = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.w}
    height={props.h}
    fill="none"
    {...props}
  >
    <path
      fill="#0050C8"
      d="M.311 11.687c.425.417 1.154.406 1.549.01L6 7.558l4.134 4.137c.41.41 1.124.41 1.545-.01.42-.425.424-1.132.014-1.546L7.56 5.997l4.135-4.134c.41-.41.41-1.12-.015-1.542-.424-.424-1.135-.427-1.545-.014L6.001 4.44 1.86.303C1.465-.092.732-.11.31.318c-.417.424-.406 1.146-.01 1.541l4.14 4.138-4.14 4.149c-.396.391-.41 1.12.01 1.54z"
    ></path>
  </svg>
);
export default Exit;
