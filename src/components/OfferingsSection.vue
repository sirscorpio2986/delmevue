<template>
    <section id="service-offerings" class="offerings-section">
        <div class="container">
            <!-- Control Area -->
            <div class="control-area">
                <div class="number-selection">
                    <h3 class="control-question">{{ t('offerings.userQuestion') }}</h3>
                    <div class="number-buttons">
                        <button v-for="num in 5" :key="num" :class="{ active: selectedUsers === num }"
                            @click="selectedUsers = num" class="number-btn">
                            {{ num }}
                        </button>
                        <a href="#" class="show-more-link">{{ t('common.showMore') }}</a>
                    </div>
                </div>

                <div class="binding-toggle">
                    <div class="toggle-container">
                        <input type="checkbox" id="binding-toggle" v-model="isBindingEnabled" class="toggle-input">
                        <label for="binding-toggle" class="toggle-label"></label>
                    </div>
                    <span class="binding-text">{{ t('offerings.commitmentText') }}</span>
                    <a href="#" class="info-link">{{ t('offerings.commitmentInfo') }}</a>
                </div>
            </div>

            <!-- Subscription Cards -->
            <div class="subscription-cards">
                <!-- Enterprise Plan Card -->
                <div class="subscription-card">
                    <div class="card-content">
                        <h3 class="card-title">{{ t('offerings.enterpriseCluster.title') }}</h3>
                        <p class="card-description">
                            {{ t('offerings.enterpriseCluster.description') }}
                        </p>
                        <div class="card-price">
                            <span class="price-amount">{{ t('offerings.enterpriseCluster.price') }}</span>
                            <span class="price-period">{{ t('offerings.enterpriseCluster.pricePeriod') }}</span>
                        </div>
                        <button class="card-button family-btn">{{ t('common.addExtraUsers') }} →</button>
                    </div>
                </div>

                <!-- Premium GPU Card -->
                <div class="subscription-card">
                    <div class="campaign-badge">{{ t('offerings.campaign') }}</div>
                    <div class="card-content">
                        <h3 class="card-title">{{ t('offerings.premiumGpu.title') }}</h3>
                        <ul class="features-list">
                            <li class="feature-item">
                                <span class="checkmark">✓</span>
                                {{ t('offerings.premiumGpu.features.h100Gpus') }}
                            </li>
                            <li class="feature-item">
                                <span class="checkmark">✓</span>
                                {{ t('offerings.premiumGpu.features.prioritySupport') }}
                            </li>
                            <li class="feature-item">
                                <span class="checkmark">✓</span>
                                {{ t('offerings.premiumGpu.features.unlimitedTransfer') }}
                            </li>
                            <li class="feature-item">
                                <span class="checkmark">✓</span>
                                {{ t('offerings.premiumGpu.features.advancedSecurity') }}
                            </li>
                        </ul>
                        <div class="card-pricing">
                            <div class="original-price">
                                <span class="price-label">{{ t('offerings.premiumGpu.priceLabel') }}</span>
                                <span class="strikethrough-price">{{ t('offerings.premiumGpu.originalPrice') }}</span>
                            </div>
                            <div class="current-price">
                                <span class="price-amount discounted">{{ t('offerings.premiumGpu.currentPrice')
                                }}</span>
                                <span class="price-period">{{ t('offerings.premiumGpu.pricePeriod') }}</span>
                            </div>
                        </div>
                        <button class="card-button primary-btn">{{ t('common.select') }}</button>
                        <a href="#" class="read-more-link">{{ t('common.learnMore') }}</a>
                    </div>
                </div>

                <!-- Standard GPU Card -->
                <div class="subscription-card">
                    <div class="campaign-badge">{{ t('offerings.campaign') }}</div>
                    <div class="card-content">
                        <h3 class="card-title">{{ t('offerings.standardGpu.title') }}</h3>
                        <ul class="features-list">
                            <li class="feature-item">
                                <span class="checkmark">✓</span>
                                {{ t('offerings.standardGpu.features.a100Gpus') }}
                            </li>
                            <li class="feature-item">
                                <span class="checkmark">✓</span>
                                {{ t('offerings.standardGpu.features.standardSupport') }}
                            </li>
                            <li class="feature-item">
                                <span class="checkmark">✓</span>
                                {{ t('offerings.standardGpu.features.highSpeedTransfer') }}
                            </li>
                            <li class="feature-item">
                                <span class="cross">×</span>
                                {{ t('offerings.standardGpu.features.advancedSecurity') }}
                            </li>
                        </ul>
                        <div class="card-pricing">
                            <div class="original-price">
                                <span class="price-label">{{ t('offerings.standardGpu.priceLabel') }}</span>
                                <span class="strikethrough-price">{{ t('offerings.standardGpu.originalPrice') }}</span>
                            </div>
                            <div class="current-price">
                                <span class="price-amount discounted">{{ t('offerings.standardGpu.currentPrice')
                                }}</span>
                                <span class="price-period">{{ t('offerings.standardGpu.pricePeriod') }}</span>
                            </div>
                        </div>
                        <button class="card-button primary-btn">{{ t('common.select') }}</button>
                        <a href="#" class="read-more-link">{{ t('common.learnMore') }}</a>
                    </div>
                </div>

                <!-- Basic GPU Card -->
                <div class="subscription-card">
                    <div class="card-content">
                        <h3 class="card-title">{{ t('offerings.basicGpu.title') }}</h3>
                        <ul class="features-list">
                            <li class="feature-item">
                                <span class="checkmark">✓</span>
                                {{ t('offerings.basicGpu.features.v100Gpus') }}
                            </li>
                            <li class="feature-item">
                                <span class="checkmark">✓</span>
                                {{ t('offerings.basicGpu.features.basicSupport') }}
                            </li>
                            <li class="feature-item">
                                <span class="cross">×</span>
                                {{ t('offerings.basicGpu.features.highSpeedTransfer') }}
                            </li>
                            <li class="feature-item">
                                <span class="cross">×</span>
                                {{ t('offerings.basicGpu.features.advancedSecurity') }}
                            </li>
                        </ul>
                        <div class="card-pricing">
                            <div class="current-price">
                                <span class="price-amount">{{ t('offerings.basicGpu.price') }}</span>
                            </div>
                        </div>
                        <button class="card-button primary-btn">{{ t('common.select') }}</button>
                        <a href="#" class="read-more-link">{{ t('common.learnMore') }}</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const selectedUsers = ref(1);
