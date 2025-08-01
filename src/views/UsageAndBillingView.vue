<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { apiService } from '@/services/apiService';
import { Doughnut, Line } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Filler } from 'chart.js';
import type { ChartOptions } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Filler);

const data = ref<any>(null);

onMounted(async () => {
    data.value = await apiService.getUsageBillingData();
});

// --- DOUGHNUT CHART CONFIGURATION ---
const doughnutChartData = computed(() => ({
    labels: data.value?.spendByService.labels || [],
    datasets: [{
        data: data.value?.spendByService.data || [],
        backgroundColor: ['#2dd4bf', '#a78bfa', '#f472b6', '#fbbf24'],
        borderWidth: 0,
        cutout: '80%', // Makes it a doughnut chart
    }],
}));

const doughnutChartOptions = computed((): ChartOptions<'doughnut'> => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
            position: 'right',
            labels: {
                color: '#333333',
                boxWidth: 12,
                padding: 20,
                font: {
                    size: 14,
                }
            }
        },
        tooltip: {
            backgroundColor: '#ffffff',
            titleColor: '#333333',
            bodyColor: '#666666',
            borderColor: '#e5e5e5',
            borderWidth: 1,
        }
    }
}));


// --- LINE CHART CONFIGURATION ---
const lineChartData = computed(() => ({
    labels: data.value?.dailySpendTrend.labels || [],
    datasets: [{
        label: 'Daily Spend (€)',
        data: data.value?.dailySpendTrend.data || [],
        borderColor: '#2dd4bf',
        pointBackgroundColor: '#2dd4bf',
        pointRadius: 4,
        pointHoverRadius: 6,
        tension: 0.4,
        fill: true,
        backgroundColor: (context: any) => { // Creates the gradient fill
            const ctx = context.chart.ctx;
            if (!ctx) return null;
            const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.clientHeight);
            gradient.addColorStop(0, 'rgba(45, 212, 191, 0.3)');
            gradient.addColorStop(1, 'rgba(45, 212, 191, 0)');
            return gradient;
        },
    }],
}));

const lineChartOptions = computed((): ChartOptions<'line'> => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            backgroundColor: '#ffffff',
            titleColor: '#333333',
            bodyColor: '#666666',
            borderColor: '#e5e5e5',
            borderWidth: 1,
            padding: 10,
        }
    },
    scales: {
        y: {
            grid: {
                color: '#e5e5e5', // Subtle grid lines
            },
            ticks: {
                color: '#666666', // Axis labels color
            },
        },
        x: {
            grid: {
                display: false, // Hide vertical grid lines
            },
            ticks: {
                color: '#666666',
            },
        },
    },
}));

</script>

<template>
    <div class="usage-billing-view">
        <div class="page-header">
            <div>
                <h1 class="page-title">Usage & Billing</h1>
                <p class="page-subtitle">Overview of your AI infrastructure consumption and costs.</p>
            </div>
            <div class="header-actions">
                <button class="action-btn">View Invoices</button>
                <button class="action-btn primary">Download Report</button>
            </div>
        </div>

        <div v-for="alert in data?.alerts" :key="alert.message" :class="['alert-banner', alert.type]">
            {{ alert.message }} <a href="#">{{ alert.type === 'warning' ? 'Increase Quota' : 'View Details' }}</a>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <h4>Current Month Spent</h4>
                <div class="stat-value">{{ data?.stats.currentMonthSpent.currency }}{{
                    data?.stats.currentMonthSpent.value.toLocaleString('en-US') }}</div>
                <div class="stat-footer positive">{{ data?.stats.currentMonthSpent.change }} vs. last month</div>
            </div>
            <div class="stat-card">
                <h4>GPU Hours Used</h4>
                <div class="stat-value">{{ data?.stats.gpuHoursUsed.value.toLocaleString('en-US') }} {{
                    data?.stats.gpuHoursUsed.unit }}</div>
                <div class="stat-footer negative">{{ data?.stats.gpuHoursUsed.change }} vs. last month</div>
            </div>
            <div class="stat-card">
                <h4>API Calls (LLM)</h4>
                <div class="stat-value">{{ data?.stats.apiCalls.value }}{{ data?.stats.apiCalls.unit }}</div>
                <div class="stat-footer positive">{{ data?.stats.apiCalls.change }} vs. last month</div>
            </div>
            <div class="stat-card">
                <h4>Data Stored (TB)</h4>
                <div class="stat-value">{{ data?.stats.dataStored.value }} {{ data?.stats.dataStored.unit }}</div>
                <div class="stat-footer negative">{{ data?.stats.dataStored.change }} vs. last month</div>
            </div>
        </div>

        <div class="content-grid">
            <div class="content-card large">
                <h3 class="card-title">Spend by Service</h3>
                <div class="chart-container" style="height: 250px;">
                    <Doughnut v-if="data" :data="doughnutChartData" :options="doughnutChartOptions" />
                </div>
            </div>
            <div class="content-card">
                <h3 class="card-title">Top Consumed Resources</h3>
                <ul class="resource-list">
                    <li v-for="resource in data?.topConsumedResources" :key="resource.name">
                        <span>{{ resource.name }}</span>
                        <span>{{ resource.value }}</span>
                    </li>
                </ul>
            </div>
            <div class="content-card full-width">
                <div class="card-header">
                    <h3 class="card-title">Daily Spend Trend</h3>
                    <span class="efficiency-badge">Cost Efficiency: High</span>
                </div>
                <div class="chart-container" style="height: 300px;">
                    <Line v-if="data" :data="lineChartData" :options="lineChartOptions" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

