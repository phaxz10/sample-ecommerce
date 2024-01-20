"use client";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "app/_redux/hooks";
import { wishlistAction } from "app/_redux/wishlistSlice";
import Image from "next/image";
import { priceFormatter } from "app/_utils/formatter";
import { Rating } from "@components";
import { TrashIcon } from "@heroicons/react/24/outline";
import { cartAction } from "app/_redux/cartSlice";

const WhishlistPage = () => {
  const [isClient, setIsClient] = useState(false);
  const { wishlist } = useAppSelector((state) => state.wishlistReducer);
  const dispatch = useAppDispatch();
  const { removeFromWishlist } = wishlistAction;
  const { addToCart } = cartAction;

  const totalItems = wishlist.length;

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="py-20">
      <div className="container px-6 flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">My Wishlist</h2>
          <span className="text-muted text-sm">
            ({isClient ? totalItems : 0} items)
          </span>
        </div>

        {isClient ? (
          <div className="grid gap-3">
            {totalItems > 0 ? (
              <>
                {wishlist.map((item) => {
                  const onRemoveItemClick = () => {
                    dispatch(removeFromWishlist(item.id));
                  };

                  const onAddToCartClick = () => {
                    dispatch(addToCart({ ...item, quantity: 1 }));
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
                          <Rating rating={item.rating} />
                        </div>
                      </div>

                      <div className="relative h-max justify-center items-end px-4 w-max flex flex-col gap-3">
                        <h2 className="text-lg font-bold">
                          {priceFormatter(item.price)}
                        </h2>
                        <button
                          aria-label="remove from wishlist"
                          className="text-danger text-xs absolute -top-2 -right-2"
                          type="button"
                          onClick={onRemoveItemClick}
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>

                        <button
                          aria-label="add to cart"
                          className="text-white text-xs font-bold w-max py-[15px] px-7 rounded-md bg-primary"
                          type="button"
                          onClick={onAddToCartClick}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <div>Nothing on wishlist</div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default WhishlistPage;
