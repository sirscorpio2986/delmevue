<template>
    <main class="login-view">
        <div class="login-container">
            <div class="login-card">
                <h1>{{ t('login.title') }}</h1>
                <form @submit.prevent="handleLogin">
                    <div class="form-group">
                        <label for="username">{{ t('login.username') }}</label>
                        <input id="username" v-model="username" type="text" required
                            :placeholder="t('login.usernamePlaceholder')" />
                    </div>
                    <div class="form-group">
                        <label for="password">{{ t('login.password') }}</label>
                        <input id="password" v-model="password" type="password" required
                            :placeholder="t('login.passwordPlaceholder')" />
                    </div>
                    <div v-if="errorMessage" class="error-message">
                        {{ errorMessage }}
                    </div>
                    <button type="submit" class="login-btn" :disabled="isLoading">
                        {{ isLoading ? t('login.loggingIn') : t('login.loginButton') }}
                    </button>
                </form>
                <div class="demo-credentials">
                    <p><strong>{{ t('login.demoCredentials') }}</strong></p>
                    <p>{{ t('login.demoUsername') }}</p>
                    <p>{{ t('login.demoPassword') }}</p>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from '@/store/authStore'

const { t } = useI18n()

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()

// Form state
const username = ref('')
const password = ref('')
const errorMessage = ref('')
const isLoading = ref(false)

const handleLogin = async () => {
    errorMessage.value = ''
    isLoading.value = true

    try {
        const success = authStore.login(username.value, password.value)

        if (success) {
            // Check for redirect path in query parameters
            const redirectPath = route.query.redirect as string
            if (redirectPath) {
                await router.push(redirectPath)
            } else {
                // Default redirect to account page
                await router.push('/account')
            }
        } else {
            errorMessage.value = t('login.invalidCredentials')
        }
    } catch (error) {
        errorMessage.value = t('login.loginError')
    } finally {
        isLoading.value = false
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.login-view {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $light-grey-bg;
    padding: 2rem 1rem;
}

.login-container {
    width: 100%;
    max-width: 400px;
}

.login-card {
    background: $brand-white;
    padding: 2.5rem;
    border-radius: $border-radius;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid $medium-grey;

    h1 {
        text-align: center;
        color: $brand-blue;
        margin-bottom: 2rem;
        font-size: 1.75rem;
    }
}

.form-group {
    margin-bottom: 1.5rem;

    label {
        display: block;
        margin-bottom: 0.5rem;
        color: $dark-grey-text;
        font-weight: 500;
    }

    input {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid $medium-grey;
        border-radius: $border-radius;
        font-size: 1rem;
        transition: border-color 0.2s ease;

        &:focus {
            outline: none;
            border-color: $brand-blue;
        }

        &::placeholder {
            color: #999;
        }
    }
}

.error-message {
    color: #e74c3c;
    text-align: center;
    margin-bottom: 1rem;
    font-size: 0.9rem;
}

.login-btn {
    width: 100%;
    background: $brand-blue;
    color: $brand-white;
    border: none;
    border-radius: $border-radius;
    padding: 0.75rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover:not(:disabled) {
        background: darken($brand-blue, 10%);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
}

.demo-credentials {
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid $medium-grey;
    text-align: center;
    font-size: 0.9rem;
    color: #666;

    p {
        margin: 0.25rem 0;
    }
}

@media (max-width: 480px) {
    .login-card {
        padding: 2rem 1.5rem;
    }
}
</style>