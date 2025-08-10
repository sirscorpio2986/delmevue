<template>
    <div class="marketplace-view">
        <div class="marketplace-container">
            <!-- Header Section -->
            <div class="marketplace-header">
                <h1>{{ t('marketplace.title') }}</h1>
                <p class="results-count">{{ t('marketplace.showingResults', {
                    count: filteredSolutions.length, total:
                        aiSolutions.length
                }) }}
                </p>
            </div>

            <div class="marketplace-content">
                <!-- Filters Sidebar -->
                <aside class="filters-sidebar">
                    <div class="filters-section">
                        <h3>{{ t('marketplace.filters') }}</h3>

                        <div class="filter-group">
                            <label for="category-filter">{{ t('marketplace.category') }}</label>
                            <select id="category-filter" v-model="filters.category">
                                <option value="All">{{ t('marketplace.all') }}</option>
                                <option value="Telecom">{{ t('marketplace.telecom') }}</option>
                                <option value="Finance">{{ t('marketplace.finance') }}</option>
                                <option value="Healthcare">{{ t('marketplace.healthcare') }}</option>
                                <option value="Energy">{{ t('marketplace.energy') }}</option>
                                <option value="Retail">{{ t('marketplace.retail') }}</option>
                            </select>
                        </div>

                        <div class="filter-group">
                            <label for="service-type-filter">{{ t('marketplace.serviceType') }}</label>
                            <select id="service-type-filter" v-model="filters.serviceType">
                                <option value="All">{{ t('marketplace.all') }}</option>
                                <option value="SaaS">{{ t('marketplace.saas') }}</option>
                                <option value="PaaS">{{ t('marketplace.paas') }}</option>
                                <option value="IaaS">{{ t('marketplace.iaas') }}</option>
                            </select>
                        </div>

                        <div class="filter-group">
                            <label for="pricing-filter">{{ t('marketplace.pricingModel') }}</label>
                            <select id="pricing-filter" v-model="filters.pricingModel">
                                <option value="All">{{ t('marketplace.all') }}</option>
                                <option value="Subscription">{{ t('marketplace.subscription') }}</option>
                                <option value="Usage-based">{{ t('marketplace.usageBased') }}</option>
                                <option value="One-time">{{ t('marketplace.oneTime') }}</option>
                            </select>
                        </div>

                        <button @click="applyFilters" class="apply-filters-btn">{{ t('marketplace.applyFilters')
                        }}</button>
                    </div>
                </aside>

                <!-- Solutions Grid -->
                <div class="solutions-grid">
                    <!-- Popular Column -->
                    <div class="solutions-column">
                        <h3 class="column-title">{{ t('marketplace.popular') }}</h3>
                        <div class="solution-cards">
                            <div v-for="solution in popularSolutions" :key="solution.id" class="solution-card">
                                <div class="solution-header">
                                    <div class="solution-tags">
                                        <span v-for="tag in solution.tags" :key="tag" class="tag">{{ tag }}</span>
                                    </div>
                                    <h4 class="solution-title">{{ solution.title }}</h4>
                                    <p class="solution-description">{{ solution.description }}</p>
                                </div>
                                <div class="solution-footer">
                                    <div class="solution-price">{{ solution.price }}</div>
                                    <div class="solution-compliance">
                                        <span v-for="compliance in solution.compliance" :key="compliance"
                                            class="compliance-badge">{{ compliance }}</span>
                                    </div>
                                    <div class="solution-actions">
                                        <button class="action-btn primary">{{ t('marketplace.requestAccess') }}</button>
                                        <button class="action-btn secondary">{{ t('marketplace.learnMore') }}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- New Column -->
                    <div class="solutions-column">
                        <h3 class="column-title">New</h3>
                        <div class="solution-cards">
                            <div v-for="solution in newSolutions" :key="solution.id" class="solution-card">
                                <div class="solution-header">
                                    <div class="solution-tags">
                                        <span v-for="tag in solution.tags" :key="tag" class="tag">{{ tag }}</span>
                                    </div>
                                    <h4 class="solution-title">{{ solution.title }}</h4>
                                    <p class="solution-description">{{ solution.description }}</p>
                                </div>
                                <div class="solution-footer">
                                    <div class="solution-price">{{ solution.price }}</div>
                                    <div class="solution-compliance">
                                        <span v-for="compliance in solution.compliance" :key="compliance"
                                            class="compliance-badge">{{ compliance }}</span>
                                    </div>
                                    <div class="solution-actions">
                                        <button class="action-btn primary">{{ t('marketplace.requestAccess') }}</button>
                                        <button class="action-btn secondary">{{ t('marketplace.learnMore') }}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Best Value Column -->
                    <div class="solutions-column">
                        <h3 class="column-title">Best Value</h3>
                        <div class="solution-cards">
                            <div v-for="solution in bestValueSolutions" :key="solution.id" class="solution-card">
                                <div class="solution-header">
                                    <div class="solution-tags">
                                        <span v-for="tag in solution.tags" :key="tag" class="tag">{{ tag }}</span>
                                    </div>
                                    <h4 class="solution-title">{{ solution.title }}</h4>
                                    <p class="solution-description">{{ solution.description }}</p>
                                </div>
                                <div class="solution-footer">
                                    <div class="solution-price">{{ solution.price }}</div>
                                    <div class="solution-compliance">
                                        <span v-for="compliance in solution.compliance" :key="compliance"
                                            class="compliance-badge">{{ compliance }}</span>
                                    </div>
                                    <div class="solution-actions">
                                        <button class="action-btn primary">{{ t('marketplace.requestAccess') }}</button>
                                        <button class="action-btn secondary">{{ t('marketplace.learnMore') }}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Pagination -->
            <div class="pagination">
                <span class="pagination-info">Showing 1 to 6 of 8 results</span>
                <div class="pagination-controls">
                    <button class="pagination-btn" disabled>&lt;</button>
                    <button class="pagination-btn active">1</button>
                    <button class="pagination-btn">2</button>
                    <button class="pagination-btn">&gt;</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface AISolution {
    id: string
    title: string
    description: string
    tags: string[]
    price: string
    compliance: string[]
    category: 'Popular' | 'New' | 'Best Value'
    serviceType: string
    pricingModel: string
}

