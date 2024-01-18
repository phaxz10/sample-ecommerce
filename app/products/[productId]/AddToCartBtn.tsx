"use client";

import { BasketIcon } from "@assets";
import { Product } from "./types";
import { useAppDispatch } from "app/_redux/hooks";
import { cartAction } from "app/_redux/cartSlice";

type Props = {
  item: Pick<Product, "id" | "title" | "price" | "thumbnail">;
};

const AddToCartBtn = ({ item }: Props) => {
  const dispatch = useAppDispatch();
  const onAddToCartClick = () => {
    console.log("clicked", item);
    dispatch(cartAction.addToCart(item));
  };
  return (
    <button
      type="button"
      className="relative p-[20px] rounded-full bg-white border"
      onClick={onAddToCartClick}
    >
      <BasketIcon className="w-5 h-5 absolute top-0 left-0 translate-x-1/2 translate-y-1/2" />
    </button>
  );
};

export default AddToCartBtn;