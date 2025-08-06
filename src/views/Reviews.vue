<template>
  <div>
    <h2>All Reviews</h2>
    <input v-model="search" placeholder="Search reviews..." />
    <div class="reviews">
      <ReviewCard 
        v-for="review in filteredReviews" 
        :key="review.id" 
        :review="review" 
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviews: [],
      searchTerm: "",
    };
  },
  computed: {
    filteredReviews() {
      return this.reviews.filter((r) =>
        r.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
  methods: {
    fetchReviews() {
      const data = JSON.parse(localStorage.getItem("reviews")) || [];
      this.reviews = data;
    },
    goToDetails(id) {
      this.$router.push(`/reviews/${id}`);
    },
  },
  mounted() {
    this.fetchReviews();
  },
};

</script>
