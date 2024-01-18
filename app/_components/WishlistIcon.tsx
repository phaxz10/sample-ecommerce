"use client";

import { HeartIcon } from "@assets";
import { useAppSelector } from "app/_redux/hooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  className?: string;
};

const WishlistIcon = ({ className }: Props) => {
  const router = useRouter();
  const [hasMounted, setHasMounted] = useState(false);
  const wishlistItemCount = useAppSelector(
    (state) => state.wishlistReducer.wishlist
  ).length;

  const onBasketClick = () => {
    router.push("/wishlist");
  };

  const displayCount = wishlistItemCount > 99 ? "99+" : wishlistItemCount;

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <>
      <button className="relative" type="button" onClick={onBasketClick}>
        <HeartIcon className={className} />
      </button>
      {!hasMounted ? null : <span>{displayCount}</span>}
    </>
  );
};

export default WishlistIcon;
