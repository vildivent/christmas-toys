import { api } from "shared/api/trpc";

export const useGetAllToys = () => {
  return api.toy.getAll.useQuery();
};

export const useUpdateToy = () => {
  const { refetch } = api.toy.getAll.useQuery();
  return api.toy.update.useMutation({
    onSuccess: async () => {
      await refetch();
    },
  });
};

export const useDeleteToy = () => {
  const { refetch } = api.toy.getAll.useQuery();
  return api.toy.delete.useMutation({
    onSuccess: async () => {
      await refetch();
    },
  });
};

export const useCreateToy = () => {
  const { refetch } = api.toy.getAll.useQuery();
  return api.toy.create.useMutation({
    onSuccess: async () => {
      await refetch();
    },
  });
};
