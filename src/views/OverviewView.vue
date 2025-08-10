<template>
    <div class="overview-dashboard">
        <div class="dashboard-header">
            <h1 class="page-title">{{ t('overview.title') }}</h1>
            <p class="page-subtitle">{{ t('overview.subtitle') }}</p>
        </div>

        <!-- Stats Cards Grid -->
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-icon gpu-icon">🖥️</div>
                <div class="stat-content">
                    <h3 class="stat-title">{{ t('overview.gpuHours') }}</h3>
                    <div class="stat-value">{{ stats.gpuHours.used }}/{{ stats.gpuHours.total }}</div>
                    <div class="stat-unit">{{ stats.gpuHours.unit }}</div>
                    <div class="stat-progress">
                        <div class="progress-bar"
                            :style="{ width: `${(stats.gpuHours.used / stats.gpuHours.total) * 100}%` }"></div>
                    </div>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-icon storage-icon">💾</div>
                <div class="stat-content">
                    <h3 class="stat-title">{{ t('overview.storage') }}</h3>
                    <div class="stat-value">{{ stats.storage.used }}/{{ stats.storage.total }}</div>
                    <div class="stat-unit">{{ stats.storage.unit }}</div>
                    <div class="stat-progress">
                        <div class="progress-bar"
                            :style="{ width: `${(stats.storage.used / stats.storage.total) * 100}%` }"></div>
                    </div>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-icon egress-icon">📤</div>
                <div class="stat-content">
                    <h3 class="stat-title">{{ t('overview.dataEgress') }}</h3>
                    <div class="stat-value">{{ stats.dataEgress.used }}/{{ stats.dataEgress.total }}</div>
                    <div class="stat-unit">{{ stats.dataEgress.unit }}</div>
                    <div class="stat-progress">
                        <div class="progress-bar"
                            :style="{ width: `${(stats.dataEgress.used / stats.dataEgress.total) * 100}%` }"></div>
                    </div>
                </div>
            </div>

            <div class="stat-card spending">
                <div class="stat-icon spending-icon">💰</div>
                <div class="stat-content">
                    <h3 class="stat-title">{{ t('overview.thisMonthSpend') }}</h3>
                    <div class="stat-value">{{ stats.thisMonthSpend.currency }}{{ stats.thisMonthSpend.amount }}</div>
                    <div class="stat-change" :class="{ positive: stats.thisMonthSpend.change.startsWith('+') }">
                        {{ stats.thisMonthSpend.change }}
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Content Grid -->
        <div class="dashboard-content">
            <!-- Recent Activity -->
            <div class="content-section">
                <div class="section-header">
                    <h2 class="section-title">{{ t('overview.recentActivity') }}</h2>
                    <button class="view-all-btn">{{ t('overview.viewAll') }}</button>
                </div>
                <div class="activity-list">
                    <div v-for="activity in recentActivity" :key="activity.id" class="activity-item"
                        :class="activity.status">
                        <div class="activity-icon" :class="getActivityIcon(activity.type)">
                            {{ getActivityIcon(activity.type) }}
                        </div>
                        <div class="activity-content">
                            <h4 class="activity-title">{{ activity.title }}</h4>
                            <p class="activity-description">{{ activity.description }}</p>
                            <span class="activity-time">{{ formatTimestamp(activity.timestamp) }}</span>
                        </div>
                        <div class="activity-status" :class="activity.status">
                            <span class="status-dot"></span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Quick Actions -->
            <div class="content-section">
                <div class="section-header">
                    <h2 class="section-title">{{ t('overview.quickActions') }}</h2>
                </div>
                <div class="quick-actions">
                    <button class="action-btn primary">
                        <span class="action-icon">🚀</span>
                        <span class="action-text">{{ t('overview.launchGpuInstance') }}</span>
                    </button>
                    <button class="action-btn">
                        <span class="action-icon">📊</span>
                        <span class="action-text">{{ t('overview.viewUsageReport') }}</span>
                    </button>
                    <button class="action-btn">
                        <span class="action-icon">🔧</span>
                        <span class="action-text">{{ t('overview.manageApiKeys') }}</span>
                    </button>
                    <button class="action-btn">
                        <span class="action-icon">📋</span>
                        <span class="action-text">{{ t('overview.createSupportTicket') }}</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { apiService } from '@/services/apiService';

const { t } = useI18n();

interface DashboardStats {
    gpuHours: { used: number; total: number; unit: string };
    storage: { used: number; total: number; unit: string };
    dataEgress: { used: number; total: number; unit: string };
    thisMonthSpend: { amount: number; currency: string; change: string };
}

interface Activity {
    id: string;
    type: string;
    title: string;
    description: string;
    timestamp: string;
    status: 'success' | 'warning' | 'info' | 'error';
}

const stats = ref<DashboardStats>({
    gpuHours: { used: 0, total: 0, unit: 'Hours' },
    storage: { used: 0, total: 0, unit: 'TB' },
    dataEgress: { used: 0, total: 0, unit: 'GB' },
    thisMonthSpend: { amount: 0, currency: '€', change: '0%' }
});

