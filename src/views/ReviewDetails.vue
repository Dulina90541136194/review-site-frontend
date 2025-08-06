<template>
  <div class="review-details">
    <h1>{{ review.Title }}</h1>
    <img :src="getImageUrl(review.Image)" alt="Movie Poster" />
    <p><strong>Rating:</strong> {{ review.Rating }}/10</p>
    <p><strong>Published Date:</strong> {{ review.PublishedDate }}</p>
    <div v-html="review.Content"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ReviewDetails",
  data() {
    return {
      review: {},
    };
  },
  async created() {
    const id = this.$route.params.id; // Get ID from route
    const response = await axios.get(`http://localhost:1337/api/reviews/${id}?populate=*`);
    this.review = response.data.data.attributes;
  },
  methods: {
    getImageUrl(image) {
      return `http://localhost:1337${image.data.attributes.url}`;
    },
  },
};
</script>

<style>
.review-details {
  max-width: 800px;
  margin: 20px auto;
  text-align: center;
}
.review-details img {
  max-width: 100%;
  border-radius: 10px;
  margin: 20px 0;
}
</style>
