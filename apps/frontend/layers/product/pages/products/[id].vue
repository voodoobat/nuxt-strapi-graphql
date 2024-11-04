<template>
  <div class="container mx-auto mt-6">
    <h1 class="text-2xl text-center">{{ data.product.name }}</h1>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/graphql/graphql";
import { productQuery } from "~/layers/product/graphql/productQuery";

const route = useRoute();
const { data } = useAsyncQuery<{
  product: Product;
}>(productQuery, {
  documentId: route.params.id,
});
</script>
