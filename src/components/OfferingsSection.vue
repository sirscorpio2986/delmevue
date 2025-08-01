<template>
    <section id="service-offerings" class="offerings-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Our Service Offerings</h2>
                <p class="section-subtitle">Comprehensive AI infrastructure solutions tailored to your needs</p>
            </div>

            <div class="tabs">
                <button :class="{ active: activeTab === 'gpu' }" @click="activeTab = 'gpu'" class="tab-button">
                    Core GPU Services
                </button>
                <button :class="{ active: activeTab === 'support' }" @click="activeTab = 'support'" class="tab-button">
                    Support Services
                </button>
                <button :class="{ active: activeTab === 'addons' }" @click="activeTab = 'addons'" class="tab-button">
                    Add-on Services
                </button>
            </div>

            <div class="tab-content">
                <!-- GPU Services Tab -->
                <div v-if="activeTab === 'gpu'" class="tab-panel">
                    <div class="table-container">
                        <table class="services-table">
                            <thead>
                                <tr>
                                    <th>GPU SKU</th>
                                    <th>VRAM</th>
                                    <th>On-Demand</th>
                                    <th>Monthly</th>
                                    <th>Availability</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="service in gpuServices" :key="service.sku" class="service-row">
                                    <td class="sku-cell">
                                        <strong>{{ service.sku }}</strong>
                                    </td>
                                    <td>{{ service.vram }}</td>
                                    <td class="price-cell">{{ service.onDemand }}</td>
                                    <td class="price-cell">{{ service.monthly }}</td>
                                    <td>
                                        <span :class="['status-pill', service.availability.toLowerCase()]">
                                            {{ service.availability }}
                                        </span>
                                    </td>
                                    <td>
                                        <button class="primary-btn-small">Provision Now</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Support Services Tab -->
                <div v-if="activeTab === 'support'" class="tab-panel">
                    <div class="table-container">
                        <table class="services-table">
                            <thead>
                                <tr>
                                    <th v-for="header in supportTiers.headers" :key="header" class="support-header">
                                        {{ header }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="row in supportTiers.rows" :key="row.feature" class="support-row">
                                    <td class="feature-cell">{{ row.feature }}</td>
                                    <td>{{ row.basic }}</td>
                                    <td>{{ row.pro }}</td>
                                    <td>{{ row.enterprise }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Add-on Services Tab -->
                <div v-if="activeTab === 'addons'" class="tab-panel">
                    <div class="table-container">
                        <table class="services-table">
                            <thead>
                                <tr>
                                    <th>Add-on Name</th>
                                    <th>Description</th>
                                    <th>Price Model</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="addon in addOns" :key="addon.name" class="addon-row">
                                    <td class="addon-name">
                                        <strong>{{ addon.name }}</strong>
                                    </td>
                                    <td class="addon-description">{{ addon.description }}</td>
                                    <td class="price-cell">{{ addon.price }}</td>
                                    <td>
                                        <button class="primary-btn-small">Add to Plan</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { apiService } from '@/services/apiService';

type Tab = 'gpu' | 'support' | 'addons';
const activeTab = ref<Tab>('gpu');

const gpuServices = ref<any[]>([]);
const supportTiers = ref<any>({});
const addOns = ref<any[]>([]);

const handleSwitchToGpuServices = () => {
    activeTab.value = 'gpu';
};

onMounted(async () => {
    try {
        gpuServices.value = await apiService.getGpuServices();
        supportTiers.value = await apiService.getSupportTiers();
        addOns.value = await apiService.getAddOnServices();
    } catch (error) {
        console.error('Error loading service offerings:', error);
    }

    // Listen for the event to switch to GPU services tab
    window.addEventListener('switchToGpuServices', handleSwitchToGpuServices);
});

onUnmounted(() => {
    // Clean up event listener
    window.removeEventListener('switchToGpuServices', handleSwitchToGpuServices);
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.offerings-section {
    padding: 4rem 0;
    background-color: #f8fafc;
}

.container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;
}

.section-header {
    text-align: center;
    margin-bottom: 3rem;

    .section-title {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: $text-dark;
        background: linear-gradient(135deg, $primary-blue 0%, #1e40af 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .section-subtitle {
        font-size: 1.1rem;
        color: #64748b;
        line-height: 1.6;
    }
}

.tabs {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;

    .tab-button {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        font-weight: 600;
        border: 1px solid $border-grey;
        background-color: $white;
        color: $text-dark;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.2s ease;
        white-space: nowrap;

        &:hover {
            border-color: $primary-blue;
            color: $primary-blue;
            transform: translateY(-1px);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        &.active {
            background-color: $primary-blue;
            color: $white;
            border-color: $primary-blue;
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }
    }
}

.tab-content {
    .tab-panel {
        animation: fadeIn 0.3s ease-in-out;
    }
}

.table-container {
    background-color: $white;
    border: 1px solid $border-grey;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.services-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;

    th,
    td {
        padding: 1rem 1.5rem;
        text-align: left;
        border-bottom: 1px solid $border-grey;
    }

    thead {
        background-color: #f8fafc;

        th {
            font-size: 0.875rem;
            font-weight: 600;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
    }

    tbody {
        tr {
            transition: background-color 0.2s ease;

            &:hover {
                background-color: #f8fafc;
            }

            &:last-child td {
                border-bottom: none;
            }
        }
    }
}

.sku-cell,
.addon-name {
    font-weight: 600;
    color: $text-dark;
}

.price-cell {
    font-weight: 600;
    color: #059669;
}

.feature-cell {
    font-weight: 600;
    color: $text-dark;
}

.addon-description {
    color: #64748b;
    line-height: 1.5;
}

.status-pill {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;

    &.high {
        background-color: #d1fae5;
        color: #065f46;
    }

    &.medium {
        background-color: #fef9c3;
        color: #ca8a04;
    }

    &.low {
        background-color: #fee2e2;
        color: #991b1b;
    }
}

.primary-btn-small {
    background-color: $primary-blue;
    color: $white;
    border: none;
    border-radius: 6px;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background-color: darken($primary-blue, 10%);
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
    }
}

.support-header {
    text-align: center;
}

.support-row {
    td {
        text-align: center;
        vertical-align: middle;
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

// Responsive Design
@media (max-width: 768px) {
    .container {
        padding: 0 1rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .tabs {
        gap: 0.5rem;

        .tab-button {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
        }
    }

    .services-table {
        font-size: 0.8rem;

        th,
        td {
            padding: 0.75rem 1rem;
        }
    }

    .table-container {
        overflow-x: auto;
    }
}

@media (max-width: 480px) {
    .section-title {
        font-size: 1.75rem;
    }

    .tabs {
        flex-direction: column;
        align-items: center;

        .tab-button {
            width: 100%;
            max-width: 200px;
        }
    }

    .services-table {

        th,
        td {
            padding: 0.5rem 0.75rem;
            font-size: 0.75rem;
        }
    }
}
</style>