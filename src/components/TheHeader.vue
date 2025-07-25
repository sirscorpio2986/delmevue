<template>
    <header>
        <nav>
            <div class="logo-area">
                <RouterLink to="/" class="logo-link">
                    <span>CloudPortal</span>
                </RouterLink>
            </div>
            <div class="nav-links">
                <RouterLink to="/products">Console</RouterLink>
                <RouterLink to="/category/compute">Compute</RouterLink>
                <RouterLink to="/category/ai & ml">AI & ML</RouterLink>
                <RouterLink to="/category/storage">Storage</RouterLink>
                <RouterLink to="/category/networking">Networking</RouterLink>
            </div>
            <div class="nav-actions">
                <template v-if="!authStore.isLoggedIn">
                    <RouterLink to="/login" class="login-link">
                        <button class="login-btn">Sign In</button>
                    </RouterLink>
                </template>
                <template v-else>
                    <RouterLink to="/account" class="account-link">Dashboard</RouterLink>
                    <RouterLink to="/purchase" class="account-link">Billing</RouterLink>
                    <button @click="authStore.logout" class="logout-btn">Sign Out</button>
                </template>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/store/authStore'

const authStore = useAuthStore()
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

header {
    position: sticky;
    top: 0;
    background: $white;
    border-bottom: 1px solid #e5e7eb;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    z-index: 1000;

    nav {
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 70px;
    }
}

.logo-area {
    .logo-link {
        text-decoration: none;
        color: inherit;

        span {
            font-weight: 700;
            font-size: 1.5rem;
            color: $primary-blue;
            letter-spacing: -0.5px;
        }
    }
}

.nav-links {
    display: flex;
    gap: 2.5rem;
    flex: 1;
    justify-content: center;

    a {
        text-decoration: none;
        color: $dark-text;
        font-weight: 500;
        font-size: 1rem;
        padding: 0.5rem 0;
        position: relative;
        transition: color 0.2s ease;

        &:hover {
            color: $primary-blue;
        }

        &.router-link-active {
            color: $primary-blue;

            &::after {
                content: '';
                position: absolute;
                bottom: -1rem;
                left: 0;
                right: 0;
                height: 3px;
                background: $primary-blue;
                border-radius: 2px;
            }
        }
    }
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    .login-link {
        text-decoration: none;
    }

    .account-link {
        text-decoration: none;
        color: $dark-text;
        font-weight: 500;
        font-size: 0.95rem;
        transition: color 0.2s ease;
        padding: 0.5rem 0;

        &:hover {
            color: $primary-blue;
        }

        &.router-link-active {
            color: $primary-blue;
        }
    }

    .login-btn {
        background: $primary-blue;
        color: $white;
        border: none;
        border-radius: 25px;
        padding: 0.7rem 1.8rem;
        font-weight: 600;
        font-size: 0.95rem;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
            background: darken($primary-blue, 8%);
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(0, 169, 224, 0.3);
        }
    }

    button {
        border: none;
        border-radius: 25px;
        padding: 0.7rem 1.5rem;
        font-weight: 600;
        font-size: 0.95rem;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .logout-btn {
        background: #f3f4f6;
        color: $dark-text;

        &:hover {
            background: #e5e7eb;
            transform: translateY(-1px);
        }
    }
}

// Mobile hamburger menu (simplified)
@media (max-width: 968px) {
    .nav-links {
        display: none; // Hide navigation links on mobile
    }

    header nav {
        padding: 1rem;
    }

    .nav-actions {
        gap: 1rem;

        button,
        .account-link {
            padding: 0.6rem 1.2rem;
            font-size: 0.9rem;
        }
    }
}

@media (max-width: 640px) {
    .logo-area .logo-link span {
        font-size: 1.3rem;
    }

    .nav-actions {
        .account-link {
            display: none; // Hide account links on very small screens
        }
    }
}
</style>