<template>
  <div class="container mx-auto mt-6">
    <h1 class="text-2xl text-center">Our Products</h1>
    <div class="grid grid-cols-4 gap-4 mt-6">
      <div
        v-for="product in data.products"
        :key="product.documentId"
        class="p-2 shadow-sm"
      >
        <NuxtLink :to="`/products/${product.documentId}`" class="text-lg">{{
          product.name
        }}</NuxtLink>
        <p v-if="product.brand">brand: {{ product.brand.name }}</p>
        <p>price: {{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/graphql/graphql";
import { productCollectionQuery } from "~/layers/product/graphql/productCollectionQuery";

const { data } = useAsyncQuery<{
  products: Product[];
}>(productCollectionQuery);
</script>
