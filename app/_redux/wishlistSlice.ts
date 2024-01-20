"use client";

import { CaseReducer, PayloadAction, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import type { Product } from "app/types";

type State = {
  wishlist: Product[];
};

const initialState: State = {
  wishlist: [],
};

const addToWishlist: CaseReducer<State, PayloadAction<Product>> = (
  state,
  action
) => {
  const item = action.payload;
  const itemExists = state.wishlist.find((i) => i.id === item.id);
  if (itemExists) {
    toast.error("Item already in wishlist");
    return;
  } else {
    state.wishlist.push({ ...item });
    toast.success("Item added to wishlist");
  }
};

const removeFromWishlist: CaseReducer<State, PayloadAction<number>> = (
  state,
  action
) => {
  state.wishlist = state.wishlist.filter(({ id }) => id !== action.payload);
  toast.success("Item removed from wishlist");
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist,
    removeFromWishlist,
  },
});

export const wishlistAction = wishlistSlice.actions;

export default wishlistSlice.reducer;
