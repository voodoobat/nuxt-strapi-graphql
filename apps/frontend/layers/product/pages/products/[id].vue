<template>
  <div class="container mx-auto mt-6">
    <h1 class="text-2xl text-center">{{ data?.product?.name }}</h1>
    <p class="text-center">price: {{ data?.product?.price }}</p>
  </div>
  <div v-if="currentBrandProducts.length" class="mt-6">
    <h2 class="text-xl text-center">
      Other {{ data?.product?.brand?.name }} bikes
    </h2>
    <p
      v-for="product in currentBrandProducts"
      :key="product?.documentId"
      class="text-center"
    >
      <NuxtLink :to="`/products/${product?.documentId}`">
        {{ product?.name }}
      </NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useProduct } from "../../services/useProduct";

const route = useRoute();
const productId = route.params.id as string;

const { data } = await useProduct(productId);

const currentBrandProducts = computed(() => {
  const products = data.value?.product?.brand?.products;
  if (products?.length) {
    return products.filter((product) => {
      return product?.documentId !== productId;
    });
  }

  return [];
});
</script>