const isBindingEnabled = ref(true);
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.offerings-section {
    padding: 4rem 0;
    background-color: $background-grey;
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
        color: $text-dark;
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
            border: 2px solid $border-grey;
            background-color: $white;
            border-radius: 8px;
            font-size: 1.125rem;
            font-weight: 600;
            color: $text-dark;
            cursor: pointer;
            transition: all 0.2s ease;

            &:hover {
                border-color: $primary-blue;
                color: $primary-blue;
            }

            &.active {
                border-color: $primary-blue;
                background-color: $primary-blue;
                color: $white;
            }
        }

        .show-more-link {
            color: $primary-blue;
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
        background-color: $border-grey;
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
            background-color: $white;
            border-radius: 50%;
            transition: transform 0.2s ease;
        }
    }

    .toggle-input:checked+.toggle-label {
        background-color: $primary-blue;

        &::after {
            transform: translateX(22px);
        }
    }

    .binding-text {
        font-size: 1rem;
        color: $text-dark;
        font-weight: 500;
    }

    .info-link {
        color: $primary-blue;
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
    gap: 1.5rem;
}

.subscription-card {
    background: $white;
    border-radius: 12px;
    padding: 1.5rem;
    border: 1px solid $border-grey;
    transition: all 0.3s ease;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        border-color: $primary-blue;
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

    .card-title {
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
        color: $text-dark;
        line-height: 1.4;
    }

    .card-description {
        color: #64748b;
        font-size: 0.9rem;
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
            color: $text-dark;

            .checkmark {
                color: #059669;
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
                color: #64748b;
                margin-bottom: 0.25rem;
            }

            .strikethrough-price {
                text-decoration: line-through;
                color: #64748b;
                font-size: 0.9rem;
            }
        }

        .current-price {
            .price-amount {
                display: block;
                font-size: 1.25rem;
                font-weight: 700;
                color: #059669;
                margin-bottom: 0.25rem;

                &.discounted {
                    color: #dc2626;
                }
            }

            .price-period {
                font-size: 0.8rem;
                color: #64748b;
            }
        }
    }

    .card-button {
        width: 100%;
        padding: 0.75rem;
        border-radius: 8px;
        font-weight: 600;
        font-size: 0.85rem;
        cursor: pointer;
        transition: all 0.2s ease;
        border: none;
        margin-bottom: 0.75rem;

        &.primary-btn {
            background: $primary-blue;
            color: $white;

            &:hover {
                background: darken($primary-blue, 10%);
                transform: translateY(-1px);
                box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
            }
        }

        &.family-btn {
            background: transparent;
            color: $text-dark;
            border: 1px solid $border-grey;

            &:hover {
                background: #f8fafc;
                border-color: $primary-blue;
                color: $primary-blue;
            }
        }
    }

    .read-more-link {
        display: block;
        text-align: center;
        color: $primary-blue;
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
        padding: 1rem;
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
        padding: 1rem;

        .features-list .feature-item {
            font-size: 0.85rem;
        }
    }
}
</style>