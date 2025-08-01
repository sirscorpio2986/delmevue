<script setup lang="ts">
defineProps<{
    resource: {
        name: string;
        type: string;
        status: string;
        utilization: number;
        icon: string;
    }
}>();

const getIconSvg = (icon: string) => {
    // In a real app, you might have a more robust icon system.
    // For now, we'll return simple SVG paths.
    switch (icon) {
        case 'cluster': return '<path d="M5 11H9V5H5V11ZM11 5V11H19V5H11ZM5 19H9V13H5V19ZM11 19H19V13H11V19Z" />';
        case 'lab': return '<path d="M7 2H17V4H19V14H17V16H14V22H10V16H7V14H5V4H7V2M15 4H9V6H15V4M15 8H9V10H15V8M15 12H9V14H15V12Z" />';
        case 'storage': return '<path d="M4 6H20V8H4V6M4 10H20V12H4V10M4 14H20V16H4V14M4 18H12V20H4V18Z" />';
        case 'endpoint': return '<path d="M3 11L11.5 6.5L20 11L11.5 15.5L3 11M11.5 21L20 16.5V11.7L11.5 16.2L3 11.7V16.5L11.5 21Z" />';
        default: return '';
    }
};
</script>

<template>
    <div class="resource-card">
        <div class="card-header">
            <div class="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" v-html="getIconSvg(resource.icon)"></svg>
            </div>
            <span :class="['status-pill', resource.status.toLowerCase()]">{{ resource.status }}</span>
        </div>
        <div class="card-body">
            <h3 class="resource-type">{{ resource.type }}</h3>
            <h2 class="resource-name">{{ resource.name }}</h2>
            <div class="utilization-text">Utilization: {{ resource.utilization }}%</div>
            <div class="progress-bar">
                <div class="progress" :style="{ width: resource.utilization + '%' }"></div>
            </div>
        </div>
        <div class="card-footer">
            <a href="#" class="manage-link">Manage</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.resource-card {
    background-color: $white;
    border: 1px solid #e2e8f0;
    border-radius: $border-radius;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    transition: all 0.2s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    }
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
}

.icon-wrapper {
    background-color: #eef2ff;
    color: #6366f1;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 24px;
        height: 24px;
        fill: currentColor;
    }
}

.status-pill {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;

    &.running {
        background-color: #d1fae5;
        color: #065f46;
    }

    &.active {
        background-color: #d1fae5;
        color: #065f46;
    }
}

.card-body {
    flex-grow: 1;
}

.resource-type {
    font-size: 0.875rem;
    font-weight: 600;
    color: $primary-blue;
    margin-bottom: 0.25rem;
}

.resource-name {
    font-size: 1.25rem;
    font-weight: 700;
    color: $text-dark;
    margin-bottom: 1rem;
}

.utilization-text {
    font-size: 0.875rem;
    color: $text-light;
    margin-bottom: 0.5rem;
}

.progress-bar {
    background-color: #e2e8f0;
    height: 6px;
    border-radius: 3px;
    overflow: hidden;
}

.progress {
    background-color: $primary-blue;
    height: 100%;
    border-radius: 3px;
}

.card-footer {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid #f1f5f9;
    text-align: right;
}

.manage-link {
    font-weight: 600;
    color: $link-blue;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
}
</style>