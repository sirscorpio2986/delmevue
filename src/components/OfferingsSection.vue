<template>
    <section id="service-offerings" class="offerings-section">
        <div class="container">
            <!-- Control Area -->
            <div class="control-area">
                <div class="number-selection">
                    <h3 class="control-question">How many users will access the infrastructure?</h3>
                    <div class="number-buttons">
                        <button v-for="num in 5" :key="num" :class="{ active: selectedUsers === num }"
                            @click="selectedUsers = num" class="number-btn">
                            {{ num }}
                        </button>
                        <a href="#" class="show-more-link">Show more</a>
                    </div>
                </div>

                <div class="binding-toggle">
                    <div class="toggle-container">
                        <input type="checkbox" id="binding-toggle" v-model="isBindingEnabled" class="toggle-input">
                        <label for="binding-toggle" class="toggle-label"></label>
                    </div>
                    <span class="binding-text">Commit to a 12-month contract for better pricing.</span>
                    <a href="#" class="info-link">What does commitment mean?</a>
                </div>
            </div>

            <!-- Subscription Cards -->
            <div class="subscription-cards">
                <!-- Enterprise Plan Card -->
                <div class="subscription-card">
                    <div class="card-content">
                        <h3 class="card-title">Enterprise Cluster</h3>
                        <p class="card-description">
                            Scale your AI infrastructure with up to 50 users and get better pricing the more you grow.
                        </p>
                        <div class="card-price">
                            <span class="price-amount">$2,299/month</span>
                            <span class="price-period">for 12 months, then $2,499/month.</span>
                        </div>
                        <button class="card-button family-btn">Add extra users →</button>
                    </div>
                </div>

                <!-- Premium GPU Card -->
                <div class="subscription-card">
                    <div class="campaign-badge">Campaign</div>
                    <div class="card-content">
                        <h3 class="card-title">Premium GPU Cluster</h3>
                        <ul class="features-list">
                            <li class="feature-item">
                                <span class="checkmark">✓</span>
                                NVIDIA H100 GPUs up to 8x cards
                            </li>
                            <li class="feature-item">
                                <span class="checkmark">✓</span>
                                Priority Support & Monitoring
                            </li>
                            <li class="feature-item">
                                <span class="checkmark">✓</span>
                                Unlimited data transfer
                            </li>
                            <li class="feature-item">
                                <span class="checkmark">✓</span>
                                Advanced security features
                            </li>
                        </ul>
                        <div class="card-pricing">
                            <div class="original-price">
                                <span class="price-label">Price with commitment discount</span>
                                <span class="strikethrough-price">$7,199/month</span>
                            </div>
                            <div class="current-price">
                                <span class="price-amount discounted">$5,999/month</span>
                                <span class="price-period">For 12 months then $7,199/month</span>
                            </div>
                        </div>
                        <button class="card-button primary-btn">Select</button>
                        <a href="#" class="read-more-link">Learn more</a>
                    </div>
                </div>

                <!-- Standard GPU Card -->
                <div class="subscription-card">
                    <div class="campaign-badge">Campaign</div>
                    <div class="card-content">
                        <h3 class="card-title">Standard GPU Cluster</h3>
                        <ul class="features-list">
                            <li class="feature-item">
                                <span class="checkmark">✓</span>
                                NVIDIA A100 GPUs up to 4x cards
                            </li>
                            <li class="feature-item">
                                <span class="checkmark">✓</span>
                                Standard Support
                            </li>
                            <li class="feature-item">
                                <span class="checkmark">✓</span>
                                High-speed data transfer
                            </li>
                            <li class="feature-item">
                                <span class="cross">×</span>
                                Advanced security features
                            </li>
                        </ul>
                        <div class="card-pricing">
                            <div class="original-price">
                                <span class="price-label">Price with commitment discount</span>
                                <span class="strikethrough-price">$5,699/month</span>
                            </div>
                            <div class="current-price">
                                <span class="price-amount discounted">$4,999/month</span>
                                <span class="price-period">For 12 months then $5,699/month</span>
                            </div>
                        </div>
                        <button class="card-button primary-btn">Select</button>
                        <a href="#" class="read-more-link">Learn more</a>
                    </div>
                </div>

                <!-- Basic GPU Card -->
                <div class="subscription-card">
                    <div class="card-content">
                        <h3 class="card-title">Basic GPU Cluster</h3>
                        <ul class="features-list">
                            <li class="feature-item">
                                <span class="checkmark">✓</span>
                                NVIDIA V100 GPUs up to 2x cards
                            </li>
                            <li class="feature-item">
                                <span class="checkmark">✓</span>
                                Basic Support
                            </li>
                            <li class="feature-item">
                                <span class="cross">×</span>
                                High-speed data transfer
                            </li>
                            <li class="feature-item">
                                <span class="cross">×</span>
                                Advanced security features
                            </li>
                        </ul>
                        <div class="card-pricing">
                            <div class="current-price">
                                <span class="price-amount">$4,499/month</span>
                            </div>
                        </div>
                        <button class="card-button primary-btn">Select</button>
                        <a href="#" class="read-more-link">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selectedUsers = ref(1);
const isBindingEnabled = ref(true);
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.offerings-section {
    padding: 4rem 0;
    background-color: #f8fafc;
}

.container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;
}

// Control Area Styles
.control-area {
    margin-bottom: 3rem;
}

