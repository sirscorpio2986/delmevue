<template>
  <TheHeader />
  <RouterView />
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
// App-level logic can go here if needed
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}
</style>
