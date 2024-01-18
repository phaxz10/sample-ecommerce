type Props = {
  className?: string;
};

const ChevronDownIcon = ({ className }: Props) => {
  return (
    <svg
      className={`aspect-square h-4 w-4 ${className}`}
      width="100%"
      height="100%"
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M1.42857 0.5L5 4.07143L8.57143 0.5L10 1.21429L5 6.21429L-3.12224e-08 1.21429L1.42857 0.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ChevronDownIcon;
