<template>
    <main class="account-view">
        <div class="container">
            <div class="account-card">
                <h1 v-if="authStore.user">Welcome, {{ authStore.user.name }}!</h1>
                <h1 v-else>Welcome!</h1>
                <p>This is your protected account dashboard.</p>

                <!-- Tab Navigation -->
                <nav class="tab-nav">
                    <RouterLink to="/account" class="tab-link">Usage</RouterLink>
                    <RouterLink to="/account/billing" class="tab-link">Billing</RouterLink>
                    <RouterLink to="/account/support" class="tab-link">Support</RouterLink>
                </nav>

                <!-- Child Route Content -->
                <div class="tab-content">
                    <RouterView />
                </div>

                <div v-if="authStore.user" class="user-info">
                    <h3>Account Information</h3>
                    <div class="info-item">
                        <strong>Username:</strong> {{ authStore.user.username }}
                    </div>
                    <div class="info-item">
                        <strong>Email:</strong> {{ authStore.user.email }}
                    </div>
                    <div class="info-item">
                        <strong>User ID:</strong> {{ authStore.user.id }}
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store/authStore'

const authStore = useAuthStore()
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.account-view {
    min-height: 100vh;
    padding: 2rem 1rem;
    background: $light-grey-bg;
}

.container {
    max-width: 800px;
    margin: 0 auto;
}

.account-card {
    background: $brand-white;
    padding: 3rem;
    border-radius: $border-radius;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid $medium-grey;

    h1 {
        color: $brand-blue;
        margin-bottom: 1rem;
        font-size: 2.25rem;
    }

    >p {
        font-size: 1.1rem;
        color: $dark-grey-text;
        margin-bottom: 2rem;
        opacity: 0.8;
    }
}

.tab-nav {
    display: flex;
    border-bottom: 2px solid $medium-grey;
    margin: 2rem 0;

    .tab-link {
        padding: 1rem 2rem;
        text-decoration: none;
        color: $dark-grey-text;
        font-weight: 500;
        border-bottom: 3px solid transparent;
        transition: all 0.2s ease;

        &:hover {
            color: $brand-blue;
            background: rgba(0, 169, 224, 0.05);
        }

        &.router-link-exact-active {
            color: $brand-blue;
            border-bottom-color: $brand-blue;
            background: rgba(0, 169, 224, 0.05);
        }
    }
}

.tab-content {
    margin: 2rem 0;
}

.user-info {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid $medium-grey;

    h3 {
        color: $dark-grey-text;
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
    }

    .info-item {
        margin-bottom: 1rem;
        font-size: 1rem;
        color: $dark-grey-text;

        strong {
            color: $brand-blue;
            margin-right: 0.5rem;
        }
    }
}

@media (max-width: 768px) {
    .account-card {
        padding: 2rem 1.5rem;

        h1 {
            font-size: 1.75rem;
        }
    }
}
</style>