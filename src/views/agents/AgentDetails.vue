<script setup>
const { id } = useRoute().params;

const uri = "https://fakestoreapi.com/products/" + id;

// fetching single product

const { data: product } = await useFetch(uri, { key: id });

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
  });
}

// definePageMeta({
//   layout: "products",
// });
</script>

<template>
  <div>
    <Head>
      <Title>Skyline Agent | {{ product.title }}</Title>
      <Meta name="description" content="agent" />
    </Head>
    <AgentDetails :products="product" />
  </div>
</template>

<style></style>
