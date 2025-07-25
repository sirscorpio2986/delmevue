<template>
    <Doughnut :data="chartData" :options="options" />
</template>

<script setup lang="ts">
import { Doughnut } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js'
import type { ChartData, ChartOptions } from 'chart.js'

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement)

// Define props
defineProps<{
    chartData: ChartData<'doughnut'>
    options?: ChartOptions<'doughnut'>
}>()
</script>

<style scoped>
/* Chart styles can go here if needed */
</style>