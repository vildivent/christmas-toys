import type { Image } from "@prisma/client";

type fileListToAddMapper = (
  FileList: FileList,
  photosToAdd: Image[]
) => FileList | null;

export const fileListToAddMapper: fileListToAddMapper = (
  FileList,
  photosToAdd
) => {
  const indexStack = photosToAdd.map((photo) =>
    Number(photo.id.match(/[0-9]/g))
  );

  const dt = new DataTransfer();

  for (let i = 0; i < indexStack.length; i++) {
    const index = indexStack[i];
    if (index === undefined) break;

    const file = FileList[index];
    if (!file) break;

    dt.items.add(file);
  }

  return dt.files;
};
