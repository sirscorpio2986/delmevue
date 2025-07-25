<template>
    <section class="hero-section">
        <div class="hero-container">
            <div class="hero-content">
                <div class="hero-text">
                    <h1 class="animated-title">Scale up to ultra-performance.<br>The cloud advantage.</h1>
                    <p class="animated-subtitle">New GPU-accelerated cloud infrastructure from CloudPortal.<br>
                        Get started with high-performance VMs and AI/ML capabilities.<br>
                        Save up to 40% with sustained use discounts.</p>
                    <div class="hero-buttons animated-buttons">
                        <RouterLink to="/products" class="hero-btn-link">
                            <button class="hero-btn primary">Launch Console</button>
                        </RouterLink>
                        <RouterLink to="/category/ai & ml" class="hero-btn-link">
                            <button class="hero-btn secondary">Explore AI & ML</button>
                        </RouterLink>
                    </div>
                </div>
                <div class="hero-image">
                    <div class="product-showcase">
                        <div class="image-container">
                            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80"
                                alt="Engineer interacting with a large futuristic data screen"
                                class="hero-product-image">
                            <div class="image-overlay"></div>
                        </div>
                        <div class="product-badge">
                            <h3>GPU Accelerated ⚡</h3>
                            <p>NVIDIA A100 & H100 available</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Pricing Section -->
        <div class="pricing-section">
            <div class="pricing-container">
                <h2>How many resources do you need?</h2>

                <!-- Resource Selector -->
                <div class="resource-selector">
                    <div class="selector-item active">1</div>
                    <div class="selector-item">2</div>
                    <div class="selector-item">4</div>
                    <div class="selector-item">8</div>
                    <div class="selector-item">16</div>
                    <div class="selector-item show-more">Show more</div>
                </div>

                <!-- Commitment Toggle -->
                <div class="commitment-toggle">
                    <label class="toggle-switch">
                        <input type="checkbox" />
                        <span class="slider"></span>
                    </label>
                    <span class="toggle-text">Commit to 1 year | 24 months. <a href="#" class="toggle-link">What does
                            commitment mean?</a></span>
                </div>

                <!-- Pricing Cards -->
                <div class="pricing-cards">
                    <div class="pricing-card featured">
                        <div class="card-header">
                            <span class="plan-badge">Popular</span>
                            <h3>Compute Plus</h3>
                        </div>
                        <div class="plan-features">
                            <div class="feature">✓ Up to 32 vCPUs</div>
                            <div class="feature">✓ Up to 128 GB RAM</div>
                            <div class="feature">✓ SSD persistent disks</div>
                            <div class="feature">✓ Premium networking</div>
                        </div>
                        <div class="pricing-info">
                            <div class="price-details">
                                <span class="original-price">$299/month</span>
                                <span class="current-price">$199/month</span>
                                <span class="billing-cycle">12 months, then $299/month</span>
                            </div>
                        </div>
                        <button class="plan-button primary">Select</button>
                        <a href="#" class="learn-more">Learn more</a>
                    </div>

                    <div class="pricing-card">
                        <div class="card-header">
                            <h3>Compute Standard</h3>
                        </div>
                        <div class="plan-features">
                            <div class="feature">✓ Up to 16 vCPUs</div>
                            <div class="feature">✓ Up to 64 GB RAM</div>
                            <div class="feature">✓ Standard networking</div>
                            <div class="feature">✓ Basic support</div>
                        </div>
                        <div class="pricing-info">
                            <div class="price-details">
                                <span class="original-price">$199/month</span>
                                <span class="current-price">$149/month</span>
                                <span class="billing-cycle">12 months, then $199/month</span>
                            </div>
                        </div>
                        <button class="plan-button">Select</button>
                        <a href="#" class="learn-more">Learn more</a>
                    </div>

                    <div class="pricing-card">
                        <div class="card-header">
                            <h3>Compute Basic</h3>
                        </div>
                        <div class="plan-features">
                            <div class="feature">✓ Up to 8 vCPUs</div>
                            <div class="feature">✓ Up to 32 GB RAM</div>
                            <div class="feature">✓ Standard networking</div>
                            <div class="feature crossed">✗ Premium support</div>
                        </div>
                        <div class="pricing-info">
                            <span class="current-price">$99/month</span>
                        </div>
                        <button class="plan-button">Select</button>
                        <a href="#" class="learn-more">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.hero-section {
    background: linear-gradient(135deg, #00a9e0 0%, #0088cc 50%, #006bb3 100%);
    color: $white;
    padding-bottom: 0;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.05)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
        opacity: 0.3;
        animation: float 20s ease-in-out infinite;
    }
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }

    50% {
        transform: translateY(-10px) rotate(1deg);
    }
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.05);
    }
}

.hero-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem 6rem;
    position: relative;
    z-index: 2;
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    min-height: 60vh;
}

.hero-text {
    z-index: 2;

    .animated-title {
        font-size: 3.5rem;
        font-weight: 700;
        line-height: 1.1;
        margin-bottom: 1.5rem;
        letter-spacing: -0.02em;
        animation: slideInLeft 1s ease-out;
    }

    .animated-subtitle {
        font-size: 1.2rem;
        line-height: 1.6;
        margin-bottom: 2.5rem;
        opacity: 0.95;
        font-weight: 300;
        animation: slideInLeft 1s ease-out 0.2s both;
    }

    .animated-buttons {
        animation: fadeInUp 1s ease-out 0.4s both;
    }
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.hero-btn-link {
    text-decoration: none;
}

.hero-btn {
    padding: 1rem 2rem;
    border: none;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-block;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: width 0.3s, height 0.3s;
    }

    &:hover::before {
        width: 300px;
        height: 300px;
    }

    &.primary {
        background: $white;
        color: $primary-blue;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
        }
    }

    &.secondary {
        background: transparent;
        color: $white;
        border: 2px solid $white;

        &:hover {
            background: $white;
            color: $primary-blue;
            transform: translateY(-2px);
        }
    }
}

