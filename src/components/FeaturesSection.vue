<template>
    <section class="features-section">
        <div class="container">
            <h2>Our Platform Services</h2>
            <p class="section-subtitle">We have many different AI services to choose from. Compare and find the best
                solutions for your enterprise needs.</p>

            <div v-if="loading" class="loading-state">
                <p>Loading platform services...</p>
            </div>

            <ul v-else class="card-deck__cards container-fluid container-lg d-flex gap-medium gap-md-large p-0">
                <li v-for="service in platformServices" :key="service.id" class="w-100">
                    <article class="tn-card d-flex flex-column h-100" :style="{
                        '--img-url': `url('${service.imageUrl}')`,
                        '--img-url-1x': `url('${service.imageUrl}') 1x`,
                        '--img-url-2x': `url('${service.imageUrl}') 2x`,
                        '--img-url-mobile': `url('${service.imageUrl}')`,
                        '--img-url-desktop': `url('${service.imageUrl}')`
                    }">
                        <div class="tn-card__image border border-bottom-0 border-primary" role="img"
                            :aria-label="service.ariaLabel">
                        </div>
                        <div
                            class="tn-card__content d-flex flex-column flex-grow-1 border border-primary bg-white border-top-0">
                            <h3 class="font-zebra mb-xsmall mt-none mb-lg-medium text-primary">{{ service.title }}</h3>
                            <div class="tnse-editorial font-mango mb-large mb-lg-xlarge text-secondary">
                                <p>{{ service.description }}</p>
                            </div>
                            <button
                                class="tn-button mt-auto align-self-start fs-button-small fs-lg-button-medium fw-medium"
                                :title="service.buttonTitle"
                                @click="service.buttonText === 'Explore' ? scrollToServices() : null">
                                {{ service.buttonText }}
                            </button>
                        </div>
                    </article>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { apiService } from '@/services/apiService'
import type { PlatformService } from '@/types/platformService'

const platformServices = ref<PlatformService[]>([])
const loading = ref(true)

const scrollToServices = () => {
    const servicesSection = document.getElementById('service-offerings');
    if (servicesSection) {
        servicesSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Emit an event to switch to GPU services tab
        setTimeout(() => {
            window.dispatchEvent(new CustomEvent('switchToGpuServices'));
        }, 500);
    }
};