const aiSolutions = ref<AISolution[]>([
    {
        id: '1',
        title: 'Predictive Churn ML',
        description: 'AI model that predicts customer churn risk with 92% accuracy, helping reduce attrition by up to 30%.',
        tags: ['Telecom', 'SaaS'],
        price: '19,990 NOK/mo',
        compliance: ['GDPR', 'ISO 27001'],
        category: 'Popular',
        serviceType: 'SaaS',
        pricingModel: 'Subscription'
    },
    {
        id: '2',
        title: 'Fraud Detection AI',
        description: 'Machine learning system that identifies fraudulent transactions with 99.1% accuracy in real-time.',
        tags: ['Finance', 'SaaS'],
        price: '27,800 NOK/mo',
        compliance: ['GDPR', 'ISO 27001', 'PCI DSS'],
        category: 'Popular',
        serviceType: 'SaaS',
        pricingModel: 'Subscription'
    },
    {
        id: '3',
        title: 'Diagnostic Imaging AI',
        description: 'Medical imaging analysis platform for radiology with 96% detection accuracy for common conditions.',
        tags: ['Healthcare', 'PaaS'],
        price: '49,500 NOK/mo',
        compliance: ['GDPR', 'HIPAA', 'ISO 27001'],
        category: 'New',
        serviceType: 'PaaS',
        pricingModel: 'Subscription'
    },
    {
        id: '4',
        title: 'Energy Grid Predictor',
        description: 'Forecasts energy demand and optimizes grid distribution with deep learning, reducing waste by up to 15%.',
        tags: ['Energy', 'PaaS'],
        price: '42,300 NOK/mo',
        compliance: ['GDPR', 'ISO 27001'],
        category: 'New',
        serviceType: 'PaaS',
        pricingModel: 'Usage-based'
    },
    {
        id: '5',
        title: '5G Network Optimizer',
        description: 'Real-time optimization of 5G network resources using AI, reducing latency by 40% in field tests.',
        tags: ['Telecom', 'IaaS'],
        price: '32,500 NOK/mo',
        compliance: ['GDPR', 'ISO 27001'],
        category: 'Best Value',
        serviceType: 'IaaS',
        pricingModel: 'Usage-based'
    },
    {
        id: '6',
        title: 'Retail Personalizer',
        description: 'Personalized product recommendations that increase average order value by 22% through deep learning.',
        tags: ['Retail', 'SaaS'],
        price: '15,900 NOK/mo',
        compliance: ['GDPR'],
        category: 'Best Value',
        serviceType: 'SaaS',
        pricingModel: 'Subscription'
    }
])

const filters = ref({
    category: 'All',
    serviceType: 'All',
    pricingModel: 'All'
})

const filteredSolutions = computed(() => {
    return aiSolutions.value.filter(solution => {
        const categoryMatch = filters.value.category === 'All' || solution.tags.includes(filters.value.category)
        const serviceTypeMatch = filters.value.serviceType === 'All' || solution.serviceType === filters.value.serviceType
        const pricingMatch = filters.value.pricingModel === 'All' || solution.pricingModel === filters.value.pricingModel

        return categoryMatch && serviceTypeMatch && pricingMatch
    })
})

const popularSolutions = computed(() => filteredSolutions.value.filter(s => s.category === 'Popular'))
const newSolutions = computed(() => filteredSolutions.value.filter(s => s.category === 'New'))
const bestValueSolutions = computed(() => filteredSolutions.value.filter(s => s.category === 'Best Value'))

const applyFilters = () => {
    // Filter logic is handled by computed properties
    console.log('Filters applied:', filters.value)
}

