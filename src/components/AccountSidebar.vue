<template>
    <aside class="sidebar">
        <div class="sidebar-top">
            <div class="logo-area">
                <RouterLink to="/">{{ t('sidebar.myCloud') }}</RouterLink>
            </div>
            <nav class="sidebar-nav">
                <div class="nav-group">
                    <span class="group-title">{{ t('sidebar.dashboard') }}</span>
                    <ul>
                        <li>
                            <RouterLink to="/account" class="nav-link">{{ t('sidebar.overview') }}</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/account/resources" class="nav-link">{{ t('sidebar.myResources') }}
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/account/usage" class="nav-link">{{ t('sidebar.usageAnalytics') }}
                            </RouterLink>
                        </li>

                    </ul>
                </div>
                <div class="nav-group">
                    <span class="group-title">{{ t('sidebar.services') }}</span>
                    <ul>
                        <li>
                            <RouterLink to="/account/marketplace" class="nav-link">{{ t('sidebar.marketplace') }}
                            </RouterLink>
                        </li>
                        <li><a href="#" class="nav-link">{{ t('sidebar.apiManagement') }}</a></li>
                        <li><a href="#" class="nav-link">{{ t('sidebar.modelRegistry') }}</a></li>
                    </ul>
                </div>
                <div class="nav-group">
                    <span class="group-title">{{ t('sidebar.support') }}</span>
                    <ul>
                        <li>
                            <RouterLink to="/account/support" class="nav-link">{{ t('sidebar.supportCenter') }}
                            </RouterLink>
                        </li>
                        <li><a href="#" class="nav-link">{{ t('sidebar.documentation') }}</a></li>
                        <li><a href="#" class="nav-link">{{ t('sidebar.systemStatus') }} <span
                                    class="status-indicator">99.9%</span></a>
                        </li>
                    </ul>
                </div>
                <div class="nav-group">
                    <span class="group-title">{{ t('sidebar.administration') }}</span>
                    <ul>
                        <li>
                            <RouterLink to="/account/admin" class="nav-link">{{ t('sidebar.adminSettings') }}
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div class="usage-stats">
            <h3 class="stats-title">{{ t('sidebar.currentMonth') }}</h3>
            <div class="stat-item">
                <div class="stat-header">
                    <span>{{ t('sidebar.totalSpend') }}</span>
                    <span>+7%</span>
                </div>
                <div class="stat-value">€1,247</div>
            </div>
            <div class="stat-item">
                <div class="stat-header">
                    <span>{{ t('sidebar.gpuHours') }}</span>
                </div>
                <div class="stat-value">847/1000</div>
                <div class="progress-bar">
                    <div class="progress" style="width: 84.7%;"></div>
                </div>
            </div>
            <div class="stat-item">
                <div class="stat-header">
                    <span>{{ t('sidebar.storage') }}</span>
                </div>
                <div class="stat-value">1.2TB/2TB</div>
                <div class="progress-bar">
                    <div class="progress" style="width: 60%;"></div>
                </div>
            </div>
            <RouterLink to="/account" class="details-btn">{{ t('sidebar.viewDashboard') }}</RouterLink>
        </div>
    </aside>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.sidebar {
    background-color: #1e293b;
    color: #94a3b8;
    width: 260px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* Pushes stats to bottom */
    border-right: 1px solid $border-color;
}

.sidebar-top {
    padding: 1.5rem;
}

.logo-area {
    margin-bottom: 2rem;

    a {
        font-size: 1.5rem;
        font-weight: 700;
        color: $text-primary;
        text-decoration: none;
    }
}

.sidebar-nav {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.group-title {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    color: #64748b;
    padding: 0 0.5rem;
    margin-bottom: 0.5rem;
    display: block;
}

ul {
    list-style: none;
    padding: 0;
}

.nav-link {
    display: block;
    padding: 0.75rem 0.5rem;
    border-radius: $border-radius;
    color: #cbd5e1;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.2s ease, color 0.2s ease;

    &:hover {
        background-color: #334155;
        color: $white;
    }

    &.router-link-exact-active {
        background-color: $primary-blue;
        color: $white;
    }
}

.status-indicator {
    float: right;
    color: #10b981;
    font-weight: 600;
}

.usage-stats {
    padding: 1.5rem;
    border-top: 1px solid $border-color;
}

.stats-title {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    color: #64748b;
    margin-bottom: 1rem;
}

.stat-item {
    margin-bottom: 1rem;
    font-size: 0.875rem;
}

.stat-header {
    display: flex;
    justify-content: space-between;
    color: #94a3b8;
    margin-bottom: 0.25rem;
}

.stat-header span:last-child {
    color: #10b981;
}

.stat-value {
    color: $text-primary;
    font-weight: 500;
}

.progress-bar {
    background-color: #334155;
    height: 4px;
    border-radius: 2px;
    margin-top: 0.5rem;
    overflow: hidden;
}

.progress {
    background-color: $primary-blue;
    height: 100%;
    border-radius: 2px;
}

.details-btn {
    width: 100%;
    padding: 0.75rem;
    background-color: #334155;
    color: $text-primary;
    border: none;
    border-radius: $border-radius;
    font-weight: 600;
    cursor: pointer;
    margin-top: 1rem;

    &:hover {
        background-color: lighten(#334155, 5%);
    }
}
</style>