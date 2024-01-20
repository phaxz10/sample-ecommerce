"use client";

import { useEffect } from "react";
import Image from "next/image";
import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { cartAction } from "app/_redux/cartSlice";
import { useAppDispatch, useAppSelector } from "app/_redux/hooks";
import { priceFormatter } from "app/_utils/formatter";

const SlideCart = () => {
  const dispatch = useAppDispatch();
  const { isCartOpen, cartItems, total } = useAppSelector(
    (state) => state.cartReducer
  );
  const {
    increment,
    decrement,
    removeAllCartItems,
    removeItemFromCart,
    toggleIsCartOpen,
  } = cartAction;

  const hasCartItems = cartItems.length > 0;

  const totalItems = cartItems.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const subTotalPrice = cartItems.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);

  const closeCart = () => {
    dispatch(toggleIsCartOpen(false));
  };

  const onResetCart = () => {
    dispatch(removeAllCartItems());
  };

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCartOpen]);

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen z-50 bg-black/70 pb-10 ${
        !isCartOpen
          ? "opacity-0 pointer-events-none transition-opacity delay-300"
          : ""
      }`}
    >
      <div
        className={`p-6 w-full bg-white h-full md:max-w-screen-sm float-right transition-transform duration-300 ease-in-out ${
          isCartOpen ? "" : "translate-x-full"
        }`}
      >
        <div className="flex w-full flex-col gap-8">
          <XMarkIcon className="w-7 h-7 cursor-pointer" onClick={closeCart} />
          <div className="flex items-center justify-between gap-6">
            <h3 className="font-bold text-sm">Shopping Cart</h3>
            <button
              aria-label="remove all items"
              type="button"
              onClick={onResetCart}
              className="text-xs underline text-danger"
            >
              Remove all
            </button>
          </div>
          <div className="w-full border-b noScrollbar flex flex-col gap-4 h-[60vh] overflow-y-scroll p-2">
            {hasCartItems ? (
              cartItems.map((item) => {
                const canIncrease = item.quantity < item.stock;
                const canDecrease = item.quantity > 1;

                const onIncreaseQuantity = () => {
                  if (canIncrease) {
                    dispatch(increment(item));
                  }
                };

                const onDecreaseQuantity = () => {
                  if (canDecrease) {
                    dispatch(decrement(item));
                  }
                };

                const onRemoveItem = () => {
                  dispatch(removeItemFromCart(item));
                };
                return (
                  <div
                    className="flex flex-wrap w-full items-center justify-end gap-4"
                    key={item.id}
                  >
                    <Image
                      className="rounded-lg mx-auto object-cover object-center aspect-square w-[100px] h-[100px]"
                      src={item.thumbnail}
                      width={100}
                      height={100}
                      alt={item.title}
                    />

                    <div className="flex md:items-center flex-col md:flex-row gap-2 flex-1">
                      <div className="flex-1 grid">
                        <h3 className="w-full font-bold text-lg truncate">
                          {item.title}
                        </h3>
                        <p className="text-secondary-text text-xs">
                          {item.brand}
                        </p>
                      </div>

                      <div className="flex-1 max-w-max flex items-center justify-center gap-2">
                        <button
                          aria-label="decrease quantity"
                          className={`p-1 rounded-full ${
                            canDecrease ? "bg-secondary-text" : "bg-muted"
                          }`}
                          type="button"
                          onClick={onDecreaseQuantity}
                        >
                          <MinusIcon className="w-4 h-4 text-white" />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          aria-label="increase quantity"
                          className={`p-1 rounded-full ${
                            canIncrease ? "bg-secondary-text" : "bg-muted"
                          }`}
                          type="button"
                          onClick={onIncreaseQuantity}
                        >
                          <PlusIcon className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>

                    <div className="items-end px-4 w-[120px] min-w-[120px] flex flex-col gap-3">
                      <h2 className="text-lg font-bold">
                        {priceFormatter(item.price)}
                      </h2>
                      <button
                        aria-label="remove item"
                        className="underline text-danger text-xs"
                        type="button"
                        onClick={onRemoveItem}
                      >
                        Remove Item
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="w-full flex p-6">
                <h1 className="text-3xl text-center">No cart items</h1>
              </div>
            )}
          </div>

          <div className="self-end flex gap-10 items-center">
            <div>
              <h4 className="font-bold">Sub-Total</h4>
              <p className="text-xs text-muted">{totalItems} items</p>
            </div>

            <h2 className="font-bold text-xl">
              {priceFormatter(subTotalPrice)}
            </h2>
          </div>

          <button
            type="button"
            aria-label="checkout button"
            className="w-max self-end rounded-full font-bold text-xs py-[15px] px-[25px] text-white bg-primary cursor-not-allowed"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideCart;
