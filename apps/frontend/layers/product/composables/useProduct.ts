import type { ProductQuery } from "~/graphql/graphql";

export const useProduct = async (id: string) => {
  const { data, status, error, refresh } = useAsyncData<ProductQuery>(
    "products",
    async () => {
      return await $fetch(`/api/products/${id}`, {});
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
