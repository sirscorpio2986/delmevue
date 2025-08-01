<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useAuthStore } from '@/store/authStore';

const authStore = useAuthStore();
const searchQuery = ref('');

const scrollToMarketplace = () => {
    const marketplaceSection = document.getElementById('marketplace-section');
    if (marketplaceSection) {
        marketplaceSection.scrollIntoView({ behavior: 'smooth' });
    }
};
</script>

<template>
    <header class="tn-page-header">
        <div class="container">
            <nav aria-label="Solutions" class="tn-page-header__market-navigation">
                <ul class="d-flex tn-page-header__markets">
                    <li class="tn-page-header__market">
                        <a href="/"
                            class="cnt-link d-inline-block tn-page-header__market__link tn-page-header__market__link--active"
                            target="_self" title="Individual Solutions">
                            <span class="cnt-link__text cnt-link__text--no-hover">Individual</span>
                        </a>
                    </li>
                    <li class="tn-page-header__market">
                        <a href="/enterprise/" class="cnt-link d-inline-block tn-page-header__market__link"
                            target="_self" title="Enterprise Solutions">
                            <span class="cnt-link__text cnt-link__text--no-hover">Enterprise</span>
                        </a>
                    </li>
                    <li class="tn-page-header__market">
                        <a href="/partners/" class="cnt-link d-inline-block tn-page-header__market__link" target="_self"
                            title="Partner Solutions">
                            <span class="cnt-link__text cnt-link__text--no-hover">Partners</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <RouterLink to="/" class="tn-logo d-flex tn-logo--light" title="AI Factory Portal"
                aria-label="AI Factory Portal" style="--121742a8: 44;">
                <div class="logo-placeholder">
                    <span class="logo-text">AI Factory</span>
                </div>
            </RouterLink>

            <nav class="tn-page-header__main-navigation">
                <ul class="d-flex tn-page-header__main-items">
                    <li class="tn-page-header__main-item">
                        <RouterLink to="/" class="cnt-link tn-page-header__main-item__link d-flex" target="_self"
                            data-test="Home">
                            <span class="cnt-link__text cnt-link__text--no-hover">Home</span>
                        </RouterLink>
                    </li>
                    <li class="tn-page-header__main-item" hidden>
                        <RouterLink to="/platform-pillars/"
                            class="cnt-link tn-page-header__main-item__link d-flex tn-page-header__main-item__link--has-children"
                            target="_self" data-test="Platform-Pillars">
                            <span role="img" aria-hidden="true"
                                class="cnt-link__icon cnt-link__icon--align-right icon-angle-down"></span>
                            <span class="cnt-link__text cnt-link__text--no-hover">Platform Pillars</span>
                        </RouterLink>
                        <ul class="tn-page-header__secondary-items" style="display: none;">
                            <li class="tn-page-header__secondary-item">
                                <a href="/platform-pillars/ai-models/"
                                    class="cnt-link tn-page-header__secondary-item__link" target="_self"
                                    data-test="AI-Models">
                                    <div>
                                        <span>AI Models</span>
                                    </div>
                                </a>
                            </li>
                            <li class="tn-page-header__secondary-item">
                                <a href="/platform-pillars/data-infrastructure/"
                                    class="cnt-link tn-page-header__secondary-item__link" target="_self"
                                    data-test="Data-Infrastructure">
                                    <div>
                                        <span>Data Infrastructure</span>
                                    </div>
                                </a>
                            </li>
                            <li class="tn-page-header__secondary-item">
                                <a href="/platform-pillars/ml-ops/"
                                    class="cnt-link tn-page-header__secondary-item__link" target="_self"
                                    data-test="ML-Ops">
                                    <div>
                                        <span>ML Ops</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="tn-page-header__main-item">
                        <button @click="scrollToMarketplace" class="cnt-link tn-page-header__main-item__link d-flex"
                            data-test="Marketplace">
                            <span class="cnt-link__text cnt-link__text--no-hover">Marketplace</span>
                        </button>
                    </li>
                    <li class="tn-page-header__main-item">
                        <RouterLink to="/contact" class="cnt-link tn-page-header__main-item__link d-flex" target="_self"
                            data-test="Contact">
                            <span class="cnt-link__text cnt-link__text--no-hover">Contact Us</span>
                        </RouterLink>
                    </li>
                </ul>
            </nav>

            <div class="tn-site-search" data-test="site-search" style="--4721ec3f: 110;">
                <form role="search" class="d-flex tn-site-search__search-bar" action="">
                    <div class="d-flex tn-site-search__input-container w-100">
                        <label for="site-search" class="d-flex">
                            <span class="icon icon-search d-flex" role="img" aria-hidden="true" alt=""></span>
                            <span class="visually-hidden">What are you looking for?</span>
                        </label>
                        <input id="site-search" name="site-search" type="search" placeholder="What are you looking for?"
                            class="tn-site-search__input" autocomplete="off" aria-autocomplete="list"
                            aria-haspopup="true" v-model="searchQuery">
                    </div>
                    <button class="tn-button tn-button--secondary tn-button--small" aria-disabled="false"
                        type="submit">Search</button>
                </form>
            </div>

            <RouterLink v-if="authStore.isLoggedIn" to="/account"
                class="tn-button tn-button--link tn-button--small text-center text-nowrap tn-page-header__quick-link"
                target="_self">
                <span class="d-flex justify-content-center tn-page-header__quick-link-icon icon icon-user"
                    aria-hidden="true" role="img" alt=""></span>
                <span class="tn-page-header__quick-link__link-text">My Account</span>
            </RouterLink>
            <RouterLink v-else to="/login"
                class="tn-button tn-button--link tn-button--small text-center text-nowrap tn-page-header__quick-link"
                target="_self">
                <span class="d-flex justify-content-center tn-page-header__quick-link-icon icon icon-user"
                    aria-hidden="true" role="img" alt=""></span>
                <span class="tn-page-header__quick-link__link-text">Log in</span>
            </RouterLink>
        </div>

        <nav class="tn-page-header__sub-items-navigation">
            <div class="tn-page-header__slide-down" tabindex="0" style="display: none;">
                <div class="container">
                    <ul class="tn-page-header__secondary-items"></ul>
                </div>
            </div>
        </nav>

        <hr class="tn-page-header__separator m-0 position-relative">
    </header>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

