import Image from "next/image";
import { ShopCardsContainer } from "@containers";
import { BlogCard, FeaturedProducts, ShopCard } from "@components";
import { BookReaderIcon, BookIcon, GrowthArrowIcon } from "@assets";
import { getProducts } from "./_api/products";

export default async function Home() {
  const featuredProducts = await getProducts();
  return (
    <main className="">
      <ShopCardsContainer>
        <ShopCard
          isFirst
          bgImage="/images/card-cover-5.jpg"
          link="/"
          heading="5 items"
          title="FURNITURE"
        />
        <ShopCard
          bgImage="/images/card-cover-6.jpg"
          link="/"
          heading="5 items"
          title="FURNITURE"
        />
        <ShopCard
          bgImage="/images/card-cover-7.jpg"
          link="/"
          heading="5 items"
          title="FURNITURE"
        />
        <ShopCard
          bgImage="/images/card-cover-8.jpg"
          link="/"
          heading="5 items"
          title="FURNITURE"
        />
      </ShopCardsContainer>

      {/* Featured Products */}
      <section className="featured_products_container">
        <div className="featured_products_container__content">
          <div className="featured_products_container__content__heading">
            <h4 className="featured_products_container__content__heading__subtitle">
              Featured Products
            </h4>
            <h3 className="featured_products_container__content__heading__title">
              BESTSELLER PRODUCTS
            </h3>
            <p className="featured_products_container__content__heading__text">
              Problems trying to resolve the conflict between
            </p>
          </div>

          <FeaturedProducts
            showMoreBtnVisible
            featuredProducts={featuredProducts}
          />
        </div>
      </section>

      {/* Features */}
      <section className="container features">
        <div className="features__container">
          <div className="features__container__heading">
            <h4 className="features__container__heading__subtitle">
              Featured Products
            </h4>
            <h3 className="features__container__heading__title">
              THE BEST SERVICES
            </h3>
            <p className="features__container__heading__text">
              Problems trying to resolve the conflict between
            </p>
          </div>

          <div className="features__container__content">
            <div className="features__container__content__card">
              <BookReaderIcon className="text-primary" />

              <h3 className="features__container__content__card__title">
                Easy Wins
              </h3>

              <p className="features__container__content__card__text">
                Defalcate is most focused in helping you discover your most
                beautiful smile
              </p>
            </div>

            <div className="features__container__content__card">
              <BookIcon className="text-primary" />

              <h3 className="features__container__content__card__title">
                Concrete
              </h3>

              <p className="features__container__content__card__text">
                Overcame any hurdle or any other problem.
              </p>
            </div>

            <div className="features__container__content__card">
              <GrowthArrowIcon className="text-primary" />

              <h3 className="features__container__content__card__title">
                Hack Growth
              </h3>

              <p className="features__container__content__card__text">
                Get your best looking smile now!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="blog">
        <div className="blog__heading">
          <h4 className="blog__heading__subtitle">Practice Advice</h4>
          <h1 className="blog__heading__title">Featured Posts</h1>
        </div>

        <div className="blog_cards_container">
          <BlogCard
            isNew
            heading="Loudest à la Madison #1 (L'integral)"
            tags={["Google", "Trending", "New"]}
            shortDescription="We focus on ergonomics and meeting you where you work. It's only
                a keystroke away."
            image="/images/blog1.jpg"
            publishedAt={new Date()}
            link="/"
            comments={10}
          />

          <BlogCard
            isNew
            heading="Loudest à la Madison #1 (L'integral)"
            tags={["Google", "Trending", "New"]}
            shortDescription="We focus on ergonomics and meeting you where you work. It's only
                a keystroke away."
            image="/images/blog2.jpg"
            publishedAt={new Date()}
            link="/"
            comments={10}
          />

          <BlogCard
            isNew
            heading="Loudest à la Madison #1 (L'integral)"
            tags={["Google", "Trending", "New"]}
            shortDescription="We focus on ergonomics and meeting you where you work. It's only
                a keystroke away."
            image="/images/blog3.jpg"
            publishedAt={new Date()}
            link="/"
            comments={10}
          />
        </div>
      </section>

      {/* testimonials */}
      <section className="container py-20">
        <div className="flex items-center gap-[37px] flex-col md:flex-row justify-between px-7 md:px-12 py-12">
          <div className="flex flex-col gap-7 w-full md:max-w-[438px]">
            <h2 className="px-6 font-bold text-center text-2xl">
              What they say about us
            </h2>

            <div className="px-[35px] py-[30px] flex flex-col items-center gap-5">
              <Image
                className="rounded-full aspect-square"
                src="/images/testimonial/user.jpg"
                width={90}
                height={90}
                alt="user avatar"
              />

              <Image
                className=""
                src="/images/testimonial/stars.png"
                width={130}
                height={22}
                alt="stars"
              />

              <p className="text-secondary-text text-sm font-bold text-center">
                Slate helps you see how many more days you need to work to reach
                your financial goal.
              </p>

              <div className="flex flex-col items-center">
                <p className="text-primary text-sm font-bold">Regina Miles</p>
                <p className="text-sm font-bold">Designer</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-[17.85px]">
            <Image
              className="object-cover aspect-square object-center"
              src="/images/testimonial/1.jpg"
              width={150}
              height={150}
              alt="img1"
            />
            <Image
              className="object-cover aspect-square object-center"
              src="/images/testimonial/2.jpg"
              width={150}
              height={150}
              alt="img2"
            />
            <Image
              className="object-cover aspect-square object-center"
              src="/images/testimonial/3.jpg"
              width={150}
              height={150}
              alt="img3"
            />
            <Image
              className="object-cover aspect-square object-center"
              src="/images/testimonial/4.jpg"
              width={150}
              height={150}
              alt="img4"
            />
            <Image
              className="object-cover aspect-square object-center"
              src="/images/testimonial/5.jpg"
              width={150}
              height={150}
              alt="img5"
            />
            <Image
              className="object-cover aspect-square object-center"
              src="/images/testimonial/6.jpg"
              width={150}
              height={150}
              alt="img6"
            />
            <Image
              className="object-cover aspect-square object-center"
              src="/images/testimonial/7.jpg"
              width={150}
              height={150}
              alt="img7"
            />
            <Image
              className="object-cover aspect-square object-center"
              src="/images/testimonial/8.jpg"
              width={150}
              height={150}
              alt="img8"
            />
            <Image
              className="object-cover aspect-square object-center"
              src="/images/testimonial/9.jpg"
              width={150}
              height={150}
              alt="img9"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full">
        <Image
          src="/images/cta_bg.jpg"
          className="absolute w-full h-full top-0 left-0 z-0 object-cover object-center"
          width={1440}
          height={640}
          alt="cta"
        />

        <div className="container z-10 relative">
          <div className="py-[112px] md:pt-[160px]">
            <div className="flex w-full items-center flex-col gap-[30px] max-w-[571px] mx-auto px-6 md:px-0">
              <h4 className="text-sm font-bold text-center text-primary">
                Designing Better Experience
              </h4>

              <h1 className="text-[40px] text-center font-bold">
                Problems trying to resolve the conflict between
              </h1>

              <p className="text-sm text-center">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics:
              </p>

              <h3 className="price text-2xl font-bold text-center text-bg-green">
                $16.48
              </h3>

              <button
                type="button"
                aria-label="ADD YOUR CALL TO ACTION"
                className="bg-primary w-full text-white max-w-max mx-auto px-10 py-[15px] text-sm font-bold"
              >
                ADD YOUR CALL TO ACTION
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
