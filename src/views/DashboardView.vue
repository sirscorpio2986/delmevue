<template>
  <div class="dashboard-view">
    <HeroSection />
    <FeaturesSection />
    <OfferingsSection />
    <section id="marketplace-section" class="marketplace-section">
      <PurchaseView />
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
import OfferingsSection from '@/components/OfferingsSection.vue'
import PurchaseView from '@/views/PurchaseView.vue'
</script>

<style lang="scss" scoped>
.dashboard-view {
  min-height: 100vh;
}

.marketplace-section {
  padding: 4rem 0;
  background: #f8fafc;
}
</style>