// Utility classes
.d-flex {
    display: flex;
}

.d-inline-block {
    display: inline-block;
}

.w-100 {
    width: 100%;
}

.text-center {
    text-align: center;
}

.text-nowrap {
    white-space: nowrap;
}

.justify-content-center {
    justify-content: center;
}

.m-0 {
    margin: 0;
}

.position-relative {
    position: relative;
}

.visually-hidden {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
}

// Main Header
.tn-page-header {
    background-color: $white;
    position: sticky;
    top: 0;
    z-index: 1000;
    font-family: $font-family-base;
    line-height: 140%;
    color: #4c5366;
}

.container {
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    position: relative;
}

// Market Navigation
.tn-page-header__market-navigation {
    position: absolute;
    top: -40px;
    left: 0;
    right: 0;
    background: #f8f8f8;
    border-bottom: 1px solid $border-grey;
    padding: 0.5rem 0;
}

.tn-page-header__markets {
    list-style: none;
    gap: 1.5rem;
    padding: 0;
    margin: 0;
    margin: 0 auto;
    padding: 0 1rem;
}

.tn-page-header__market {
    margin: 0;
}

.tn-page-header__market__link {
    color: $text-light;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;

    &--active,
    &:hover {
        color: $link-blue;
        text-decoration: underline;
    }
}

// Logo
.tn-logo {
    align-items: center;
    text-decoration: none;

    .logo-placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        background: linear-gradient(135deg, $brand-blue 0%, #0088c7 100%);
        border-radius: 8px;

        .logo-text {
            color: $white;
            font-weight: 700;
            font-size: 0.75rem;
            text-align: center;
            line-height: 1.1;
        }
    }
}

// Main Navigation
.tn-page-header__main-navigation {
    flex: 1;
}

.tn-page-header__main-items {
    list-style: none;
    gap: 2rem;
    padding: 0;
    margin: 0;
}

.tn-page-header__main-item {
    margin: 0;
    position: relative;
}

