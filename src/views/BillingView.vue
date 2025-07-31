<template>
    <main class="billing-view">
        <div class="container">
            <div class="billing-card">
                <h2>Invoice History</h2>
                <div class="table-container">
                    <table v-if="invoices.length > 0">
                        <thead>
                            <tr>
                                <th>Invoice ID</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="invoice in invoices" :key="invoice.id">
                                <td class="invoice-id">{{ invoice.id }}</td>
                                <td>{{ formatDate(invoice.date) }}</td>
                                <td class="amount">${{ invoice.amount.toFixed(2) }}</td>
                                <td>
                                    <span class="status-badge" :class="getBadgeClass(invoice.status)">
                                        {{ invoice.status }}
                                    </span>
                                </td>
                                <td>
                                    <button class="download-btn" @click="downloadInvoice(invoice)">
                                        Download
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div v-else class="loading">
                        Loading invoices...
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { apiService } from '@/services/apiService'

interface Invoice {
    id: string
    date: string
    amount: number
    status: string
    url: string
}

const invoices = ref<Invoice[]>([])

onMounted(async () => {
    invoices.value = await apiService.getInvoices()
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
        'badge-paid': status.toLowerCase() === 'paid',
        'badge-due': status.toLowerCase() === 'due'
    }
}

const downloadInvoice = (invoice: Invoice) => {
    // Simulate download functionality
    console.log(`Downloading invoice ${invoice.id}`)
    // In a real app, you would navigate to invoice.url or trigger a download
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.billing-view {
    min-height: 100vh;
    padding: 2rem 1rem;
    background: $light-grey-bg;
}

.container {
    max-width: 1000px;
    margin: 0 auto;
}

.billing-card {
    background: $brand-white;
    padding: 3rem;
    border-radius: $border-radius;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid $medium-grey;

    h2 {
        color: $brand-blue;
        margin-bottom: 2rem;
        font-size: 2rem;
        text-align: center;
    }
}

.table-container {
    overflow-x: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;

    th {
        background: $light-grey-bg;
        color: $dark-grey-text;
        font-weight: 600;
        padding: 1rem;
        text-align: left;
        border-bottom: 2px solid $medium-grey;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    td {
        padding: 1rem;
        border-bottom: 1px solid $medium-grey;
        color: $dark-grey-text;
    }

    tr:hover {
        background: rgba(0, 169, 224, 0.05);
    }

    .invoice-id {
        font-family: monospace;
        font-weight: 600;
        color: $brand-blue;
    }

    .amount {
        font-weight: 600;
        text-align: right;
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

    &.badge-paid {
        background: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
    }

    &.badge-due {
        background: #fff3cd;
        color: #856404;
        border: 1px solid #ffeaa7;
    }
}

.download-btn {
    background: $brand-blue;
    color: $brand-white;
    border: none;
    border-radius: $border-radius;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
        background: darken($brand-blue, 10%);
    }
}

.loading {
    text-align: center;
    padding: 2rem;
    color: $dark-grey-text;
    font-style: italic;
}

@media (max-width: 768px) {
    .billing-card {
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

    .download-btn {
        padding: 0.4rem 0.8rem;
        font-size: 0.8rem;
    }
}
</style>