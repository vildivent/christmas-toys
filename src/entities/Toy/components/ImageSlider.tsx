import { useState } from "react";
import Image from "next/image";
import { type Image as Img } from "@prisma/client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
        onSwiper={(swiper) => setCurrentIndex(swiper.activeIndex)}
        className="relative"
      >
        {photos.map((photo) => (
          <SwiperSlide key={photo.id} unselectable="on">
            <div className="relative flex h-[350px] w-full items-center justify-center">
              <Image
                className="prevent-select object-contain"
                key={photo.id}
                src={photo.url}
                alt={photo.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                draggable={false}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-2 text-center">{`${
        photos.length ? currentIndex + 1 : 0
      } / ${photos.length}`}</div>
    </div>
  );
};

export default ImageSlider;
