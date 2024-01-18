type Props = {
  className?: string;
};

const BookReaderIcon = ({ className }: Props) => {
  return (
    <svg
      className={`aspect-square h-[72px] w-[72px] ${className}`}
      width="100%"
      height="100%"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="bx:bxs-book-reader">
        <path
          id="Vector"
          d="M6 24V58.587C6 58.587 19.863 58.071 36 66C52.137 58.071 66 58.587 66 58.587V24C66 24 49.638 24 36 31.413C22.362 24 6 24 6 24Z"
          fill="currentColor"
        />
        <path
          id="Vector_2"
          d="M36 24C40.9706 24 45 19.9706 45 15C45 10.0294 40.9706 6 36 6C31.0294 6 27 10.0294 27 15C27 19.9706 31.0294 24 36 24Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default BookReaderIcon;
