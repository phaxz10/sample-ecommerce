"use client";

import { ChevronRightIcon } from "@assets";
import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
};
const MediaSection = ({ images }: Props) => {
  const [imageIndex, setImageIndex] = useState(0);

  const cycleImages = () => {
    if (imageIndex === images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  return (
    <div className="w-full flex flex-col gap-[21px]">
      <div className="relative w-full">
        <Image
          className="aspect-square w-full object-contain bg-white object-center"
          src={images[imageIndex]}
          alt={images[imageIndex]}
          width={500}
          height={500}
        />

        <button
          type="button"
          onClick={() => {
            cycleImages();
          }}
          className="absolute top-1/2 right-5 transform -translate-y-1/2"
        >
          <ChevronRightIcon className="w-8 h-8 md:w-11 md:h-11 text-white" />
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-[19px] px-4 md:px-0">
        {images.map((image, idx) => (
          <button
            onClick={() => {
              setImageIndex(idx);
            }}
            key={image}
            type="button"
          >
            <Image
              className="object-cover object-center w-[100px] h-[75px]"
              style={{
                border: idx === imageIndex ? "1px solid #23A6F0" : "",
              }}
              src={image}
              alt={image}
              width={75}
              height={100}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default MediaSection;
