import { useState } from "react";
import Image from "next/image";
import { type Image as Img } from "@prisma/client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ImageHeight = 300;

type ImageSliderProps = {
  photos: Img[];
};

const ImageSlider = ({ photos }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
      >
        {photos.map((photo) => (
          <SwiperSlide key={photo.id}>
            <Image
              className="prevent-select mx-auto"
              key={photo.id}
              src={photo.url}
              alt={photo.title}
              height={ImageHeight}
              width={ImageHeight * photo.aspect_ratio}
              draggable={false}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-2 text-center">{`${currentIndex + 1} / ${
        photos.length
      }`}</div>
    </div>
  );
};

export default ImageSlider;
