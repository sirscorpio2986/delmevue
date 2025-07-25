<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { apiService } from '@/services/apiService';
import { useAuthStore } from '@/store/authStore';

// Define a type for our product for stronger typing
interface Product {
    id: string;
    category: string;
    name: string;
    description: string;
    specs?: string[]; // Make specs optional as not all products might have them
}

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
const products = ref<Product[]>([]);
const allProducts = ref<Product[]>([]);
const currentCategory = ref<string>(route.params.id as string);

// A computed property to get unique categories for the side navigation
const uniqueCategories = computed(() => {
    const categories = allProducts.value.map(p => p.category);
    return [...new Set(categories)];
});

// A computed property to filter products for the main display
const categoryProducts = computed(() => {
    return allProducts.value.filter(p => p.category.toLowerCase() === currentCategory.value.toLowerCase());
});

const handlePurchase = () => {
    if (authStore.isLoggedIn) {
        alert('Purchase action simulated!');
    } else {
        router.push({ path: '/login', query: { redirect: route.fullPath } });
    }
};

// Watch for route parameter changes
watch(() => route.params.id, (newCategoryId) => {
    if (newCategoryId && typeof newCategoryId === 'string') {
        currentCategory.value = newCategoryId;
    }
});

onMounted(async () => {
    allProducts.value = await apiService.getProducts();
});
</script>

<template>
    <div class="category-view">
        <div class="category-page">
            <div class="page-container">
                <aside class="side-nav">
                    <div class="nav-header">
                        <h3>Choose Category</h3>
                    </div>
                    <ul>
                        <li v-for="category in uniqueCategories" :key="category">
                            <RouterLink :to="`/category/${category.toLowerCase()}`"
                                :class="{ 'active-link': currentCategory.toLowerCase() === category.toLowerCase() }">
                                {{ category }}
                            </RouterLink>
                        </li>
                    </ul>
                </aside>
                <main class="main-content">
                    <div v-if="categoryProducts.length > 0">
                        <div class="page-header">
                            <h1>{{ currentCategory }} Pricing</h1>
                            <p>Choose the perfect {{ currentCategory.toLowerCase() }} solution for your business.</p>
                        </div>
                        <div class="product-list">
                            <div v-for="product in categoryProducts" :key="product.id" class="product-item">
                                <div class="product-details">
                                    <h3>{{ product.name }}</h3>
                                    <ul v-if="product.specs" class="specs-list">
                                        <li v-for="spec in product.specs" :key="spec">✓ {{ spec }}</li>
                                    </ul>
                                    <p v-else>{{ product.description }}</p>
                                </div>
                                <div class="product-actions">
                                    <div class="pricing-info">
                                        <span class="price-display">Contact for Pricing</span>
                                        <span class="price-note">Custom Solution</span>
                                    </div>
                                    <button @click="handlePurchase" class="purchase-btn">Configure & Purchase</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.category-view {
    min-height: 100vh;
    background: #fafbfc;
}

.category-page {
    padding: 2rem 2rem 4rem;
}

.page-container {
    max-width: 1200px;
    margin: auto;
    display: flex;
    gap: 3rem;
}

.side-nav {
    flex: 0 0 280px;

    .nav-header {
        margin-bottom: 1.5rem;

        h3 {
            color: $dark-text;
            font-size: 1.1rem;
            font-weight: 600;
        }
    }

    ul {
        list-style: none;
        padding: 0;
        position: sticky;
        top: 120px;
        background: $white;
        border-radius: 12px;
        padding: 1rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    li a {
        display: block;
        padding: 1rem 1.5rem;
        color: $dark-text;
        text-decoration: none;
        border-radius: 8px;
        font-weight: 500;
        transition: all 0.2s ease;
        margin-bottom: 0.5rem;

        &:hover {
            background-color: #f3f4f6;
            color: $primary-blue;
        }

        &.active-link {
            background-color: $primary-blue;
            color: $white;
            font-weight: 600;
        }
    }
}

.main-content {
    flex: 1;

    .page-header {
        margin-bottom: 3rem;

        h1 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            color: $dark-text;
        }

        p {
            font-size: 1.1rem;
            color: #6b7280;
        }
    }
}

.product-item {
    background-color: $white;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    padding: 2rem;
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        transform: translateY(-2px);
    }
}

.product-details {
    flex: 1;
    margin-right: 2rem;

    h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: $dark-text;
        font-weight: 600;
    }
}

.specs-list {
    list-style: none;
    padding: 0;
    color: #4b5563;

    li {
        margin-bottom: 0.75rem;
        display: flex;
        align-items: center;
        font-size: 0.95rem;

        &::before {
            content: '✓';
            color: #10b981;
            font-weight: bold;
            margin-right: 0.75rem;
        }
    }
}

.product-actions {
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;

    .pricing-info {
        text-align: right;

        .price-display {
            display: block;
            font-size: 1.5rem;
            font-weight: 700;
            color: $primary-blue;
            margin-bottom: 0.25rem;
        }

        .price-note {
            font-size: 0.85rem;
            color: #6b7280;
        }
    }

    .purchase-btn {
        background: $primary-blue;
        color: $white;
        border: none;
        padding: 0.75rem 2rem;
        font-size: 1rem;
        font-weight: 600;
        border-radius: 25px;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
            background: darken($primary-blue, 8%);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 169, 224, 0.3);
        }
    }
}

@media (max-width: 968px) {
    .page-container {
        flex-direction: column;
        gap: 2rem;
    }

    .side-nav {
        flex: none;

        ul {
            display: flex;
            gap: 1rem;
            overflow-x: auto;
            padding: 1rem;
        }

        li a {
            white-space: nowrap;
            margin-bottom: 0;
        }
    }

    .product-item {
        flex-direction: column;
        align-items: stretch;

        .product-details {
            margin-right: 0;
            margin-bottom: 1.5rem;
        }

        .product-actions {
            align-items: stretch;
            text-align: center;

            .purchase-btn {
                width: 100%;
            }
        }
    }
}
</style>