.hero-image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: slideInRight 1s ease-out 0.3s both;
}

.product-showcase {
    position: relative;
    max-width: 700px;
    width: 100%;
}

.image-container {
    position: relative;
    width: 100%;
    height: 500px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
    transform: perspective(1000px) rotateY(-3deg) rotateX(3deg);
    transition: transform 0.3s ease;

    &:hover {
        transform: perspective(1000px) rotateY(-1deg) rotateX(1deg) scale(1.02);
    }
}

.hero-product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(0, 169, 224, 0.1), rgba(0, 136, 204, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;

    .image-container:hover & {
        opacity: 1;
    }
}

.product-badge {
    position: absolute;
    top: -20px;
    right: -20px;
    background: rgba(255, 255, 255, 0.95);
    color: $primary-blue;
    padding: 1rem 1.5rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    animation: pulse 2s ease-in-out infinite;

    h3 {
        font-size: 1.1rem;
        font-weight: 700;
        margin: 0 0 0.5rem 0;
    }

    p {
        font-size: 0.9rem;
        margin: 0;
        opacity: 0.8;
    }
}

// Pricing Section (rest remains the same)
.pricing-section {
    background: $white;
    color: $dark-text;
    padding: 4rem 0;
}

.pricing-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    text-align: center;
}

.pricing-section h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 2rem;
    color: $dark-text;
}

.resource-selector {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}

.selector-item {
    padding: 1rem 1.5rem;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s ease;
    min-width: 60px;

    &.active,
    &:hover {
        border-color: $primary-blue;
        color: $primary-blue;
    }

    &.show-more {
        color: $primary-blue;
        border-color: $primary-blue;
        background: transparent;
    }
}

.commitment-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
}

.toggle-switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: .4s;
        border-radius: 34px;

        &:before {
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
        }
    }

    input:checked+.slider {
        background-color: $primary-blue;
    }

    input:checked+.slider:before {
        transform: translateX(26px);
    }
}

.toggle-text {
    font-size: 0.95rem;
    color: #6b7280;

    .toggle-link {
        color: $primary-blue;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
}

.pricing-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
}

.pricing-card {
    background: $white;
    border: 2px solid #e5e7eb;
    border-radius: 16px;
    padding: 2rem;
    text-align: left;
    transition: all 0.3s ease;

    &.featured {
        border-color: $primary-blue;
        position: relative;

        .plan-badge {
            position: absolute;
            top: -12px;
            left: 50%;
            transform: translateX(-50%);
            background: $primary-blue;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
        }
    }

    &:hover {
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        transform: translateY(-5px);
    }
}

.card-header h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: $dark-text;
}

.plan-features {
    margin-bottom: 2rem;

    .feature {
        padding: 0.5rem 0;
        font-size: 0.95rem;
        color: #4b5563;

        &.crossed {
            color: #9ca3af;
            text-decoration: line-through;
        }
    }
}

.pricing-info {
    margin-bottom: 2rem;

    .price-details {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .original-price {
        font-size: 0.9rem;
        color: #9ca3af;
        text-decoration: line-through;
    }

    .current-price {
        font-size: 2rem;
        font-weight: 700;
        color: $primary-blue;
    }

    .billing-cycle {
        font-size: 0.85rem;
        color: #6b7280;
    }
}

.plan-button {
    width: 100%;
    padding: 1rem;
    border: 2px solid $primary-blue;
    border-radius: 25px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-bottom: 1rem;

    &.primary {
        background: $primary-blue;
        color: white;

        &:hover {
            background: darken($primary-blue, 8%);
        }
    }

    &:not(.primary) {
        background: transparent;
        color: $primary-blue;

        &:hover {
            background: $primary-blue;
            color: white;
        }
    }
}

.learn-more {
    display: block;
    text-align: center;
    color: $primary-blue;
    text-decoration: none;
    font-weight: 500;

    &:hover {
        text-decoration: underline;
    }
}

// Responsive design
@media (max-width: 968px) {
    .hero-content {
        grid-template-columns: 1fr;
        gap: 3rem;
        text-align: center;
    }

    .hero-text .animated-title {
        font-size: 2.8rem;
    }

    .pricing-cards {
        grid-template-columns: 1fr;
    }

    .resource-selector {
        gap: 0.5rem;
    }

    .selector-item {
        padding: 0.75rem 1rem;
        min-width: 50px;
    }
}

@media (max-width: 768px) {
    .hero-container {
        padding: 3rem 1.5rem 4rem;
    }

    .hero-text .animated-title {
        font-size: 2.2rem;
    }

    .hero-text .animated-subtitle {
        font-size: 1.1rem;
    }

    .hero-buttons {
        justify-content: center;
    }

    .hero-btn {
        padding: 0.8rem 1.5rem;
        font-size: 0.9rem;
    }

    .product-badge {
        position: static;
        margin-top: 1rem;
        display: inline-block;
    }

    .commitment-toggle {
        flex-direction: column;
        gap: 0.5rem;
    }

    .image-container {
        height: 350px;
        transform: none;

        &:hover {
            transform: scale(1.02);
        }
    }
}

@media (max-width: 480px) {
    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }

    .hero-btn {
        width: 100%;
        max-width: 280px;
    }

    .resource-selector {
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
    }
}
</style>