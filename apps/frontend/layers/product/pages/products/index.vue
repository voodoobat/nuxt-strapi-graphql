<template>
  <div class="container mx-auto mt-6">
    <h1 class="text-2xl text-center">Our Products</h1>
    <div class="grid grid-cols-4 gap-4 mt-6">
      <div
        v-for="product in data?.products"
        :key="product?.documentId"
        class="p-6 shadow-sm border rounded-md"
      >
        <NuxtLink :to="`/products/${product?.documentId}`" class="text-lg">{{
          product?.name
        }}</NuxtLink>
        <p>brand: {{ product?.brand?.name }}</p>
        <p>price: {{ product?.price }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductCollection } from "~/layers/product/service/useProductCollection";

const { data } = await useProductCollection();
</script>
