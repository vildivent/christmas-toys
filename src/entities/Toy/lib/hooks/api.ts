import type { ToyQuery } from "entities/Toy/types";
import { api } from "shared/api/trpc";
import { useToysQuery } from "../store";

export const useCreateToy = () => {
  const { query } = useToysQuery();
  const { refetch } = api.toy.get.useQuery(query);
  return api.toy.create.useMutation({
    onSuccess: async () => {
      await refetch();
    },
  });
};

export const useUpdateToy = () => {
  const { query } = useToysQuery();
  const { refetch } = api.toy.get.useQuery(query);
  return api.toy.update.useMutation({
    onSuccess: async () => {
      await refetch();
    },
  });
};

export const useDeleteToy = () => {
  const { query } = useToysQuery();
  const { refetch } = api.toy.get.useQuery(query);
  return api.toy.delete.useMutation({
    onSuccess: async () => {
      await refetch();
    },
  });
};

export const useGetAllToys = () => {
  return api.toy.getAll.useQuery();
};

export const useGetToys = (query: ToyQuery | null) => {
  if (query) return api.toy.get.useQuery(query);
  return api.toy.get.useQuery();
};
