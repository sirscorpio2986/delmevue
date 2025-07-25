<template>
  <div class="dashboard-view">
    <HeroSection />
    <FeaturesSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
</script>

<style lang="scss" scoped>
.dashboard-view {
  min-height: 100vh;
}
</style>