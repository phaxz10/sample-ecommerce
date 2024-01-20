import Image from "next/image";
import Link from "next/link";
import { ClockIcon, GraphIcon, ChevronRightIcon } from "@assets";

type Props = {
  isNew?: boolean;
  image: string;
  tags: string[];
  heading: string;
  link: string;
  shortDescription: string;
  comments: number;
  publishedAt: Date;
};

const BlogCard = ({
  comments,
  shortDescription,
  heading,
  image,
  publishedAt,
  tags,
  link,
  isNew,
}: Props) => {
  return (
    <div className="blog_card">
      <div className="blog_card__row">
        <Image
          src={image}
          width={500}
          height={500}
          className="blog_card__row__image"
          alt="blog1 image"
        />

        {isNew && (
          <div className="absolute px-[10px] top-[20px] left-[30px] text-white rounded font-bold bg-danger text-sm">
            NEW
          </div>
        )}
      </div>

      <div className="blog_card__content">
        <ul className="blog_card__content__tags">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <h2 className="blog_card__content__title">{heading}</h2>

        <p className="blog_card__content__description">{shortDescription}</p>

        <div className="blog_card__content__info">
          <div className="blog_card__content__info__col">
            <ClockIcon className="blog_card__content__info__col__icon text-primary" />
            <span className="blog_card__content__info__col__text">
              {formatDate(publishedAt)}
            </span>
          </div>

          <div className="blog_card__content__info__col">
            <GraphIcon className="blog_card__content__info__col__icon text-bg-green" />
            <span className="blog_card__content__info__col__text">
              {comments} comments
            </span>
          </div>
        </div>

        <Link href={link} className="blog_card__link">
          <span>Learn More</span>
          <ChevronRightIcon className="blog_card__link__icon" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const formattedDate: string = new Intl.DateTimeFormat(
    "en-US",
    options
  ).format(date);
  const [month, day, year] = formattedDate.replace(",", "").split(" ");
  return `${day} ${month} ${year}`;
}
