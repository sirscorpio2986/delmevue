<script setup lang="ts">
import { ref } from 'vue';
import { apiService } from '@/services/apiService';

const emit = defineEmits(['close', 'ticket-created']);

// Form field state
const category = ref('Technical Support');
const description = ref('');
const contactMethod = ref('In-app');

// Component state
const isLoading = ref(false);
const errorMessage = ref('');
const successMessage = ref('');

async function handleSubmit() {
    if (!description.value) {
        errorMessage.value = 'Description is required.';
        return;
    }
    isLoading.value = true;
    errorMessage.value = '';
    successMessage.value = '';

    // Debug logging
    console.log('Form values:', {
        category: category.value,
        description: description.value,
        contactMethod: contactMethod.value
    });

    try {
        // Send category as short_description and description as description
        const ticketData = {
            short_description: category.value,
            description: description.value
        };

        console.log('Sending ticket data to API:', ticketData);

        const response = await apiService.createSupportTicket(ticketData);
        console.log('API response:', response);

        successMessage.value = `Ticket created successfully! (ID: ${response.result.number})`;

        setTimeout(() => {
            emit('ticket-created');
            emit('close');
        }, 2000);

    } catch (error) {
        console.error('Error creating ticket:', error);
        errorMessage.value = 'Failed to create ticket. Please try again.';
    } finally {
        isLoading.value = false;
    }
}
</script>

<template>
    <div class="modal-backdrop" @click.self="$emit('close')">
        <div class="modal-content">
            <div class="modal-header">
                <h2>New Support Ticket</h2>
                <button class="close-btn" @click="$emit('close')">&times;</button>
            </div>
            <form @submit.prevent="handleSubmit">
                <div class="form-group">
                    <label for="category">Category</label>
                    <select id="category" v-model="category">
                        <option>Technical Support</option>
                        <option>Billing Issues</option>
                        <option>General Inquiry</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea id="description" v-model="description" rows="5"
                        placeholder="Describe your issue in detail..." required></textarea>
                </div>

                <div class="form-group">
                    <label>Attachments (optional)</label>
                    <div class="file-drop-zone">
                        <p>Drag & drop files here or click to browse</p>
                        <input type="file" class="file-input" multiple>
                    </div>
                </div>

                <div class="form-group">
                    <label>Preferred Contact Method</label>
                    <div class="radio-group">
                        <label><input type="radio" v-model="contactMethod" value="Email"> Email</label>
                        <label><input type="radio" v-model="contactMethod" value="Phone"> Phone</label>
                        <label><input type="radio" v-model="contactMethod" value="In-app"> In-app</label>
                    </div>
                </div>

                <div v-if="successMessage" class="alert success">{{ successMessage }}</div>
                <div v-if="errorMessage" class="alert error">{{ errorMessage }}</div>

                <div class="modal-footer">
                    <button type="button" class="btn-secondary" @click="$emit('close')"
                        :disabled="isLoading">Cancel</button>
                    <button type="submit" class="btn-primary" :disabled="isLoading">
                        {{ isLoading ? 'Submitting...' : 'Submit Ticket' }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

// Main modal styles (backdrop, content, header, footer)
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
}

.modal-content {
    background-color: $white;
    border-radius: $border-radius;
    width: 100%;
    max-width: 600px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    max-height: 90vh;
    display: flex;
    flex-direction: column;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    border-bottom: 1px solid $border-grey;

    h2 {
        margin: 0;
    }
}

.close-btn {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: #999;
}

form {
    padding: 1.5rem;
    overflow-y: auto;
}

.modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    padding: 1.5rem;
    border-top: 1px solid $border-grey;
    margin-top: auto;
}

// Form specific styles
.form-group {
    margin-bottom: 1.5rem;

    label {
        display: block;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }

    input[type="text"],
    textarea,
    select {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid $border-grey;
        border-radius: $border-radius;
        font-size: 1rem;
        font-family: inherit;
    }
}

.file-drop-zone {
    border: 2px dashed $border-grey;
    border-radius: $border-radius;
    padding: 2rem;
    text-align: center;
    color: #999;
    position: relative;
    cursor: pointer;

    &:hover {
        border-color: $primary-blue;
    }
}

.file-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
}

.radio-group {
    display: flex;
    gap: 1.5rem;
    align-items: center;

    label {
        font-weight: normal;
    }
}

// Buttons and alerts
.btn-primary,
.btn-secondary {
    padding: 0.75rem 1.5rem;
    border-radius: $border-radius;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid transparent;
}

.btn-primary {
    background-color: $primary-blue;
    color: $white;

    &:disabled {
        background-color: lighten($primary-blue, 20%);
        cursor: not-allowed;
    }
}

.btn-secondary {
    background-color: #e2e8f0;
    color: $text-dark;

    &:disabled {
        background-color: #f1f5f9;
        cursor: not-allowed;
    }
}

.alert {
    padding: 1rem;
    border-radius: $border-radius;
    margin-bottom: 1rem;

    &.success {
        background-color: #d1fae5;
        color: #065f46;
    }

    &.error {
        background-color: #ffe4e6;
        color: #be123c;
    }
}
</style>