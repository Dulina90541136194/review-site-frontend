<template>
  <div class="card" @click="$router.push(`/review/${review.id}`)">
    <img :src="'http://localhost:1337' + review.image" alt="Review Image" />
    <h3>{{ review.title }}</h3>
    <p>⭐ {{ review.rating }}</p>
    <small>{{ review.date }}</small>
  </div>
</template>

<script>
export default { props: ["review"] };
</script>

<style>
.card { border: 1px solid #ccc; padding: 1rem; cursor: pointer; }
.card img { width: 100%; height: 200px; object-fit: cover; }
</style>
