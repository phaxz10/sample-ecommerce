type Props = {
  className?: string;
};

const SearchIcon = ({ className }: Props) => {
  return (
    <svg
      className={`aspect-square h-4 w-4 ${className}`}
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icn settings icn-xs" clip-path="url(#clip0_540_804)">
        <path
          id="Vector"
          d="M11.7426 10.3441C12.7109 9.02279 13.1446 7.38459 12.9569 5.75725C12.7692 4.12991 11.974 2.63344 10.7304 1.56723C9.48671 0.501022 7.88634 -0.0562959 6.24943 0.00677721C4.61252 0.0698504 3.05978 0.748663 1.90186 1.90741C0.743944 3.06615 0.0662432 4.61938 0.00434136 6.25633C-0.0575605 7.89329 0.500902 9.49326 1.568 10.7361C2.6351 11.979 4.13214 12.7732 5.75961 12.9597C7.38709 13.1462 9.02497 12.7113 10.3456 11.7421H10.3446C10.3746 11.7821 10.4066 11.8201 10.4426 11.8571L14.2926 15.7071C14.4801 15.8947 14.7345 16.0002 14.9997 16.0003C15.265 16.0004 15.5195 15.8951 15.7071 15.7076C15.8947 15.5201 16.0002 15.2657 16.0003 15.0005C16.0004 14.7352 15.8951 14.4807 15.7076 14.2931L11.8576 10.4431C11.8218 10.4069 11.7834 10.3735 11.7426 10.3431V10.3441ZM12.0006 6.5001C12.0006 7.22237 11.8583 7.93757 11.5819 8.60486C11.3055 9.27215 10.9004 9.87847 10.3897 10.3892C9.87896 10.8999 9.27264 11.305 8.60535 11.5814C7.93806 11.8578 7.22286 12.0001 6.50059 12.0001C5.77832 12.0001 5.06312 11.8578 4.39583 11.5814C3.72854 11.305 3.12223 10.8999 2.61151 10.3892C2.10078 9.87847 1.69566 9.27215 1.41926 8.60486C1.14285 7.93757 1.00059 7.22237 1.00059 6.5001C1.00059 5.04141 1.58006 3.64246 2.61151 2.61101C3.64296 1.57956 5.0419 1.0001 6.50059 1.0001C7.95928 1.0001 9.35823 1.57956 10.3897 2.61101C11.4211 3.64246 12.0006 5.04141 12.0006 6.5001Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_540_804">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(-0.000305176)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SearchIcon;
