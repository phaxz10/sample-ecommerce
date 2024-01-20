"use client";

import { BasketIcon } from "@assets";
import { useAppDispatch } from "app/_redux/hooks";
import { cartAction } from "app/_redux/cartSlice";

import type { Product } from "app/types";

type Props = {
  item: Product;
};

const AddToCartBtn = ({ item }: Props) => {
  const dispatch = useAppDispatch();
  const onAddToCartClick = () => {
    dispatch(cartAction.addToCart({ ...item, quantity: 1 }));
  };
  return (
    <button
      aria-label="add to cart button"
      type="button"
      className="relative p-[20px] rounded-full bg-white border"
      onClick={onAddToCartClick}
    >
      <BasketIcon className="w-5 h-5 absolute top-0 left-0 translate-x-1/2 translate-y-1/2" />
    </button>
  );
};

export default AddToCartBtn;
