"use client";

import {
  type CaseReducer,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import toast from "react-hot-toast";

type State = {
  cartItems: {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    quantity: number;
  }[];
  total: number;
  isCartOpen: boolean;
};

const initialState: State = {
  cartItems: [],
  total: 0,
  isCartOpen: false,
};

const addToCart: CaseReducer<
  State,
  PayloadAction<{
    id: number;
    title: string;
    price: number;
    thumbnail: string;
  }>
> = (state, action) => {
  const item = action.payload;
  const itemExists = state.cartItems.find((i) => i.id === item.id);
  if (itemExists) {
    state.cartItems.map((i) => {
      if (i.id === item.id) {
        i.quantity += 1;
      }
    });
  } else {
    state.cartItems.push({ ...item, quantity: 1 });
  }
  state.total += item.price;
  toast.success("Item added to cart");
};

const removeFromCart: CaseReducer<
  State,
  PayloadAction<{
    id: number;
    title: string;
    price: number;
    thumbnail: string;
  }>
> = (state, action) => {
  const item = action.payload;
  const itemExists = state.cartItems.find((i) => i.id === item.id);
  if (itemExists) {
    state.cartItems.map((i) => {
      if (i.id === item.id) {
        i.quantity -= 1;
      }
    });
  } else {
    state.cartItems.push({ ...item, quantity: 1 });
  }
  state.total -= item.price;
  toast.success("Item removed from cart");
};

const toggleIsCartOpen: CaseReducer<
  State,
  PayloadAction<boolean | undefined>
> = (state, actions) => {
  state.isCartOpen =
    actions.payload === undefined ? !state.isCartOpen : actions.payload;
};

const removeItemFromCart: CaseReducer<
  State,
  PayloadAction<{
    id: number;
  }>
> = (state, action) => {
  const { id } = action.payload;

  const combinedItemTotal = state.cartItems.reduce((acc, item) => {
    if (item.id === id) {
      acc += item.price * item.quantity;
    }

    return acc;
  }, 0);

  state.total -= combinedItemTotal;

  state.cartItems = state.cartItems.filter((item) => item.id !== id);
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart,
    removeFromCart,
    removeItemFromCart,
    toggleIsCartOpen,
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;
