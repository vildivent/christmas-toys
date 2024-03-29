import { type Image } from "@prisma/client";
import { type APIResponse } from "../api";

const apiurl = process.env.NEXT_PUBLIC_UPLOADER_URL || "";

export const fileMapper: (
  data: APIResponse,
  title: string,
  photos: Image[]
) => Image[] = (data, title, photos) => {
  const filenames = data.filenames;
  const aspectRatio = data.aspectRatio;

  return filenames.map((filename, index) => {
    const currentPhoto = photos[index];
    const fileAR = aspectRatio[index];
    return {
      title: `${title}${index}`,
      url: `${apiurl}/christmas-toys/${filename}` || "",
      aspect_ratio: fileAR || 0,
      id: currentPhoto?.id || "",
      toyId: "",
      isMain: currentPhoto?.isMain || false,
    };
  });
};
