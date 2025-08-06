<template>
  <div id="app">
    <nav>
      <h1>Movie Reviews</h1>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default { name: "App" };
</script>

<style>
nav {
  background: #333;
  color: white;
  padding: 1rem;
}
</style>
