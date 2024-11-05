import { client } from "~/graphql/client";
import { productQuery } from "~/layers/product/graphql/productQuery";

export default defineEventHandler(async ({ context }) => {
  const response = await client.query({
    query: productQuery,
    variables: {
      documentId: context.params?.id,
    },
  });

  return response.data;
});
