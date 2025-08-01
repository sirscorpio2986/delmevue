<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { apiService } from '@/services/apiService';
import ResourceCard from '@/components/ResourceCard.vue';

const resources = ref<any[]>([]);
const activities = ref<any[]>([]);

const getActivityIcon = (type: string) => {
    switch (type) {
        case 'add': return '➕';
        case 'scale': return '↔️';
        case 'alert': return '⚠️';
        case 'deploy': return '🚀';
        default: return '➡️';
    }
};

onMounted(async () => {
    resources.value = await apiService.getMyResources();
    activities.value = await apiService.getRecentActivity(); // Also fetch activity for consistency
});
</script>

<template>
    <div class="my-resources-view">
        <div class="page-header">
            <div>
                <h1 class="page-title">My Resources</h1>
                <p class="page-subtitle">Manage and monitor your provisioned cloud infrastructure and services.</p>
            </div>
            <button class="primary-btn">Provision New Resource</button>
        </div>

        <div class="resources-grid">
            <ResourceCard v-for="resource in resources" :key="resource.id" :resource="resource" />
        </div>

        <div class="main-content-grid">
            <div class="content-card">
                <h3 class="card-title">Recent Activity</h3>
                <ul class="activity-list">
                    <li v-for="activity in activities" :key="activity.id">
                        <span class="activity-icon">{{ getActivityIcon(activity.type) }}</span>
                        <div class="activity-text">
                            <p>{{ activity.action }}</p>
                            <span>{{ activity.timestamp }}</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="content-card">
                <h3 class="card-title">Quick Actions</h3>
                <div class="actions-grid">
                    <button class="action-btn">Launch GPU Instance</button>
                    <button class="action-btn">Create AI Lab</button>
                    <button class="action-btn">Deploy Model Endpoint</button>
                    <button class="action-btn">Add Data Source</button>
                    <button class="action-btn">View Usage Report</button>
                    <button class="action-btn">Security Settings</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.my-resources-view {
    // This page will use the global light theme's background, which is set on the main content area
}

.page-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid $border-grey;
}

.page-title {
    font-size: 2.25rem;
    font-weight: 800;
    color: $text-dark;
}

.page-subtitle {
    color: $text-light;
    margin-top: 0.5rem;
}

.primary-btn {
    background-color: $primary-blue;
    color: $white;
    border: none;
    border-radius: $border-radius;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: $box-shadow;

    &:hover {
        background-color: darken($primary-blue, 10%);
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(36, 40, 205, 0.2);
    }
}

.resources-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
}

// Enhanced content sections with better styling
.main-content-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1.5rem;
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

    .card-title {
        font-size: 1.125rem;
        font-weight: 600;
        color: $text-dark;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid $primary-blue;
    }
}

.activity-list {
    list-style: none;
    padding: 0;

    li {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.75rem 0;
        border-bottom: 1px solid $border-grey;
        transition: background-color 0.2s ease;

        &:last-child {
            border-bottom: none;
        }

        &:hover {
            background-color: #f8f9fa;
            border-radius: $border-radius;
            padding-left: 0.5rem;
            padding-right: 0.5rem;
            margin-left: -0.5rem;
            margin-right: -0.5rem;
        }
    }

    .activity-icon {
        font-size: 1.25rem;
        width: 24px;
        text-align: center;
    }

    .activity-text p {
        font-weight: 500;
        margin-bottom: 0.25rem;
        color: $text-dark;
    }

    .activity-text span {
        font-size: 0.875rem;
        color: $text-light;
    }
}

.actions-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.action-btn {
    background-color: #f8fafc;
    border: 1px solid $border-grey;
    padding: 0.75rem;
    border-radius: $border-radius;
    text-align: left;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    color: $text-dark;
    font-size: 0.875rem;

    &:hover {
        background-color: $primary-blue;
        color: $white;
        border-color: $primary-blue;
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(36, 40, 205, 0.2);
    }
}
</style>