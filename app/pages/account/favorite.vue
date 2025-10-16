<script setup>

const isLoggedIn = useState('isLoggedIn', () => false)
</script>

<template>
  <div class="container mx-auto p-8">
    <h1 class="text-3xl font-bold mb-4">My Favorites</h1>
    <p>Your favorite items will appear here.</p>
  </div>
</template>