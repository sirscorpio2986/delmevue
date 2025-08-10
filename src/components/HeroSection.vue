<template>
    <section class="primary-hero">
        <div class="container">
            <div class="content-column">
                <div class="text-group">
                    <h1 class="hero-title">{{ t('hero.title') }}</h1>
                    <div class="hero-editorial">
                        <p>{{ t('hero.subtitle1') }}</p>
                        <p>{{ t('hero.subtitle2') }}</p>
                    </div>
                </div>
                <div class="actions-group d-lg-flex gap-large mt-xlarge">
                    <button @click="scrollToServices" class="tn-button tn-button--dark"
                        :title="t('hero.explorePlatform')">
                        {{ t('hero.explorePlatform') }}
                    </button>
                    <a href="#" class="tn-button tn-button--link tn-button--dark mt-medium mt-lg-0" target="_self"
                        :title="t('hero.scheduleDemo')">{{ t('hero.scheduleDemo') }}</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

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
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.primary-hero {
    // IMPORTANT: Replace this with your actual background image URL
    // background-image: url('//images.ctfassets.net/ccep2d99z1uv/4KO1KMVK7LDgUO4z5WhxRi/1fe2e89685c66e342ad17cdc4e889684/Hero-desktop-GalaxyZFold7-2200x720-b__2_.jpg?fm=webp&q=80');
    background-image: url('@/assets/Hero-desktop-GalaxyZFold7-2200x720-b__2_.png');
    background-size: cover;
    background-position: center;
    width: 100%;
    color: $white;
    padding: 6rem 1rem;
    display: flex;
    align-items: center;
}

.container {
    max-width: 1280px;
    margin: 0 auto;
}

.content-column {
    width: 41.66%; // Corresponds to col-xl-5
}

.text-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.hero-title {
    font-size: 3.5rem; // Equivalent to 'font-whale'
    font-weight: 800;
    line-height: 1.1;
    color: $white;
}

.hero-editorial {
    font-size: 1.1rem; // Equivalent to 'font-zebra'
    line-height: 1.6;
}

// Utility classes
.d-lg-flex {
    @media (min-width: 992px) {
        display: flex !important;
    }
}

.gap-large {
    gap: 1.5rem;
}

.mt-xlarge {
    margin-top: 2.5rem;
}

.mt-medium {
    margin-top: 1rem;
}

.mt-lg-0 {
    @media (min-width: 992px) {
        margin-top: 0 !important;
    }
}

.actions-group {
    display: flex;
    flex-direction: column;

    @media (min-width: 992px) {
        flex-direction: row;
    }
}

// Telenor Button System
.tn-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    border: 2px solid transparent;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    min-height: 48px;

    &--dark {
        background-color: rgba(0, 0, 0, 0.7);
        color: $white;
        border-color: $white;

        &:hover {
            background-color: $white;
            color: $black;
            border-color: $white;
        }
    }

    &--link {
        background-color: transparent;
        border-color: transparent;

        &.tn-button--dark {
            color: $white;

            &:hover {
                color: $white;
                background-color: rgba(255, 255, 255, 0.1);
                text-decoration: underline;
            }
        }
    }
}
</style>
