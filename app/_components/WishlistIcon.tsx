"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { HeartIcon } from "@assets";
import { useAppSelector } from "app/_redux/hooks";

type Props = {
  className?: string;
};

const WishlistIcon = ({ className }: Props) => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const wishlistItemCount = useAppSelector(
    (state) => state.wishlistReducer.wishlist
  ).length;

  const onBasketClick = () => {
    router.push("/wishlist");
  };

  const displayCount = wishlistItemCount > 99 ? "99+" : wishlistItemCount;

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <button
        aria-label="goto wishlist button"
        className="relative"
        type="button"
        onClick={onBasketClick}
      >
        <HeartIcon className={className} />
      </button>
      {!isClient ? null : <span>{displayCount}</span>}
    </>
  );
};

export default WishlistIcon;
