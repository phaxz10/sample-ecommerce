import { ClockIcon, GraphIcon, ChevronRightIcon } from "@assets";
import Image from "next/image";
import Link from "next/link";

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
      <div className="relative w-full aspect-square">
        <Image
          src={image}
          width={500}
          height={500}
          className="object-cover h-full w-full"
          alt="blog1 image"
        />

        {isNew && (
          <div className="absolute px-[10px] top-[20px] left-[30px] text-white rounded font-bold bg-danger text-sm">
            NEW
          </div>
        )}
      </div>

      <div className="p-[25px] flex flex-col gap-[10px]">
        <ul className="flex items-center gap-[15px] [&>*:first-child]:text-primary">
          {tags.map((tag) => (
            <li key={tag} className="text-sm">
              {tag}
            </li>
          ))}
        </ul>

        <h2 className="text-xl">{heading}</h2>

        <p className="text-sm">{shortDescription}</p>

        <div className="flex items-center justify-between py-[15px]">
          <div className="flex items-center gap-[5px]">
            <ClockIcon className="text-primary" />
            <span className="text-sm">{formatDate(publishedAt)}</span>
          </div>

          <div className="flex items-center gap-[5px]">
            <GraphIcon className="text-bg-green" />
            <span className="text-sm">{comments} comments</span>
          </div>
        </div>

        <Link
          href={link}
          className="flex items-center gap-[10px] text-sm font-bold"
        >
          <span>Learn More</span>
          <ChevronRightIcon className="text-primary" />
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
