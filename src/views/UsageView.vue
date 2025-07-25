<template>
    <div class="usage-view">
        <!-- Usage Charts -->
        <div v-if="usageData" class="usage-charts">
            <h3>Resource Usage</h3>
            <div class="charts-grid">
                <div class="chart-container">
                    <h4>CPU Usage</h4>
                    <div class="chart-wrapper">
                        <DoughnutChart v-if="cpuChartData" :chart-data="cpuChartData" :options="chartOptions" />
                    </div>
                    <p class="usage-text">{{ usageData.cpu.used }}/{{ usageData.cpu.total }} {{ usageData.cpu.unit }}
                    </p>
                </div>
                <div class="chart-container">
                    <h4>Memory Usage</h4>
                    <div class="chart-wrapper">
                        <DoughnutChart v-if="memoryChartData" :chart-data="memoryChartData" :options="chartOptions" />
                    </div>
                    <p class="usage-text">{{ usageData.memory.used }}/{{ usageData.memory.total }} {{
                        usageData.memory.unit }}</p>
                </div>
                <div class="chart-container">
                    <h4>Storage Usage</h4>
                    <div class="chart-wrapper">
                        <DoughnutChart v-if="storageChartData" :chart-data="storageChartData" :options="chartOptions" />
                    </div>
                    <p class="usage-text">{{ usageData.storage.used }}/{{ usageData.storage.total }} {{
                        usageData.storage.unit }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { apiService } from '@/services/apiService'
import DoughnutChart from '@/components/DoughnutChart.vue'

// Usage data
const usageData = ref<any>(null)

onMounted(async () => {
    usageData.value = await apiService.getUsageData()
})

// Chart options
const chartOptions = computed(() => ({
    responsive: true,
    maintainAspectRatio: false
}))

// CPU Chart Data
const cpuChartData = computed(() => {
    if (!usageData.value) return null
    const cpu = usageData.value.cpu
    return {
        labels: ['Used', 'Available'],
        datasets: [{
            data: [cpu.used, cpu.total - cpu.used],
            backgroundColor: ['#00a9e0', '#f4f4f4'],
            borderColor: ['#00a9e0', '#dddddd'],
            borderWidth: 2
        }]
    }
})

// Memory Chart Data
const memoryChartData = computed(() => {
    if (!usageData.value) return null
    const memory = usageData.value.memory
    return {
        labels: ['Used', 'Available'],
        datasets: [{
            data: [memory.used, memory.total - memory.used],
            backgroundColor: ['#00a9e0', '#f4f4f4'],
            borderColor: ['#00a9e0', '#dddddd'],
            borderWidth: 2
        }]
    }
})

// Storage Chart Data
const storageChartData = computed(() => {
    if (!usageData.value) return null
    const storage = usageData.value.storage
    return {
        labels: ['Used', 'Available'],
        datasets: [{
            data: [storage.used, storage.total - storage.used],
            backgroundColor: ['#00a9e0', '#f4f4f4'],
            borderColor: ['#00a9e0', '#dddddd'],
            borderWidth: 2
        }]
    }
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.usage-charts {
    h3 {
        color: $dark-text;
        margin-bottom: 2rem;
        font-size: 1.5rem;
        text-align: center;
    }

    .charts-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-bottom: 2rem;
    }

    .chart-container {
        text-align: center;

        h4 {
            color: $primary-blue;
            margin-bottom: 1rem;
            font-size: 1.1rem;
        }

        .chart-wrapper {
            height: 200px;
            margin-bottom: 1rem;
        }

        .usage-text {
            font-size: 0.9rem;
            color: $dark-text;
            font-weight: 500;
        }
    }
}
</style>