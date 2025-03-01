import { client } from "~/graphql/client";
import { ProductCollectionQuery } from "~/layers/product/graphql/productCollectionQuery";

export default defineEventHandler(async () => {
  const response = await client.query({
    query: ProductCollectionQuery,
  });

  return response.data;
});
