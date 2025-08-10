<template>
    <main class="products-view">
        <div class="container">
            <h1>{{ t('products.title') }}</h1>
            <div class="product-grid">
                <RouterLink v-for="product in products" :key="product.id"
                    :to="`/category/${product.category.toLowerCase()}`" class="product-link">
                    <ProductCard :product="product" />
                </RouterLink>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { apiService } from '@/services/apiService'
import ProductCard from '@/components/ProductCard.vue'

const { t } = useI18n()

interface Product {
    id: string
    category: string
    name: string
    description: string
    specs: string[]
}

const products = ref<Product[]>([])

onMounted(async () => {
    products.value = await apiService.getProducts()
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.products-view {
    padding: 2rem 0;

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
    }

    h1 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 3rem;
        color: $brand-blue;
    }

    .product-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }

        .product-link {
            text-decoration: none;
            color: inherit;
            transition: transform 0.2s ease;

            &:hover {
                transform: translateY(-5px);
            }
        }
    }
}
</style>