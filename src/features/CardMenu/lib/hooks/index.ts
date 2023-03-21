import { useMutation } from "@tanstack/react-query";
import { uploadNewFiles } from "features/CardMenu/api";

export const useUploadFiles = () => {
  return useMutation({
    mutationFn: (files: FileList | null) => uploadNewFiles(files),
  });
};
