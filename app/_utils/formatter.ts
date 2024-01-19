export const priceFormatter = (price: number) => {
  const { format } = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });

  return format(price);
};
