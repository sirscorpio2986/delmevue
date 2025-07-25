<template>
    <main class="support-view">
        <div class="container">
            <div class="support-card">
                <h2>Support Center</h2>

                <!-- Submit New Ticket Section -->
                <section class="new-ticket-section">
                    <h3>Submit a New Ticket</h3>
                    <form @submit.prevent="submitTicket" class="ticket-form">
                        <div class="form-group">
                            <label for="subject">Subject</label>
                            <input id="subject" v-model="newTicket.subject" type="text" required
                                placeholder="Brief description of your issue" />
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" v-model="newTicket.message" rows="5" required
                                placeholder="Detailed description of your issue"></textarea>
                        </div>
                        <button type="submit" class="submit-btn" :disabled="isSubmitting">
                            {{ isSubmitting ? 'Submitting...' : 'Submit Ticket' }}
                        </button>
                    </form>
                </section>

                <!-- Ticket History Section -->
                <section class="ticket-history-section">
                    <h3>Ticket History</h3>
                    <div class="table-container">
                        <table v-if="tickets.length > 0">
                            <thead>
                                <tr>
                                    <th>Ticket ID</th>
                                    <th>Date</th>
                                    <th>Subject</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="ticket in tickets" :key="ticket.id">
                                    <td class="ticket-id">{{ ticket.id }}</td>
                                    <td>{{ formatDate(ticket.date) }}</td>
                                    <td class="subject">{{ ticket.subject }}</td>
                                    <td>
                                        <span class="status-badge" :class="getBadgeClass(ticket.status)">
                                            {{ ticket.status }}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div v-else class="loading">
                            Loading tickets...
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { apiService } from '@/services/apiService'

interface Ticket {
    id: string
    date: string
    subject: string
    status: string
}

const tickets = ref<Ticket[]>([])
const isSubmitting = ref(false)

const newTicket = ref({
    subject: '',
    message: ''
})

onMounted(async () => {
    tickets.value = await apiService.getSupportTickets()
})

const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
}

const getBadgeClass = (status: string) => {
    return {
        'badge-open': status.toLowerCase() === 'open',
        'badge-closed': status.toLowerCase() === 'closed'
    }
}

const submitTicket = async () => {
    isSubmitting.value = true

    try {
        // Simulate ticket submission
        console.log('Submitting ticket:', newTicket.value)

        // In a real app, you would call an API to submit the ticket
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Reset form
        newTicket.value = {
            subject: '',
            message: ''
        }

        // Show success message (in a real app, you might show a toast notification)
        alert('Ticket submitted successfully!')

    } catch (error) {
        console.error('Error submitting ticket:', error)
        alert('Error submitting ticket. Please try again.')
    } finally {
        isSubmitting.value = false
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.support-view {
    min-height: 100vh;
    padding: 2rem 1rem;
    background: $light-grey;
}

.container {
    max-width: 1000px;
    margin: 0 auto;
}

.support-card {
    background: $white;
    padding: 3rem;
    border-radius: $border-radius;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid $border-color;

    h2 {
        color: $primary-blue;
        margin-bottom: 2rem;
        font-size: 2rem;
        text-align: center;
    }

    h3 {
        color: $dark-text;
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
    }
}

.new-ticket-section {
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid $border-color;
}

.ticket-form {
    .form-group {
        margin-bottom: 1.5rem;

        label {
            display: block;
            margin-bottom: 0.5rem;
            color: $dark-text;
            font-weight: 500;
        }

        input,
        textarea {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            font-size: 1rem;
            transition: border-color 0.2s ease;

            &:focus {
                outline: none;
                border-color: $primary-blue;
            }

            &::placeholder {
                color: #999;
            }
        }

        textarea {
            resize: vertical;
        }
    }

    .submit-btn {
        background: $primary-blue;
        color: $white;
        border: none;
        border-radius: $border-radius;
        padding: 0.75rem 2rem;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.2s ease;

        &:hover:not(:disabled) {
            background: darken($primary-blue, 10%);
        }

        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    }
}

.ticket-history-section {
    .table-container {
        overflow-x: auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 1rem;

        th {
            background: $light-grey;
            color: $dark-text;
            font-weight: 600;
            padding: 1rem;
            text-align: left;
            border-bottom: 2px solid $border-color;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        td {
            padding: 1rem;
            border-bottom: 1px solid $border-color;
            color: $dark-text;
        }

        tr:hover {
            background: rgba(0, 169, 224, 0.05);
        }

        .ticket-id {
            font-family: monospace;
            font-weight: 600;
            color: $primary-blue;
        }

        .subject {
            max-width: 300px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
}

.status-badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    &.badge-open {
        background: #fff3cd;
        color: #856404;
        border: 1px solid #ffeaa7;
    }

    &.badge-closed {
        background: #e9ecef;
        color: #495057;
        border: 1px solid #dee2e6;
    }
}

.loading {
    text-align: center;
    padding: 2rem;
    color: $dark-text;
    font-style: italic;
}

@media (max-width: 768px) {
    .support-card {
        padding: 2rem 1rem;

        h2 {
            font-size: 1.5rem;
        }
    }

    table {
        font-size: 0.9rem;

        th,
        td {
            padding: 0.75rem 0.5rem;
        }
    }

    .submit-btn {
        width: 100%;
    }
}
</style>