const recentActivity = ref<Activity[]>([]);

const fetchDashboardData = async () => {
    try {
        const [statsData, activityData] = await Promise.all([
            apiService.getDashboardStats(),
            apiService.getRecentActivity()
        ]);

        stats.value = statsData;
        recentActivity.value = activityData as Activity[];
    } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
    }
};

const getActivityIcon = (type: string): string => {
    const icons: { [key: string]: string } = {
        gpu_started: '🖥️',
        model_deployed: '🤖',
        billing_alert: '💰',
        api_key_rotated: '🔑',
        backup_completed: '💾',
        instance_stopped: '⏹️'
    };
    return icons[type] || '📋';
};

const formatTimestamp = (timestamp: string): string => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;

    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
};

onMounted(fetchDashboardData);
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.overview-dashboard {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.dashboard-header {
    margin-bottom: 2rem;

    .page-title {
        font-size: 2.25rem;
        font-weight: 800;
        margin: 0 0 0.5rem 0;
        color: $text-dark;
    }

    .page-subtitle {
        font-size: 1.125rem;
        color: $text-light;
        margin: 0;
    }
}

// Stats Grid
.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
}

.stat-card {
    background: $white;
    border: 1px solid #e2e8f0;
    border-radius: $border-radius;
    padding: 1.5rem;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    transition: all 0.2s ease;

    &:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transform: translateY(-2px);
    }

    &.spending {
        background: linear-gradient(135deg, $primary-blue, darken($primary-blue, 10%));
        color: $white;

        .stat-title,
        .stat-value,
        .stat-change {
            color: $white;
        }
    }
}

.stat-icon {
    font-size: 2rem;
    flex-shrink: 0;
}

.stat-content {
    flex: 1;
}

.stat-title {
    font-size: 0.875rem;
    font-weight: 600;
    color: $text-light;
    margin: 0 0 0.5rem 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.stat-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: $text-dark;
    margin: 0 0 0.25rem 0;
}

.stat-unit {
    font-size: 0.875rem;
    color: $text-light;
    margin: 0 0 0.75rem 0;
}

.stat-change {
    font-size: 0.875rem;
    font-weight: 600;
    color: #ef4444;

    &.positive {
        color: #10b981;
    }
}

.stat-progress {
    height: 4px;
    background: #e2e8f0;
    border-radius: 2px;
    overflow: hidden;

    .progress-bar {
        height: 100%;
        background: $primary-blue;
        border-radius: 2px;
        transition: width 0.3s ease;
    }
}

// Dashboard Content
.dashboard-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
}

.content-section {
    background: $white;
    border: 1px solid #e2e8f0;
    border-radius: $border-radius;
    padding: 1.5rem;
}

.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

    .section-title {
        font-size: 1.25rem;
        font-weight: 600;
        margin: 0;
        color: $text-dark;
    }
}

.view-all-btn {
    background: none;
    border: none;
    color: $primary-blue;
    font-weight: 600;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: $border-radius;
    transition: background-color 0.2s ease;

    &:hover {
        background: rgba($primary-blue, 0.1);
    }
}

// Activity List
.activity-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.activity-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;
    border-radius: $border-radius;
    transition: background-color 0.2s ease;

    &:hover {
        background: #f8fafc;
    }

    &.success .activity-icon {
        color: #10b981;
    }

    &.warning .activity-icon {
        color: #f59e0b;
    }

    &.info .activity-icon {
        color: #3b82f6;
    }

    &.error .activity-icon {
        color: #ef4444;
    }
}

.activity-icon {
    font-size: 1.25rem;
    flex-shrink: 0;
    width: 2rem;
    text-align: center;
}

.activity-content {
    flex: 1;

    .activity-title {
        font-size: 0.875rem;
        font-weight: 600;
        margin: 0 0 0.25rem 0;
        color: $text-dark;
    }

    .activity-description {
        font-size: 0.75rem;
        color: $text-light;
        margin: 0 0 0.5rem 0;
        line-height: 1.4;
    }

    .activity-time {
        font-size: 0.75rem;
        color: $text-light;
    }
}

.activity-status {
    display: flex;
    align-items: center;

    .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;

        .success & {
            background: #10b981;
        }

        .warning & {
            background: #f59e0b;
        }

        .info & {
            background: #3b82f6;
        }

        .error & {
            background: #ef4444;
        }
    }
}

// Quick Actions
.quick-actions {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

.action-btn {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    border: 1px solid #e2e8f0;
    border-radius: $border-radius;
    background: $white;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: left;

    &:hover {
        border-color: $primary-blue;
        background: #f8fafc;
    }

    &.primary {
        background: $primary-blue;
        color: $white;
        border-color: $primary-blue;

        &:hover {
            background: darken($primary-blue, 10%);
        }
    }
}

.action-icon {
    font-size: 1.25rem;
    flex-shrink: 0;
}

.action-text {
    font-weight: 500;
    color: inherit;
}
</style>