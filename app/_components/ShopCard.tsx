import Image from "next/image";
import Link from "next/link";

type Props = {
  heading: string;
  title: string;
  link: string;
  bgImage: string;
  isFirst?: boolean;
};

const ShopCard = ({ isFirst, bgImage, link, heading, title }: Props) => {
  return (
    <div className="shop_card">
      <Image
        src={bgImage}
        alt="featured"
        width={800}
        height={800}
        className="shop_card__image"
        quality={75}
        loading="lazy"
      />

      <div className="shop_card__card_content">
        <h6 className="shop_card__card_content__heading">{heading}</h6>
        <h3
          className={`shop_card__card_content__title ${
            isFirst ? "md:!text-[40px]" : ""
          }`}
        >
          {title}
        </h3>
        <Link href={link} className="shop_card__card_content__cta">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ShopCard;
