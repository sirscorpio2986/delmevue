<template>
  <TheHeader />
  <RouterView />
  <TheFooter />
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
// App-level logic can go here if needed
</script>

<style>
/* Global styles are now handled by main.scss */
</style>
