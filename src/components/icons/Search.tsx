import { SVGProps } from "react";

interface Props {
  svg?: SVGProps<SVGSVGElement>;
  w: number;
  h: number;
}

const Search = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.w}
    height={props.h}
    fill="none"
    {...props}
  >
    <path
      fill="#0E0E1A"
      d="M0 6.126c0 3.382 2.773 6.128 6.184 6.128a6.07 6.07 0 0 0 3.404-1.038l3.49 3.464c.219.217.508.32.813.32.647 0 1.109-.484 1.109-1.117 0-.298-.11-.576-.32-.783L11.218 9.65a5.927 5.927 0 0 0 1.152-3.523C12.369 2.746 9.596 0 6.184 0 2.774 0 0 2.746 0 6.126Zm1.611 0c0-2.5 2.05-4.53 4.573-4.53 2.524 0 4.573 2.03 4.573 4.53 0 2.502-2.05 4.532-4.573 4.532-2.523 0-4.573-2.03-4.573-4.532Z"
    />
  </svg>
);
export default Search;
