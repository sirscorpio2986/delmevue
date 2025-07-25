<template>
    <div class="card">
        <span class="eyebrow">{{ product.category }}</span>
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
    </div>
</template>

<script setup lang="ts">
interface Product {
    id: string
    category: string
    name: string
    description: string
}

defineProps<{
    product: Product
}>()
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.card {
    background: $white;
    padding: 1.5rem;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    transition: box-shadow 0.2s ease;

    &:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .eyebrow {
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        color: $primary-blue;
        letter-spacing: 0.5px;
        margin-bottom: 0.5rem;
        display: block;
    }

    h3 {
        font-size: 1.25rem;
        margin: 0 0 0.75rem 0;
        color: $dark-text;
    }

    p {
        font-size: 0.9rem;
        line-height: 1.5;
        color: $dark-text;
        margin: 0;
        opacity: 0.8;
    }
}
</style>