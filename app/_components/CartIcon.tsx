"use client";

import { BasketIcon } from "@assets";
import { cartAction } from "app/_redux/cartSlice";
import { useAppDispatch, useAppSelector } from "app/_redux/hooks";

type Props = {
  hideCount?: boolean;
  className?: string;
};

const CartIcon = ({ hideCount, className }: Props) => {
  const cartItemCount = useAppSelector(
    (state) => state.cartReducer.cartItems
  )?.length;

  const isCartOpen = useAppSelector((state) => state.cartReducer.isCartOpen);
  const dispatch = useAppDispatch();

  const onBasketClick = () => {
    dispatch(cartAction.toggleIsCartOpen());
  };

  console.log(isCartOpen);

  return (
    <>
      <button type="button" onClick={onBasketClick}>
        <BasketIcon className={className} />
      </button>
      {hideCount ? null : <span>{cartItemCount}</span>}
    </>
  );
};

export default CartIcon;