onMounted(() => {
    console.log('Marketplace loaded with', aiSolutions.value.length, 'solutions')
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.marketplace-view {
    color: #1e293b;
    padding: 0;
}

.marketplace-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
}

.marketplace-header {
    text-align: center;
    margin-bottom: 3rem;
    padding-top: 1rem;

    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: $primary-blue;
        background: linear-gradient(135deg, $primary-blue 0%, #1e40af 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .results-count {
        color: #64748b;
        font-size: 1.1rem;
    }
}

.marketplace-content {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 3rem;
    margin-bottom: 3rem;
}

// Filters Sidebar
.filters-sidebar {
    .filters-section {
        background: $white;
        border-radius: 12px;
        padding: 2rem;
        border: 1px solid $border-grey;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

        h3 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
            color: $text-dark;
        }
    }

    .filter-group {
        margin-bottom: 1.5rem;

        label {
            display: block;
            font-weight: 500;
            margin-bottom: 0.5rem;
            color: $text-dark;
            font-size: 0.9rem;
        }

        select {
            width: 100%;
            padding: 0.75rem;
            background: $white;
            border: 1px solid $border-grey;
            border-radius: 8px;
            color: $text-dark;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.2s ease;

            &:focus {
                outline: none;
                border-color: $primary-blue;
                box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
            }

            option {
                background: $white;
                color: $text-dark;
            }
        }
    }

    .apply-filters-btn {
        width: 100%;
        padding: 0.75rem;
        background: $primary-blue;
        color: $white;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
            background: darken($primary-blue, 10%);
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }
    }
}

// Solutions Grid
.solutions-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

.solutions-column {
    .column-title {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
        color: $text-dark;
        text-align: center;
    }

    .solution-cards {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
}

.solution-card {
    background: $white;
    border-radius: 12px;
    padding: 1.5rem;
    border: 1px solid $border-grey;
    transition: all 0.3s ease;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        border-color: $primary-blue;
    }

    .solution-header {
        margin-bottom: 1.5rem;

        .solution-tags {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 1rem;
            flex-wrap: wrap;

            .tag {
                background: #e2e8f0;
                color: #475569;
                padding: 0.25rem 0.75rem;
                border-radius: 20px;
                font-size: 0.75rem;
                font-weight: 500;
            }
        }

        .solution-title {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 0.75rem;
            color: $text-dark;
            line-height: 1.4;
        }

        .solution-description {
            color: #64748b;
            font-size: 0.9rem;
            line-height: 1.6;
        }
    }

    .solution-footer {
        .solution-price {
            font-size: 1.25rem;
            font-weight: 700;
            color: #059669;
            margin-bottom: 1rem;
        }

        .solution-compliance {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 1.5rem;
            flex-wrap: wrap;

            .compliance-badge {
                background: #dbeafe;
                color: #1e40af;
                padding: 0.25rem 0.5rem;
                border-radius: 4px;
                font-size: 0.7rem;
                font-weight: 500;
            }
        }

        .solution-actions {
            display: flex;
            gap: 0.75rem;

            .action-btn {
                flex: 1;
                padding: 0.75rem;
                border-radius: 8px;
                font-weight: 600;
                font-size: 0.85rem;
                cursor: pointer;
                transition: all 0.2s ease;
                border: none;

                &.primary {
                    background: $primary-blue;
                    color: $white;

                    &:hover {
                        background: darken($primary-blue, 10%);
                        transform: translateY(-1px);
                        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
                    }
                }

                &.secondary {
                    background: transparent;
                    color: $text-dark;
                    border: 1px solid $border-grey;

                    &:hover {
                        background: #f8fafc;
                        border-color: $primary-blue;
                        color: $primary-blue;
                    }
                }
            }
        }
    }
}

// Pagination
.pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    border-top: 1px solid $border-grey;

    .pagination-info {
        color: #64748b;
        font-size: 0.9rem;
    }

    .pagination-controls {
        display: flex;
        gap: 0.5rem;

        .pagination-btn {
            padding: 0.5rem 1rem;
            background: $white;
            border: 1px solid $border-grey;
            color: $text-dark;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 0.9rem;

            &:hover:not(:disabled) {
                background: #f8fafc;
                border-color: $primary-blue;
                color: $primary-blue;
            }

            &.active {
                background: $primary-blue;
                border-color: $primary-blue;
                color: $white;
            }

            &:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
        }
    }
}

// Responsive Design
@media (max-width: 1200px) {
    .solutions-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .marketplace-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .solutions-grid {
        grid-template-columns: 1fr;
    }

    .marketplace-header h1 {
        font-size: 2rem;
    }

    .pagination {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
}

@media (max-width: 480px) {
    .marketplace-container {
        padding: 0 1rem;
    }

    .marketplace-header h1 {
        font-size: 1.75rem;
    }

    .solution-card {
        padding: 1rem;
    }

    .solution-actions {
        flex-direction: column;
    }
}
</style>