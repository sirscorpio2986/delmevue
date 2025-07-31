<template>
    <main class="purchase-view">
        <div class="container">
            <div class="purchase-card">
                <h2>Cloud Billing & Usage</h2>
                <p>Monitor your cloud resource usage and manage billing for all your infrastructure services.</p>

                <div v-if="products.length > 0" class="product-grid">
                    <div v-for="product in products" :key="product.id" class="product-item">
                        <div class="product-card">
                            <div class="product-header">
                                <div class="category-badge">{{ product.category }}</div>
                                <div class="product-image">
                                    <img :src="getProductImage(product.category)" :alt="product.name" />
                                </div>
                            </div>
                            <div class="product-content">
                                <h3>{{ product.name }}</h3>
                                <p>{{ product.description }}</p>
                                <div class="product-features" v-if="product.specs && product.specs.length > 0">
                                    <div class="feature" v-for="(spec, index) in product.specs.slice(0, 3)"
                                        :key="index">
                                        <span class="checkmark">✓</span>
                                        <span>{{ spec }}</span>
                                    </div>
                                </div>
                                <div class="purchase-actions">
                                    <div class="pricing-info">
                                        <span class="price-display">Pay-as-you-go</span>
                                        <span class="price-note">Usage-based pricing</span>
                                    </div>
                                    <button @click="handlePurchase(product)" class="purchase-btn">
                                        Launch Service
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else class="loading">
                    Loading services...
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { apiService } from '@/services/apiService'
import { useAuthStore } from '@/store/authStore'

interface Product {
    id: string
    category: string
    name: string
    description: string
    specs: string[]
}

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()
const products = ref<Product[]>([])

const getProductImage = (category: string) => {
    const images = {
        'Compute': 'https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'AI & ML': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'Storage': 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'Networking': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
    return images[category as keyof typeof images] || images.Compute
}

onMounted(async () => {
    products.value = await apiService.getProducts()
})

const handlePurchase = (product: Product) => {
    if (authStore.isLoggedIn) {
        alert('Purchase action simulated!')
        console.log('Purchase initiated for:', product.name)
    } else {
        router.push({ path: '/login', query: { redirect: route.fullPath } })
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.purchase-view {
    min-height: 100vh;
    padding: 2rem 1rem;
    background: #fafbfc;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.purchase-card {
    background: $brand-white;
    padding: 3rem;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid #e5e7eb;

    h2 {
        color: $brand-blue;
        margin-bottom: 1rem;
        font-size: 2.5rem;
        text-align: center;
        font-weight: 700;
    }

    >p {
        font-size: 1.1rem;
        color: #6b7280;
        margin-bottom: 3rem;
        text-align: center;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-top: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
}

.product-item {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.product-card {
    background: $brand-white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid #e5e7eb;

    &:hover {
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        transform: translateY(-5px);
    }
}

.product-header {
    position: relative;
    height: 200px;
    overflow: hidden;

    .product-image {
        width: 100%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .category-badge {
        position: absolute;
        top: 1rem;
        left: 1rem;
        background: rgba(0, 169, 224, 0.9);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 600;
        backdrop-filter: blur(10px);
    }
}

.product-content {
    padding: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;

    h3 {
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
        color: $dark-grey-text;
    }

    p {
        color: #6b7280;
        line-height: 1.6;
        margin-bottom: 1.5rem;
        flex: 1;
    }

    .product-features {
        margin-bottom: 1.5rem;

        .feature {
            display: flex;
            align-items: center;
            margin-bottom: 0.5rem;
            font-size: 0.9rem;

            .checkmark {
                color: #10b981;
                font-weight: bold;
                margin-right: 0.5rem;
            }
        }
    }
}

.purchase-actions {
    margin-top: auto;
    padding-top: 1.5rem;
    border-top: 1px solid #e5e7eb;

    .pricing-info {
        text-align: center;
        margin-bottom: 1rem;

        .price-display {
            display: block;
            font-size: 1.3rem;
            font-weight: 700;
            color: $brand-blue;
            margin-bottom: 0.25rem;
        }

        .price-note {
            font-size: 0.85rem;
            color: #6b7280;
        }
    }

    .purchase-btn {
        background: $brand-blue;
        color: $brand-white;
        border: none;
        border-radius: 25px;
        padding: 0.75rem 2rem;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        width: 100%;

        &:hover {
            background: darken($brand-blue, 8%);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 169, 224, 0.3);
        }

        &:active {
            transform: translateY(0);
        }
    }
}

.loading {
    text-align: center;
    padding: 4rem 2rem;
    color: #6b7280;
    font-size: 1.1rem;
    font-style: italic;
}

@media (max-width: 768px) {
    .purchase-card {
        padding: 2rem 1.5rem;

        h2 {
            font-size: 2rem;
        }
    }

    .product-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
}

@media (max-width: 480px) {
    .purchase-view {
        padding: 1rem 0.5rem;
    }

    .purchase-card {
        padding: 1.5rem 1rem;

        h2 {
            font-size: 1.75rem;
        }
    }
}
</style>