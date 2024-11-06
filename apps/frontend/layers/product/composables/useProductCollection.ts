import type { ProductCollectionQuery } from "~/graphql/graphql";

export const useProductCollection = async () => {
  const { data, status, error, refresh } = useAsyncData<ProductCollectionQuery>(
    "products",
    async () => {
      return await $fetch("/api/products", {});
    },
    {
      getCachedData: (key) => {
        const cached = useNuxtData(key);
        return cached.data.value;
      },
      transform: (data) => {
        return data;
      },
    },
  );

  return {
    data,
    status,
    error,
    refresh,
  };
};
