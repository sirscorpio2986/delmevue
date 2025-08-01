<template>
    <div class="support-center">
        <h1 class="page-title">Support Center</h1>

        <div class="search-bar">
            <input type="search" placeholder="Search documentation, FAQs, or forums...">
        </div>

        <div class="content-grid">
            <section class="support-section">
                <h2 class="section-title">Top Articles</h2>
                <ul class="article-list">
                    <li><a href="#">Getting Started with GPU-as-a-Service</a></li>
                    <li><a href="#">Troubleshooting Common AI Lab Issues</a></li>
                    <li><a href="#">Understanding Your Usage & Billing Report</a></li>
                    <li><a href="#">Integrating Custom Models with AI Gateway</a></li>
                    <li><a href="#">Security Best Practices for Sovereign AI</a></li>
                </ul>
            </section>

            <section class="support-section">
                <h2 class="section-title">Knowledge Base Categories</h2>
                <div class="category-grid">
                    <a href="#" class="category-card">GPU Services</a>
                    <a href="#" class="category-card">AI Models</a>
                    <a href="#" class="category-card">Billing & Payments</a>
                    <a href="#" class="category-card">Security & Compliance</a>
                    <a href="#" class="category-card">API & Integrations</a>
                    <a href="#" class="category-card">Data Fabric</a>
                </div>
            </section>
        </div>

        <section class="support-section">
            <h2 class="section-title">Support Channels</h2>
            <p>Need more help? Our support team is here for you.</p>
            <div class="channel-buttons">
                <button class="channel-btn" @click="isModalOpen = true">Open a Ticket</button>
                <button class="channel-btn secondary">Live Chat</button>
            </div>
        </section>

        <section class="support-section ticket-history">
            <h2 class="section-title">Ticket History</h2>
            <p>Overview of your past support requests.</p>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>TICKET ID</th>
                            <th>SUBJECT</th>
                            <th>STATUS</th>
                            <th>LAST UPDATE</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="ticket in tickets" :key="ticket.id">
                            <td>{{ ticket.id }}</td>
                            <td>{{ ticket.subject }}</td>
                            <td>
                                <span :class="['status-pill', ticket.status.toLowerCase()]">{{ ticket.status }}</span>
                            </td>
                            <td>{{ ticket.date }}</td>
                            <td><a href="#" class="details-link">View Details</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <NewTicketModal v-if="isModalOpen" @close="isModalOpen = false" @ticket-created="fetchTickets" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { apiService } from '@/services/apiService';
import NewTicketModal from '@/components/NewTicketModal.vue'; // <-- Import the modal

interface Ticket {
    id: string;
    date: string;
    subject: string;
    status: 'Open' | 'Closed' | 'Pending';
}

const tickets = ref<Ticket[]>([]);
const isModalOpen = ref(false); // <-- Add state for modal

const fetchTickets = async () => {
    // In a real app, you would fetch from apiService.getSupportTickets()
    // We use static data here for demonstration
    tickets.value = [
        { id: '#001234', subject: 'GPU instance not scaling', status: 'Pending' as const, date: 'Jul 28, 2023' },
        { id: '#001233', subject: 'Billing inquiry for June', status: 'Closed' as const, date: 'Jul 20, 2023' },
        { id: '#001232', subject: 'API key rotation issue', status: 'Open' as const, date: 'Jul 10, 2023' }
    ].sort((a, b) => (a.id < b.id ? 1 : -1)); // Sort to see new tickets on top
};

onMounted(fetchTickets);
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.page-title {
    font-size: 2.25rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
}

.search-bar {
    margin-bottom: 2.5rem;

    input {
        width: 100%;
        padding: 1rem;
        font-size: 1rem;
        border: 1px solid #e2e8f0;
        border-radius: $border-radius;
        background-color: $white;

        &:focus {
            outline: 2px solid $primary-blue;
            border-color: $primary-blue;
        }
    }
}

.content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
    margin-bottom: 2.5rem;
}

.section-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.article-list {
    list-style: none;
    padding: 0;

    li a {
        display: block;
        padding: 0.5rem 0;
        color: $link-blue;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
}

.category-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.category-card {
    background-color: $white;
    padding: 1rem;
    border: 1px solid #e2e8f0;
    border-radius: $border-radius;
    text-align: center;
    font-weight: 500;
    text-decoration: none;
    color: $text-dark;
    transition: all 0.2s ease;

    &:hover {
        border-color: $primary-blue;
        color: $primary-blue;
        transform: translateY(-2px);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    }
}

.channel-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.channel-btn {
    padding: 0.8rem 1.8rem;
    border: 1px solid $primary-blue;
    background-color: $primary-blue;
    color: $white;
    font-weight: 600;
    border-radius: $border-radius;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background-color: darken($primary-blue, 10%);
    }

    &.secondary {
        background-color: transparent;
        color: $primary-blue;

        &:hover {
            background-color: rgba($primary-blue, 0.1);
        }
    }
}

.support-section {
    margin-top: 2.5rem;

    >p {
        margin-bottom: 1.5rem;
        color: $text-light;
    }
}

// New Styles for Ticket History
.ticket-history {
    .table-container {
        background-color: $white;
        border: 1px solid #e2e8f0;
        border-radius: $border-radius;
        overflow: hidden;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        text-align: left;
    }

    th,
    td {
        padding: 1rem 1.5rem;
    }

    thead {
        background-color: #f8fafc;
        border-bottom: 1px solid #e2e8f0;

        th {
            font-size: 0.75rem;
            font-weight: 600;
            color: #64748b;
            letter-spacing: 0.05em;
            text-transform: uppercase;
        }
    }

    tbody tr {
        border-bottom: 1px solid #e2e8f0;

        &:last-child {
            border-bottom: none;
        }
    }

    td {
        font-weight: 500;
        color: $text-dark;
    }

    .status-pill {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        border-radius: 9999px;
        font-size: 0.75rem;
        font-weight: 600;

        &.pending {
            background-color: #fef9c3;
            color: #ca8a04;
        }

        &.closed {
            background-color: #d1fae5;
            color: #065f46;
        }

        &.open {
            background-color: #ffe4e6;
            color: #be123c;
        }
    }

    .details-link {
        font-weight: 600;
        color: $link-blue;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>