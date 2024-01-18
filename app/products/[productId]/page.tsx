import Image from "next/image";
import type { Product } from "./types";
import { BasketIcon, ChevronRightIcon, EyeIcon, HeartIcon } from "@assets";
import Rating from "./Rating";

const getProductDetail = async (productId: string) => {
  const result = await fetch(`https://dummyjson.com/products/${productId}`);

  if (!result.ok) {
    throw new Error("Something went wrong...");
  }

  const productJson: Awaited<Product> = await result.json();

  return productJson;
};

const ProductDetailsPage = async ({
  params,
}: {
  params: {
    productId: string;
  };
}) => {
  const product = await getProductDetail(params.productId);

  console.log(product);

  const isInStock = product.stock > 0;
  return (
    <div>
      {/* Breadcrumb */}
      <div className="py-6">
        <div className="container px-6 xl:px-0">
          <div className="flex item-center gap-[15px] py-[10px]">
            <span className="text-sm font-bold">Home</span>
            <ChevronRightIcon className="w-3 h-3 text-muted" />
            <span className="text-sm font-bold text-muted">Shop</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="container pb-12">
        <div className="grid md:grid-cols-2 gap-[30px]">
          <div></div>
          <div className="p-6 pt-[11px] md:min-h-[471px] flex flex-col justify-between">
            <div>
              <h3 className="text-xl pb-3">{product.title}</h3>

              <div className="flex items-center gap-[10px]">
                <Rating rating={product.rating} />
                <span className="text-secondary-text text-sm font-bold">
                  10 Reviews
                </span>
              </div>
              <h2 className="pt-[22px] text-2xl font-bold pb-[5px]">
                {priceFormatter(product.price)}
              </h2>
              <p className="text-sm font-bold text-secondary-text">
                Availability :{" "}
                <span
                  className={isInStock ? "text-primary" : "text-secondary-text"}
                >
                  {isInStock ? "In Stock" : "Out of Stock"}
                </span>
              </p>

              <p className="md:hidden text-sm text-secondary-text pt-8 pb-4">
                {product.description}
              </p>
            </div>

            <div>
              <hr />

              <div className="flex items-center gap-[10px] pt-[29px] pb-[67px]">
                <div className="p-[15px] rounded-full cursor-not-allowed bg-primary" />
                <div className="p-[15px] rounded-full cursor-not-allowed bg-success" />
                <div className="p-[15px] rounded-full cursor-not-allowed bg-alert" />
                <div className="p-[15px] rounded-full cursor-not-allowed bg-primary-text" />
              </div>

              <div className="flex items-center gap-[10px]">
                <button
                  type="button"
                  className="text-white py-[10px] px-5 text-sm font-bold rounded-md bg-primary"
                >
                  Select Options
                </button>

                <button
                  type="button"
                  className="relative p-[20px] rounded-full bg-white border"
                >
                  <HeartIcon className="w-5 h-5 absolute top-0 left-0 translate-x-1/2 translate-y-1/2" />
                </button>

                <button
                  type="button"
                  className="relative p-[20px] rounded-full bg-white border"
                >
                  <BasketIcon className="w-5 h-5 absolute top-0 left-0 translate-x-1/2 translate-y-1/2" />
                </button>

                <button
                  type="button"
                  className="relative p-[20px] rounded-full bg-white border"
                >
                  <EyeIcon className="w-5 h-5 absolute top-0 left-0 translate-x-1/2 translate-y-1/2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Additional Details */}
      <section className="hidden lg:block">
        <div className="container px-6 xl:px-0 py-[10px] ">
          <div className="flex items-center justify-center">
            <button
              type="button"
              className="text-sm w-max p-6 font-bold text-secondary-text"
            >
              Description
            </button>
            <button type="button" className="text-sm w-max p-6 font-bold">
              Additional Information
            </button>
            <button type="button" className="text-sm w-max p-6 font-bold">
              Reviews <span className="text-bg-green">(0)</span>
            </button>
          </div>
          <hr />
        </div>

        <div className="container px-6 xl:px-0 pt-6 pb-12 flex items-start gap-[30px]">
          <div className="flex flex-col gap-[30px] pb-[25px] flex-1">
            <h3 className="font-bold text-2xl">{product.title}</h3>

            <p>{product.description}</p>
          </div>

          <Image
            alt="desc thumbnail"
            src={product.thumbnail}
            width={500}
            height={500}
            className="rounded-md flex-1 aspect-square object-cover object-center w-full max-h-[372px] max-w-[427px]"
          ></Image>
        </div>
      </section>

      {/* Brands */}
      <section className="container">
        <div className="py-[50px] flex flex-col md:flex-row items-center justify-center flex-wrap gap-[30px]">
          <Image
            width={200}
            height={200}
            className="w-full max-w-[103px] object-contain"
            src="/images/fa-brands-1.png"
            alt="brand1"
          />

          <Image
            width={200}
            height={200}
            className="w-full max-w-[103px] object-contain"
            src="/images/fa-brands-2.png"
            alt="brand2"
          />

          <Image
            width={200}
            height={200}
            className="w-full max-w-[103px] object-contain"
            src="/images/fa-brands-3.png"
            alt="brand3"
          />

          <Image
            width={200}
            height={200}
            className="w-full max-w-[103px] object-contain"
            src="/images/fa-brands-4.png"
            alt="brand4"
          />

          <Image
            width={200}
            height={200}
            className="w-full max-w-[103px] object-contain"
            src="/images/fa-brands-5.png"
            alt="brand5"
          />

          <Image
            width={200}
            height={200}
            className="w-full max-w-[103px] object-contain"
            src="/images/fa-brands-6.png"
            alt="brand6"
          />
        </div>
      </section>
    </div>
  );
};

export default ProductDetailsPage;

const priceFormatter = (price: number) => {
  const { format } = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });

  return format(price);
};
