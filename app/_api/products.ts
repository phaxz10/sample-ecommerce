import type { Product, Products } from "app/types";

export const getProductById = async (productId: string) => {
  const result = await fetch(`https://dummyjson.com/products/${productId}`);

  if (!result.ok) {
    throw new Error("Something went wrong...");
  }

  const productJson: Awaited<Product> = await result.json();

  return productJson;
};

export const getProducts = async (skip = 0, limit = 10) => {
  const result = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );

  if (!result.ok) {
    throw new Error("Something went wrong...");
  }

  const productJson: Awaited<Products> = await result.json();

  return productJson;
};
