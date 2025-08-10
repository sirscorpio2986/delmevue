<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const form = ref({
    fullName: '',
    email: '',
    company: '',
    interest: '',
    message: ''
});

const handleSubmit = () => {
    alert('Form submitted! (Simulation) \n' + JSON.stringify(form.value, null, 2));
};
</script>

<template>
    <div class="contact-page">
        <div class="container">
            <div class="form-container">
                <h1 class="page-title">{{ t('contact.title') }}</h1>
                <p class="page-subtitle">{{ t('contact.subtitle') }}</p>
                <form @submit.prevent="handleSubmit">
                    <div class="form-group">
                        <label for="fullName">{{ t('contact.fullName') }}</label>
                        <input type="text" id="fullName" v-model="form.fullName"
                            :placeholder="t('contact.fullNamePlaceholder')">
                    </div>
                    <div class="form-group">
                        <label for="email">{{ t('contact.emailAddress') }}</label>
                        <input type="email" id="email" v-model="form.email"
                            :placeholder="t('contact.emailPlaceholder')">
                    </div>
                    <div class="form-group">
                        <label for="company">{{ t('contact.company') }}</label>
                        <input type="text" id="company" v-model="form.company"
                            :placeholder="t('contact.companyPlaceholder')">
                    </div>
                    <div class="form-group">
                        <label for="interest">{{ t('contact.interest') }}</label>
                        <input type="text" id="interest" v-model="form.interest"
                            :placeholder="t('contact.interestPlaceholder')">
                    </div>
                    <div class="form-group">
                        <label for="message">{{ t('contact.message') }}</label>
                        <textarea id="message" v-model="form.message" rows="5"
                            :placeholder="t('contact.messagePlaceholder')"></textarea>
                    </div>
                    <button type="submit" class="primary-btn">{{ t('contact.sendMessage') }}</button>
                </form>
            </div>

            <div class="info-container">
                <div class="info-card">
                    <h2>{{ t('contact.contactInformation') }}</h2>
                    <h3>{{ t('contact.headquarters') }}</h3>
                    <p>SovereignAI Cloud AS<br>Teknologiveien 22<br>0274 Oslo, Norway</p>
                    <h3>{{ t('contact.email') }}</h3>
                    <p>contact@sovereignai.com</p>
                    <h3>{{ t('contact.phone') }}</h3>
                    <p>+47 22 55 66 77</p>
                </div>
                <div class="info-card">
                    <h2>{{ t('contact.scheduleDemo') }}</h2>
                    <p>{{ t('contact.demoSubtitle') }}</p>
                    <button class="secondary-btn">{{ t('contact.bookMeeting') }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.contact-page {
    background-color: $background-grey;
    padding: 4rem 1rem;
    min-height: 100vh;
}

.container {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
}

.form-container {
    background-color: $white;
    padding: 2.5rem;
    border: 1px solid $border-grey;
    border-radius: $border-radius;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.page-title {
    font-size: 2rem;
    font-weight: 700;
    color: $text-dark;
    margin-bottom: 0.5rem;
}

.page-subtitle {
    color: $text-light;
    margin-bottom: 2rem;
    line-height: 1.6;
}

.form-group {
    margin-bottom: 1.5rem;

    label {
        display: block;
        font-weight: 500;
        margin-bottom: 0.5rem;
        color: $text-dark;
    }

    input,
    textarea {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid $border-grey;
        border-radius: $border-radius;
        font-size: 1rem;
        font-family: inherit;
        transition: all 0.2s ease;

        &:focus {
            outline: none;
            border-color: $primary-blue;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        &::placeholder {
            color: #9ca3af;
        }
    }

    textarea {
        resize: vertical;
        min-height: 120px;
    }
}

.primary-btn {
    background-color: $primary-blue;
    color: $white;
    border: none;
    border-radius: $border-radius;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    width: 100%;

    &:hover {
        background-color: darken($primary-blue, 10%);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    }
}

.info-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.info-card {
    background-color: $white;
    padding: 2rem;
    border: 1px solid $border-grey;
    border-radius: $border-radius;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    h2 {
        font-size: 1.25rem;
        font-weight: 600;
        color: $text-dark;
        margin-bottom: 1.5rem;
    }

    h3 {
        font-size: 0.875rem;
        font-weight: 600;
        color: $text-light;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 0.5rem;
        margin-top: 1.5rem;

        &:first-of-type {
            margin-top: 0;
        }
    }

    p {
        line-height: 1.7;
        margin-bottom: 1rem;
        color: $text-dark;
    }
}

.secondary-btn {
    background-color: transparent;
    border: 1px solid $primary-blue;
    color: $primary-blue;
    border-radius: $border-radius;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    width: 100%;
    transition: all 0.2s ease;

    &:hover {
        background-color: $primary-blue;
        color: $white;
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    }
}

// Responsive Design
@media (max-width: 768px) {
    .container {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .contact-page {
        padding: 2rem 1rem;
    }

    .form-container,
    .info-card {
        padding: 1.5rem;
    }

    .page-title {
        font-size: 1.75rem;
    }
}
</style>