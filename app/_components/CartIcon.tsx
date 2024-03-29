"use client";

import { useEffect, useState } from "react";
import { BasketIcon } from "@assets";
import { cartAction } from "app/_redux/cartSlice";
import { useAppDispatch, useAppSelector } from "app/_redux/hooks";

type Props = {
  isMobile?: boolean;
  className?: string;
};

const CartIcon = ({ isMobile, className }: Props) => {
  const [isClient, setIsClient] = useState(false);
  const cartItemCount = useAppSelector(
    (state) => state.cartReducer.cartItems
  ).reduce((acc, item) => acc + item.quantity, 0);

  const dispatch = useAppDispatch();

  const onBasketClick = () => {
    dispatch(cartAction.toggleIsCartOpen());
  };

  const displayCount = cartItemCount > 99 ? "99+" : cartItemCount;

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <button
        aria-label="toggle cart button"
        className="relative"
        type="button"
        onClick={onBasketClick}
      >
        <BasketIcon className={className} />
        {isMobile && cartItemCount > 0 && isClient && (
          <span className="absolute -top-2 -right-2 p-2 rounded-full bg-danger">
            <span className="text-white text-[10px] absolute top-0 left-0 w-full h-full">
              {displayCount}
            </span>
          </span>
        )}
      </button>
      {isMobile || !isClient ? null : <span>{displayCount}</span>}
    </>
  );
};

export default CartIcon;
