"use client";

import { useEffect, useState } from "react";
import { HeartIcon } from "@assets";
import { Product } from "./types";
import { useAppDispatch, useAppSelector } from "app/_redux/hooks";
import { wishlistAction } from "app/_redux/wishlistSlice";

type Props = {
  item: Pick<Product, "id" | "title" | "thumbnail">;
};

const AddToWishlistBtn = ({ item }: Props) => {
  const [hasMounted, setHasMounted] = useState(false);
  const dispatch = useAppDispatch();
  const isInWatchlist = useAppSelector((state) =>
    state.wishlistReducer.wishlist.find((i) => i.id === item.id)
  );
  const onToggleItemToWishlist = () => {
    if (!isInWatchlist) {
      dispatch(wishlistAction.addToWishlist(item));
    } else {
      dispatch(wishlistAction.removeFromWishlist(item.id));
    }
  };

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <button
      type="button"
      className="relative p-[20px] rounded-full bg-white border"
      onClick={onToggleItemToWishlist}
    >
      <HeartIcon
        className={`${
          isInWatchlist && hasMounted ? "text-red-500" : ""
        } w-5 h-5 absolute top-0 left-0 translate-x-1/2 translate-y-1/2`}
      />
    </button>
  );
};

export default AddToWishlistBtn;