const loadPlatformServices = async () => {
    try {
        loading.value = true
        const services = await apiService.getPlatformServices()
        platformServices.value = services
    } catch (error) {
        console.error('Failed to load platform services:', error)
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    loadPlatformServices()
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

:root {
    --bs-breakpoint-xxxs: 0;
    --bs-breakpoint-xxs: 360px;
    --bs-breakpoint-xs: 480px;
    --bs-breakpoint-sm: 576px;
    --bs-breakpoint-md: 768px;
    --bs-breakpoint-lg: 992px;
    --bs-breakpoint-xl: 1200px;
    --bs-border-radius: 0.375rem;
    --bs-border-radius-sm: 0.375rem;
    --bs-border-radius-lg: 1.5rem;
    --bs-border-radius-xl: 1rem;
    --bs-border-radius-2xl: 2rem;
    --bs-border-radius-pill: 625rem;
}

.features-section {
    padding: 6rem 0;
    background: #fafbfc;

    .container {
        max-width: 100%;
        margin: 0 auto;
        padding: 0;
    }

    h2 {
        text-align: center;
        font-size: 2.25rem;
        line-height: 1.4;
        margin: 0 0 1rem 0;
        color: $brand-blue;
        font-weight: 700;
        font-family: $font-family-base;
    }

    .section-subtitle {
        text-align: center;
        font-size: 1.125rem;
        color: $text-light;
        margin: 0 auto 4rem auto;
        max-width: 600px;
        font-family: $font-family-base;
        line-height: 1.6;
    }

    .loading-state {
        text-align: center;
        padding: 3rem 0;
        color: $text-light;
        font-family: $font-family-base;

        p {
            margin: 0;
            font-size: 1rem;
        }
    }

    // Responsive card deck styling - spans full width
    .card-deck__cards {
        width: 100vw;
        margin-left: calc(-50vw + 50%);
        margin-right: calc(-50vw + 50%);
        padding: 1rem;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        overflow-x: auto;
        scrollbar-width: none;

        @media (min-width: 768px) {
            padding: 1.5rem;
            gap: 1.5rem;
        }

        @media (min-width: 1200px) {
            padding: 2rem;
            gap: 2rem;
        }
    }

    // Container overrides for full width
    .container-fluid {
        width: 100%;
        padding: 0;
        margin: 0;
    }

    .container-lg {
        max-width: none;
        width: 100%;
        padding: 0;
        margin: 0;
    }

    .d-flex {
        display: flex !important;
    }

    .gap-medium {
        gap: 1rem !important;
    }

    @media (min-width: 768px) {
        .gap-md-large {
            gap: 1.5rem !important;
        }
    }

    .p-0 {
        padding: 0 !important;
    }

    // Responsive card grid
    .w-100 {
        width: 100%;
        flex: 0 0 100%;
        min-width: 280px;

        // Mobile: 1 column
        @media (max-width: 767px) {
            flex: 0 0 100%;
        }

        // Tablet: 2 columns
        @media (min-width: 768px) and (max-width: 1199px) {
            flex: 0 0 calc(50% - 0.75rem);
        }

        // Desktop: 3 columns
        @media (min-width: 1200px) {
            flex: 0 0 calc(33.333% - 1.33rem);
        }
    }

    // Telenor card styling - EXACT match to Desired Card
    .tn-card {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
        transition: all 0.3s ease;
        background: transparent;
    }

    .tn-card__image {
        aspect-ratio: 16/9;
        background-image: var(--img-url);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        border-top-left-radius: 1.5rem;
        border-top-right-radius: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid $brand-blue;

        // Responsive image handling like Desired Card
        @media (min-width: 768px) {
            background-image: var(--img-url-desktop);
        }
    }

    .tn-card__content {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        background: transparent;
        padding: 1.5rem;
        border-bottom-left-radius: 1.5rem;
        border-bottom-right-radius: 1.5rem;
    }

    .border {
        border: 1px solid #dee2e6 !important;
    }

    .border-bottom-0 {
        border-bottom: 0 !important;
    }

    .border-top-0 {
        border-top: 0 !important;
    }

    .bg-white {
        background-color: transparent !important;
    }

    .flex-column {
        flex-direction: column !important;
    }

    .flex-grow-1 {
        flex-grow: 1 !important;
    }

    .h-100 {
        height: 100% !important;
    }

    // Typography styling - EXACT Telenor classes
    .font-zebra {
        font-family: $font-family-base;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.4;
        color: $brand-black;
        margin: 0 0 0.5rem 0;
    }

    .font-mango {
        font-family: $font-family-base;
        font-size: 1rem;
        line-height: 1.6;
        font-weight: 400;
        color: $dark-grey-text;
        margin: 0 0 2rem 0;

        p {
            margin: 0;
        }
    }

    .text-primary {
        color: $brand-black !important;
    }

    .text-secondary {
        color: $dark-grey-text !important;
    }

    // Spacing utilities - EXACT Telenor spacing
    .mb-xsmall {
        margin-bottom: 0.5rem;
    }

    .mb-large {
        margin-bottom: 2rem;
    }

    .mb-lg-medium {
        @media (min-width: 992px) {
            margin-bottom: 1rem;
        }
    }

    .mb-lg-xlarge {
        @media (min-width: 992px) {
            margin-bottom: 3rem;
        }
    }

    .mt-none {
        margin-top: 0;
    }

    .mt-auto {
        margin-top: auto;
    }

    .align-self-start {
        align-self: flex-start;
    }

    // Button styling - EXACT Telenor button
    .tn-button {
        background: $brand-blue;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 625rem;
        font-weight: 600;
        font-size: 0.875rem;
        text-decoration: none;
        display: inline-block;
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .fs-button-small {
        font-size: 0.875rem;
    }

    .fs-lg-button-medium {
        @media (min-width: 992px) {
            font-size: 1rem;
        }
    }

    .fw-medium {
        font-weight: 500;
    }


}
</style>