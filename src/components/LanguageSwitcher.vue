<template>
    <div class="language-switcher">
        <button class="language-button" @click="toggleDropdown" :aria-expanded="isOpen" aria-haspopup="true">
            <span class="current-language">
                {{ currentLanguage.flag }} {{ currentLanguage.name }}
            </span>
            <span class="dropdown-arrow" :class="{ 'is-open': isOpen }">▼</span>
        </button>

        <div v-if="isOpen" class="language-dropdown" @click.stop>
            <button v-for="locale in availableLocales" :key="locale.code" class="language-option"
                :class="{ 'is-active': locale.code === currentLocale }" @click="selectLanguage(locale.code)">
                <span class="flag">{{ locale.flag }}</span>
                <span class="name">{{ locale.name }}</span>
                <span v-if="locale.code === currentLocale" class="checkmark">✓</span>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { SUPPORT_LOCALES, setLocale, getCurrentLocale } from '@/i18n'

const { locale } = useI18n()
const isOpen = ref(false)

const currentLocale = computed(() => getCurrentLocale())

const currentLanguage = computed(() => {
    return SUPPORT_LOCALES.find(l => l.code === currentLocale.value) || SUPPORT_LOCALES[0]
})

const availableLocales = computed(() => SUPPORT_LOCALES)

const toggleDropdown = () => {
    isOpen.value = !isOpen.value
}

const selectLanguage = (localeCode: string) => {
    setLocale(localeCode)
    isOpen.value = false
}

const closeDropdown = (event: Event) => {
    const target = event.target as HTMLElement
    if (!target.closest('.language-switcher')) {
        isOpen.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
    document.removeEventListener('click', closeDropdown)
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.language-switcher {
    position: relative;
    display: inline-block;
}

.language-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    background: transparent;
    border: 1px solid $border-grey;
    border-radius: $border-radius;
    cursor: pointer;
    font-size: 0.875rem;
    color: $text-dark;
    transition: all 0.2s ease;

    &:hover {
        border-color: $primary-blue;
        color: $primary-blue;
    }

    &:focus {
        outline: 2px solid $primary-blue;
        outline-offset: 2px;
    }
}

.current-language {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    font-weight: 500;
}

.dropdown-arrow {
    font-size: 0.75rem;
    transition: transform 0.2s ease;

    &.is-open {
        transform: rotate(180deg);
    }
}

.language-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: $white;
    border: 1px solid $border-grey;
    border-radius: $border-radius;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    margin-top: 0.25rem;
    overflow: hidden;
}

.language-option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.75rem;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 0.875rem;
    color: $text-dark;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: $light-grey-bg;
    }

    &.is-active {
        background-color: rgba($primary-blue, 0.1);
        color: $primary-blue;
    }

    &:not(:last-child) {
        border-bottom: 1px solid $border-grey;
    }
}

.flag {
    font-size: 1rem;
}

.name {
    flex: 1;
    text-align: left;
    font-weight: 500;
}

.checkmark {
    color: $primary-blue;
    font-weight: bold;
}

// Mobile responsive
@media (max-width: 768px) {
    .language-button {
        padding: 0.4rem 0.6rem;
        font-size: 0.8rem;
    }

    .current-language {
        gap: 0.25rem;
    }

    .language-dropdown {
        min-width: 140px;
    }
}
</style>
