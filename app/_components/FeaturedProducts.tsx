"use client";

import Image from "next/image";
import { priceFormatter } from "app/_utils/formatter";

import type { Products } from "app/types";
import { usePathname, useRouter } from "next/navigation";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { getProducts } from "app/_api/products";
import { useEffect } from "react";

type Props = {
  featuredProducts: Products;
  showMoreBtnVisible?: boolean;
};

const PAGE_LIMIT = 10;

const FeaturedProducts = ({
  featuredProducts,
  showMoreBtnVisible = false,
}: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const queryClient = useQueryClient();

  const onProductCardClick = (id: number) => {
    router.push(`/products/${id}`);
  };

  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["featuredProducts"],
    queryFn: ({ pageParam }) => getProducts(pageParam * PAGE_LIMIT, PAGE_LIMIT),
    initialPageParam: 0,
    getNextPageParam: ({ skip, total }) => {
      const hasNextPage = skip + PAGE_LIMIT < total;
      return !hasNextPage ? null : skip / 10 + 1;
    },
    initialData: {
      pageParams: [],
      pages: [featuredProducts],
    },
  });

  const displayProducts = data.pages.map((page) => page.products).flat();

  // Reset the query when the user navigates to a product page to reset the pagination state.
  useEffect(() => {
    if (pathname.startsWith("/products")) {
      queryClient.resetQueries({ queryKey: ["featuredProducts"] });
    }
  }, [queryClient, pathname]);

  return (
    <>
      <div className="featured_products">
        {displayProducts.map((product) => {
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
      {showMoreBtnVisible && hasNextPage && (
        <button
          role="button"
          onClick={() => {
            fetchNextPage();
          }}
          className="mx-auto mt-6 rounded-md px-10 py-[15px] text-sm text-primary border border-primary font-bold"
        >
          {isLoading ? "LOADING..." : "LOAD MORE PRODUCTS"}
        </button>
      )}
    </>
  );
};

export default FeaturedProducts;
