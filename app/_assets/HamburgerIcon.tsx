type Props = {
  className?: string;
};

const HamburgerIcon = ({ className }: Props) => {
  return (
    <svg
      className={`aspect-square h-4 w-4 ${className}`}
      width="100%"
      height="100%"
      viewBox="0 0 24 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icn menu .icn-xs">
        <path
          id="Vector"
          d="M0.571472 0H23.4286V2.28571H0.571472V0ZM6.28576 5.71429H23.4286V8H6.28576V5.71429ZM13.4286 11.4286H23.4286V13.7143H13.4286V11.4286Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default HamburgerIcon;