// Updated to match our site's vibrant light theme
.usage-billing-view {
    color: $text-dark;
    background-color: $light-grey-bg;
    min-height: 100vh;
    padding: 2rem;
}

.page-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5rem;
}

.page-title {
    font-size: 2.25rem;
    font-weight: 800;
    color: $text-dark;
    margin-bottom: 0.5rem;
}

.page-subtitle {
    color: $text-light;
    margin-bottom: 2rem;
}

.header-actions {
    display: flex;
    gap: 1rem;
}

.action-btn {
    background-color: $white;
    border: 1px solid $border-grey;
    color: $text-dark;
    padding: 0.75rem 1.5rem;
    border-radius: $border-radius;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: $box-shadow;

    &:hover {
        background-color: $primary-blue;
        border-color: $primary-blue;
        color: $white;
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(36, 40, 205, 0.2);
    }

    &.primary {
        background-color: $primary-blue;
        border-color: $primary-blue;
        color: $white;

        &:hover {
            background-color: darken($primary-blue, 10%);
            border-color: darken($primary-blue, 10%);
        }
    }
}

.alert-banner {
    padding: 1rem 1.5rem;
    border-radius: $border-radius;
    margin-bottom: 1.5rem;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: $box-shadow;

    &.warning {
        background-color: #fef2f2;
        color: #dc2626;
        border: 1px solid #fecaca;
        border-left: 4px solid #ef4444;
    }

    &.info {
        background-color: #eff6ff;
        color: #1d4ed8;
        border: 1px solid #bfdbfe;
        border-left: 4px solid #3b82f6;
    }

    a {
        color: $primary-blue;
        font-weight: 600;
        text-decoration: underline;

        &:hover {
            color: darken($primary-blue, 10%);
        }
    }
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    margin-bottom: 1.5rem;
}

.stat-card {
    background-color: $white;
    padding: 1.5rem;
    border-radius: $border-radius;
    border: 1px solid $border-grey;
    box-shadow: $box-shadow;
    transition: all 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    h4 {
        color: $text-light;
        font-weight: 600;
        margin-bottom: 0.5rem;
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .stat-value {
        font-size: 1.875rem;
        font-weight: 700;
        color: $text-dark;
        margin-bottom: 0.5rem;
    }

    .stat-footer {
        font-size: 0.875rem;
        margin-top: 1rem;
        font-weight: 500;
    }

    .positive {
        color: #10b981;
    }

    .negative {
        color: #ef4444;
    }
}

.content-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    .large {
        grid-column: span 2;
    }

    .full-width {
        grid-column: 1 / -1;
    }
}

.content-card {
    background-color: $white;
    padding: 1.5rem;
    border-radius: $border-radius;
    border: 1px solid $border-grey;
    box-shadow: $box-shadow;
    transition: all 0.2s ease;

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: $text-dark;
    margin-bottom: 1rem;
}

.efficiency-badge {
    background-color: #ecfdf5;
    color: #10b981;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
    border: 1px solid #d1fae5;
}

.resource-list {
    list-style: none;
    padding: 0;

    li {
        display: flex;
        justify-content: space-between;
        padding: 0.75rem 0;
        border-bottom: 1px solid $border-grey;

        &:last-child {
            border-bottom: none;
        }

        span:first-child {
            color: $text-light;
        }

        span:last-child {
            font-weight: 500;
            color: $text-dark;
        }
    }
}
</style>