.number-selection {
    margin-bottom: 2rem;

    .control-question {
        font-size: 1.25rem;
        font-weight: 600;
        color: #1f2937;
        margin-bottom: 1rem;
    }

    .number-buttons {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex-wrap: wrap;

        .number-btn {
            width: 60px;
            height: 50px;
            border: 2px solid #e5e7eb;
            background-color: white;
            border-radius: 8px;
            font-size: 1.125rem;
            font-weight: 600;
            color: #374151;
            cursor: pointer;
            transition: all 0.2s ease;

            &:hover {
                border-color: #3b82f6;
                color: #3b82f6;
            }

            &.active {
                border-color: #3b82f6;
                background-color: #3b82f6;
                color: white;
            }
        }

        .show-more-link {
            color: #3b82f6;
            text-decoration: none;
            font-weight: 500;
            margin-left: 1rem;

            &:hover {
                text-decoration: underline;
            }
        }
    }
}

.binding-toggle {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;

    .toggle-container {
        position: relative;
    }

    .toggle-input {
        display: none;
    }

    .toggle-label {
        display: block;
        width: 50px;
        height: 28px;
        background-color: #e5e7eb;
        border-radius: 14px;
        cursor: pointer;
        position: relative;
        transition: background-color 0.2s ease;

        &::after {
            content: '';
            position: absolute;
            top: 2px;
            left: 2px;
            width: 24px;
            height: 24px;
            background-color: white;
            border-radius: 50%;
            transition: transform 0.2s ease;
        }
    }

    .toggle-input:checked+.toggle-label {
        background-color: #3b82f6;

        &::after {
            transform: translateX(22px);
        }
    }

    .binding-text {
        font-size: 1rem;
        color: #374151;
        font-weight: 500;
    }

    .info-link {
        color: #3b82f6;
        text-decoration: none;
        font-weight: 500;

        &:hover {
            text-decoration: underline;
        }
    }
}

// Subscription Cards Styles
.subscription-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.subscription-card {
    background-color: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    position: relative;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    }

    &.family-card {
        .card-image {
            height: 200px;
            background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;

            .family-placeholder {
                text-align: center;
                color: #6b7280;

                .family-icon {
                    font-size: 3rem;
                    margin-bottom: 0.5rem;
                }

                p {
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin: 0;
                }
            }

            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="3" fill="%23e5e7eb"/><circle cx="80" cy="30" r="2" fill="%23e5e7eb"/><circle cx="40" cy="80" r="2.5" fill="%23e5e7eb"/></svg>');
                opacity: 0.3;
            }
        }
    }

    .campaign-badge {
        position: absolute;
        top: 1rem;
        left: 1rem;
        background-color: #dcfce7;
        color: #166534;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 600;
        z-index: 1;
    }

    .card-content {
        padding: 1.5rem;
    }

    .card-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 1rem;
    }

    .card-description {
        color: #6b7280;
        line-height: 1.6;
        margin-bottom: 1.5rem;
    }

    .features-list {
        list-style: none;
        padding: 0;
        margin-bottom: 1.5rem;

        .feature-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.75rem;
            font-size: 0.9rem;
            color: #374151;

            .checkmark {
                color: #10b981;
                font-weight: bold;
                font-size: 1rem;
            }

            .cross {
                color: #ef4444;
                font-weight: bold;
                font-size: 1rem;
            }
        }
    }

    .card-pricing {
        margin-bottom: 1.5rem;

        .original-price {
            margin-bottom: 0.5rem;

            .price-label {
                display: block;
                font-size: 0.8rem;
                color: #6b7280;
                margin-bottom: 0.25rem;
            }

            .strikethrough-price {
                text-decoration: line-through;
                color: #6b7280;
                font-size: 0.9rem;
            }
        }

        .current-price {
            .price-amount {
                display: block;
                font-size: 1.5rem;
                font-weight: 700;
                color: #1f2937;
                margin-bottom: 0.25rem;

                &.discounted {
                    color: #dc2626;
                }
            }

            .price-period {
                font-size: 0.8rem;
                color: #6b7280;
            }
        }
    }

    .card-button {
        width: 100%;
        padding: 0.875rem 1.5rem;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        margin-bottom: 0.75rem;

        &.primary-btn {
            background-color: #3b82f6;
            color: white;

            &:hover {
                background-color: #2563eb;
                transform: translateY(-1px);
            }
        }

        &.family-btn {
            background-color: #f3f4f6;
            color: #3b82f6;
            border: 2px solid #3b82f6;

            &:hover {
                background-color: #3b82f6;
                color: white;
            }
        }
    }

    .read-more-link {
        display: block;
        text-align: center;
        color: #3b82f6;
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 500;

        &:hover {
            text-decoration: underline;
        }
    }
}

// Responsive Design
@media (max-width: 768px) {
    .container {
        padding: 0 1rem;
    }

    .number-buttons {
        .number-btn {
            width: 50px;
            height: 45px;
            font-size: 1rem;
        }
    }

    .binding-toggle {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.75rem;
    }

    .subscription-cards {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .subscription-card {
        .card-content {
            padding: 1.25rem;
        }

        .card-title {
            font-size: 1.25rem;
        }
    }
}

@media (max-width: 480px) {
    .number-buttons {
        justify-content: center;

        .number-btn {
            width: 45px;
            height: 40px;
            font-size: 0.9rem;
        }

        .show-more-link {
            margin-left: 0.5rem;
        }
    }

    .subscription-card {
        .card-content {
            padding: 1rem;
        }

        .features-list .feature-item {
            font-size: 0.85rem;
        }
    }
}
</style>