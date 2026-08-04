<script setup>
defineProps({
  brand: { type: String, required: true },
})
</script>

<template>
  <nav class="nav container">
    <span class="nav-brand">{{ brand }}</span>
  </nav>
</template>

<style scoped>
@media (max-width: 480px) {
  .nav-brand { font-size: 16px; }
}
</style>
