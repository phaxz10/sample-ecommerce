"use client";

import Image from "next/image";
import { priceFormatter } from "app/_utils/formatter";

import type { Product } from "app/types";
import { useRouter } from "next/navigation";

type Props = {
  products: Product[];
};
const FeaturedProducts = ({ products }: Props) => {
  const router = useRouter();
  const onProductCardClick = (id: number) => {
    router.push(`/products/${id}`);
  };
  return (
    <div className="featured_products">
      {products.map((product) => {
        const origPrice =
          product.price * (product.discountPercentage / 100) + product.price;
        return (
          <div
            role="button"
            onClick={() => onProductCardClick(product.id)}
            className="featured_products__card"
            key={product.id}
          >
            <Image
              className="featured_products__card__image"
              src={product.thumbnail}
              alt={product.title}
              width={250}
              height={400}
            />

            <div className="featured_products__card__content">
              <h4 className="featured_products__card__content__name">
                {product.title}
              </h4>
              <p className="featured_products__card__content__description">
                {product.description}
              </p>

              <div className="featured_products__card__content__price">
                <span className="featured_products__card__content__price__original">
                  {priceFormatter(origPrice)}
                </span>
                <span className="featured_products__card__content__price__discounted">
                  {priceFormatter(product.price)}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedProducts;
