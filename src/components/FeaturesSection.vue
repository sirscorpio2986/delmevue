<template>
    <section class="features-section">
        <div class="container">
            <h2>Cloud Infrastructure Services</h2>
            <p class="section-subtitle">Build, deploy, and scale your applications with our comprehensive cloud
                platform. From high-performance computing to AI/ML workloads.</p>
            <div class="product-grid">
                <RouterLink v-for="product in featuredProducts" :key="product.id"
                    :to="`/category/${product.category.toLowerCase()}`" class="product-link">
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
                                <div class="feature" v-for="(spec, index) in product.specs.slice(0, 3)" :key="index">
                                    <span class="checkmark">✓</span>
                                    <span>{{ spec }}</span>
                                </div>
                            </div>
                            <div class="product-action">
                                <span class="price-text">Pay as you use</span>
                                <button class="cta-button">Get Started →</button>
                            </div>
                        </div>
                    </div>
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { apiService } from '@/services/apiService'

interface Product {
    id: string
    category: string
    name: string
    description: string
    specs?: string[]
}

const products = ref<Product[]>([])

// Get one unique product per category for featured display
const featuredProducts = computed(() => {
    const categoryMap = new Map<string, Product>()

    products.value.forEach(product => {
        if (!categoryMap.has(product.category)) {
            categoryMap.set(product.category, product)
        }
    })

    return Array.from(categoryMap.values())
})

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
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.features-section {
    padding: 6rem 0;
    background: #fafbfc;

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    h2 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: $dark-grey-text;
        font-weight: 700;
    }

    .section-subtitle {
        text-align: center;
        font-size: 1.1rem;
        color: #6b7280;
        margin-bottom: 4rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }

    .product-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
    }

    .product-link {
        text-decoration: none;
        color: inherit;
        transition: transform 0.3s ease;

        &:hover {
            transform: translateY(-8px);
        }
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

        &:hover {
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
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

        .product-action {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .price-text {
                font-size: 1.1rem;
                font-weight: 600;
                color: $brand-blue;
            }

            .cta-button {
                background: $brand-blue;
                color: white;
                border: none;
                padding: 0.6rem 1.2rem;
                border-radius: 25px;
                font-weight: 600;
                font-size: 0.9rem;
                cursor: pointer;
                transition: all 0.2s ease;

                &:hover {
                    background: darken($brand-blue, 8%);
                    transform: translateX(4px);
                }
            }
        }
    }
}
</style>