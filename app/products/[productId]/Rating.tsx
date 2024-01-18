import Image from "next/image";

type Props = {
  rating: number;
};

const MAX_RATING = 5;

const Rating = ({ rating }: Props) => {
  const ratingRounded = Math.round(rating);
  return (
    <div className="flex items-center gap-[5px]">
      {Array.from({ length: MAX_RATING }, (_, i) => (
        <Image
          key={i}
          src={
            i < ratingRounded
              ? "/images/star_solid.png"
              : "/images/star_outline.png"
          }
          alt="rating"
          width={22}
          height={22}
        />
      ))}
    </div>
  );
};

export default Rating;