.tn-page-header__main-item__link {
    color: $text-dark;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.875rem;
    align-items: center;
    gap: 0.5rem;

    &:hover {
        color: $link-blue;
    }


}

.tn-page-header__secondary-items {
    position: absolute;
    top: 100%;
    left: 0;
    background: $white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    list-style: none;
    padding: 1rem 0;
    margin: 0;
    min-width: 200px;
}

.tn-page-header__secondary-item {
    margin: 0;
}

.tn-page-header__secondary-item__link {
    display: block;
    padding: 0.5rem 1rem;
    color: $text-dark;
    text-decoration: none;
    font-size: 0.875rem;

    &:hover {
        background-color: $light-grey-bg;
        color: $link-blue;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}

// Search - Telenor.se exact styling
.tn-site-search {
    margin-left: auto;
    position: relative;
    z-index: var(--4721ec3f, 110);
}

.tn-site-search__search-bar {
    align-items: center;
    gap: 0;
    position: relative;
}

.tn-site-search__input-container {
    border: 1px solid $border-grey;
    border-radius: 6px 0 0 6px;
    align-items: center;
    padding-left: 0.75rem;
    min-width: 300px;
    background: $brand-white;
    position: relative;

    label {
        margin: 0;
        padding: 0;
        align-items: center;

        .icon-search {
            color: $text-light;
            width: 20px;
            height: 20px;
            margin-right: 0.5rem;
        }
    }
}

.tn-site-search__input {
    border: none;
    outline: none;
    padding: 0.75rem 0.5rem;
    font-size: 0.875rem;
    font-family: $font-family-base;
    flex: 1;
    background: transparent;
    color: $text-dark;

    &::placeholder {
        color: $text-light;
        font-size: 0.875rem;
    }

    &:focus {
        outline: none;
        box-shadow: none;
    }
}

// Search button styling to match Telenor
.tn-site-search .tn-button--secondary.tn-button--small {
    border-radius: 0 6px 6px 0;
    border-left: none;
    padding: 0.75rem 1.25rem;
    font-size: 0.875rem;
    font-weight: 600;
    background-color: $brand-blue;
    color: $brand-white;
    border: 1px solid $brand-blue;

    &:hover {
        background-color: #0088c7; // Darker shade of brand blue
        border-color: #0088c7;
    }
}

// Accessibility utility
.visually-hidden {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
}

// Icons
.icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    background-color: currentColor;
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;

    &-search {
        mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>');
    }

    &-angle-down {
        mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>');
    }

    &-user {
        width: 24px;
        height: 24px;
        mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>');
    }

    &-iot {
        width: 24px;
        height: 24px;
        mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>');
    }
}

// Buttons
.tn-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    border: 1px solid transparent;
    border-radius: $border-radius;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s;

    &--secondary {
        background: #f0f0f0;
        color: $text-dark;
        border-color: $border-grey;

        &:hover {
            background: darken(#f0f0f0, 5%);
        }
    }

    &--link {
        background: transparent;
        border: none;
        color: $text-dark;

        &:hover {
            color: $link-blue;
        }
    }

    &--small {
        padding: 0.4rem 0.8rem;
        font-size: 0.875rem;
    }
}

// Quick Links
.tn-page-header__quick-link {
    flex-direction: column;
    gap: 0.25rem;
    min-width: 60px;

    &-icon {
        margin-bottom: 2px;
    }

    &__link-text {
        font-size: 0.75rem;
        line-height: 1;
    }
}

// Link styling
.cnt-link {
    color: inherit;
    text-decoration: none;

    &__icon {
        &--align-right {
            order: 2;
            margin-left: 0.5rem;
        }
    }
}

// Button styling for marketplace link
button.cnt-link {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    font: inherit;
    cursor: pointer;
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: color 0.2s ease;

    &:hover {
        color: $link-blue;
    }
}

// Sub navigation
.tn-page-header__sub-items-navigation {
    position: relative;
}

.tn-page-header__slide-down {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: $white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 999;
}

// Separator
.tn-page-header__separator {
    border: none;
    height: 1px;
    background: $border-grey;
    margin: 0;
}

// Adjust header container for market nav
.tn-page-header {
    padding-top: 40px; // Make room for market navigation
}

.container {
    height: 64px;
}
</style>