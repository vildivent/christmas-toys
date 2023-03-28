/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Image from "next/image";
import { type Image as Img } from "@prisma/client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { DeleteImgBtn, SetMainImgBtn } from "shared/ui/buttons";

type ImageSliderProps = {
  photos: (Img & { isLocal?: boolean })[];
  setMainImgHandler?: (id: string) => void;
  deleteImgHandler?: (id: string) => void;
};

const ImageSlider = ({
  photos,
  setMainImgHandler,
  deleteImgHandler,
}: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
        onSnapIndexChange={() => setCurrentIndex(0)}
        className="relative"
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={"sliderPhoto" + String(index)} unselectable="on">
            <div className="relative flex h-[294px] w-full items-center justify-center">
              {setMainImgHandler && deleteImgHandler && (
                <div className="absolute top-0 z-[1] flex w-full justify-end">
                  <div className="flex gap-5 bg-gray-2/50 px-6 py-4">
                    <SetMainImgBtn
                      onClick={() => setMainImgHandler(photo.id)}
                      isMain={photo.isMain}
                    />

                    <DeleteImgBtn onClick={() => deleteImgHandler(photo.id)} />
                  </div>
                </div>
              )}
              {photo.isLocal ? (
                <img
                  className="prevent-select z-0 h-[294px] w-full object-contain"
                  src={photo.url}
                  alt={photo.title}
                  draggable={false}
                />
              ) : (
                <Image
                  className="prevent-select z-0 object-contain"
                  src={photo.url}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  draggable={false}
                  placeholder="empty"
                />
              )}
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
