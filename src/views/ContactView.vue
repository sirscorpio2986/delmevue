<script setup lang="ts">
import { ref } from 'vue';

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
                <h1 class="page-title">Contact Us</h1>
                <p class="page-subtitle">We'd love to hear from you. Fill out the form below and we'll get back to you
                    shortly.</p>
                <form @submit.prevent="handleSubmit">
                    <div class="form-group">
                        <label for="fullName">Full Name</label>
                        <input type="text" id="fullName" v-model="form.fullName" placeholder="Your Full Name">
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" v-model="form.email" placeholder="you@example.com">
                    </div>
                    <div class="form-group">
                        <label for="company">Company</label>
                        <input type="text" id="company" v-model="form.company" placeholder="Your Company Name">
                    </div>
                    <div class="form-group">
                        <label for="interest">Interest</label>
                        <input type="text" id="interest" v-model="form.interest"
                            placeholder="e.g., GPU as a Service, AI Models">
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" v-model="form.message" rows="5"
                            placeholder="Tell us about your needs..."></textarea>
                    </div>
                    <button type="submit" class="primary-btn">Send Message</button>
                </form>
            </div>

            <div class="info-container">
                <div class="info-card">
                    <h2>Contact Information</h2>
                    <h3>Headquarters</h3>
                    <p>SovereignAI Cloud AS<br>Teknologiveien 22<br>0274 Oslo, Norway</p>
                    <h3>Email</h3>
                    <p>contact@sovereignai.com</p>
                    <h3>Phone</h3>
                    <p>+47 22 55 66 77</p>
                </div>
                <div class="info-card">
                    <h2>Schedule a Demo</h2>
                    <p>Interested in a personalized walkthrough?</p>
                    <button class="secondary-btn">Book Meeting</button>
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