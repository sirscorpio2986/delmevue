<template>
    <section class="features-section">
        <div class="container">
            <h2>Our Platform Services</h2>
            <p class="section-subtitle">We have many different AI services to choose from. Compare and find the best
                solutions for your enterprise needs.</p>

            <ul class="card-deck__cards container-fluid container-lg d-flex gap-medium gap-md-large p-0">
                <li class="w-100">
                    <article class="tn-card d-flex flex-column h-100">
                        <div class="tn-card__image border border-bottom-0 border-primary" role="img"
                            aria-label="GPU processing unit visualization"></div>
                        <div
                            class="tn-card__content d-flex flex-column flex-grow-1 border border-primary bg-white border-top-0">
                            <h3 class="font-zebra mb-xsmall mt-none mb-lg-medium text-primary">GPU-as-a-Service</h3>
                            <div class="tnse-editorial font-mango mb-large mb-lg-xlarge text-secondary">
                                <p>Elastic, multi-tenant, sovereign EU GPU clusters with on-demand, reserved & dedicated
                                    options. Support for NVIDIA H100, L40S, and MI300 (roadmap).</p>
                            </div>
                            <a class="tn-button mt-auto align-self-start fs-button-small fs-lg-button-medium fw-medium"
                                href="#" title="Explore Platform">Explore</a>
                        </div>
                    </article>
                </li>

                <li class="w-100">
                    <article class="tn-card d-flex flex-column h-100">
                        <div class="tn-card__image border border-bottom-0 border-primary" role="img"
                            aria-label="Model catalog and registry visualization"></div>
                        <div
                            class="tn-card__content d-flex flex-column flex-grow-1 border border-primary bg-white border-top-0">
                            <h3 class="font-zebra mb-xsmall mt-none mb-lg-medium text-primary">Model Catalog & Registry
                            </h3>
                            <div class="tnse-editorial font-mango mb-large mb-lg-xlarge text-secondary">
                                <p>Curated, validated models with provenance tracking, versioning, bias & drift checks,
                                    and enterprise distribution controls.</p>
                            </div>
                            <a class="tn-button mt-auto align-self-start fs-button-small fs-lg-button-medium fw-medium"
                                href="#" title="Browse Models">Browse models</a>
                        </div>
                    </article>
                </li>

                <li class="w-100">
                    <article class="tn-card d-flex flex-column h-100">
                        <div class="tn-card__image border border-bottom-0 border-primary" role="img"
                            aria-label="Secure AI laboratory workspace"></div>
                        <div
                            class="tn-card__content d-flex flex-column flex-grow-1 border border-primary bg-white border-top-0">
                            <h3 class="font-zebra mb-xsmall mt-none mb-lg-medium text-primary">Secure AI Lab</h3>
                            <div class="tnse-editorial font-mango mb-large mb-lg-xlarge text-secondary">
                                <p>Isolated experiment workspaces with governed data access, notebook runtimes, lineage
                                    capture, and SOC2/HIPAA-aligned controls.</p>
                            </div>
                            <a class="tn-button mt-auto align-self-start fs-button-small fs-lg-button-medium fw-medium"
                                href="#" title="Spin up Lab">Spin up Lab</a>
                        </div>
                    </article>
                </li>

                <li class="w-100">
                    <article class="tn-card d-flex flex-column h-100">
                        <div class="tn-card__image border border-bottom-0 border-primary" role="img"
                            aria-label="AI Studio applications workspace"></div>
                        <div
                            class="tn-card__content d-flex flex-column flex-grow-1 border border-primary bg-white border-top-0">
                            <h3 class="font-zebra mb-xsmall mt-none mb-lg-medium text-primary">AI Studio Apps</h3>
                            <div class="tnse-editorial font-mango mb-large mb-lg-xlarge text-secondary">
                                <p>Low-code / pro-code environment to assemble RAG apps, copilots, dashboards, and
                                    vertical
                                    accelerators with enterprise SSO & audit.</p>
                            </div>
                            <a class="tn-button mt-auto align-self-start fs-button-small fs-lg-button-medium fw-medium"
                                href="#" title="Build an App">Build an App</a>
                        </div>
                    </article>
                </li>

                <li class="w-100">
                    <article class="tn-card d-flex flex-column h-100">
                        <div class="tn-card__image border border-bottom-0 border-primary" role="img"
                            aria-label="LLM API access and token management"></div>
                        <div
                            class="tn-card__content d-flex flex-column flex-grow-1 border border-primary bg-white border-top-0">
                            <h3 class="font-zebra mb-xsmall mt-none mb-lg-medium text-primary">LLM API Access</h3>
                            <div class="tnse-editorial font-mango mb-large mb-lg-xlarge text-secondary">
                                <p>Central token brokering for internal & 3rd-party LLMs with usage policies, cost caps,
                                    key
                                    rotation, and audit-ready logging.</p>
                            </div>
                            <a class="tn-button mt-auto align-self-start fs-button-small fs-lg-button-medium fw-medium"
                                href="#" title="Manage Tokens">Manage Tokens</a>
                        </div>
                    </article>
                </li>

                <li class="w-100">
                    <article class="tn-card d-flex flex-column h-100">
                        <div class="tn-card__image border border-bottom-0 border-primary" role="img"
                            aria-label="Data fabric and governance infrastructure"></div>
                        <div
                            class="tn-card__content d-flex flex-column flex-grow-1 border border-primary bg-white border-top-0">
                            <h3 class="font-zebra mb-xsmall mt-none mb-lg-medium text-primary">Data Fabric & Governance
                            </h3>
                            <div class="tnse-editorial font-mango mb-large mb-lg-xlarge text-secondary">
                                <p>Unified data ingestion, transformation, and access layers with sensitive data
                                    masking,
                                    encryption, and immutable audit logs.</p>
                            </div>
                            <a class="tn-button mt-auto align-self-start fs-button-small fs-lg-button-medium fw-medium"
                                href="#" title="Setup Fabric">Setup Fabric</a>
                        </div>
                    </article>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
// No additional logic needed for static feature cards
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.features-section {
    padding: 6rem 0;
    background: #fafbfc;

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    h2 {
        text-align: center;
        font-size: 1.25rem;
        line-height: 1.4;
        margin-bottom: 1rem;
        color: $brand-blue;
        font-weight: 700;
        font-family: $font-family-base;
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        display: block;
        float: none;
        position: static;
        z-index: auto;
    }

    .section-subtitle {
        text-align: center;
        font-size: 1.125rem;
        color: $text-light;
        margin-bottom: 4rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        font-family: $font-family-base;
    }

    // Telenor card deck styling
    .card-deck__cards {
        overflow-x: auto;
        scrollbar-width: none;
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;

        @media (min-width: 768px) {
            gap: 1.5rem;
        }
    }

    .container-fluid {
        --bs-gutter-x: 1.5rem;
        --bs-gutter-y: 0;
        width: 100%;
        padding-right: calc(var(--bs-gutter-x)*.5);
        padding-left: calc(var(--bs-gutter-x)*.5);
        margin-right: auto;
        margin-left: auto;
    }

    .container-lg {
        max-width: 1170px;
    }

    .d-flex {
        display: flex !important;
    }

    .gap-medium {
        gap: 1rem !important;
    }

    @media (min-width: 768px) {
        .gap-md-large {
            gap: 1.5rem !important;
        }
    }

    .p-0 {
        padding: 0 !important;
    }

    .w-100 {
        width: 100% !important;
        flex: 1;
        min-width: 300px;

        @media (min-width: 768px) {
            flex: 0 0 calc(50% - 0.75rem); // 2 columns on medium screens
        }

        @media (min-width: 1200px) {
            flex: 0 0 calc(33.333% - 1rem); // 3 columns on large screens
        }
    }

    // Telenor card styling - EXACT match to screenshot
    .tn-card {
        display: flex;
        flex-direction: column;
        height: 100%;
        border-radius: 0.375rem;
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        background: white;

        &:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
    }

    .tn-card__image {
        height: 200px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        position: relative;
        border-top-left-radius: 0.375rem;
        border-top-right-radius: 0.375rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        &::before {
            content: '';
            width: 80px;
            height: 80px;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            opacity: 0.9;
            position: relative;
            z-index: 2;
        }
    }

    // Different images and icons for each card
    .tn-card:nth-child(1) .tn-card__image {
        background-image: url('https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800');
    }

    .tn-card:nth-child(1) .tn-card__image::before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.236l7.5 4.236v7.056L12 17.764l-7.5-4.236V8.472L12 4.236z'/%3E%3Cpath d='M12 6l-4 2.5v3L12 14l4-2.5v-3L12 6z'/%3E%3C/svg%3E");
    }

    .tn-card:nth-child(2) .tn-card__image {
        background-image: url('https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800');
    }

    .tn-card:nth-child(2) .tn-card__image::before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z'/%3E%3C/svg%3E");
    }

    .tn-card:nth-child(3) .tn-card__image {
        background-image: url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800');
    }

    .tn-card:nth-child(3) .tn-card__image::before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'/%3E%3C/svg%3E");
    }

    .tn-card:nth-child(4) .tn-card__image {
        background-image: url('https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800');
    }

    .tn-card:nth-child(4) .tn-card__image::before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M9 3v1H4v2h1v3a4 4 0 0 0 4 4h1a2 2 0 0 1 2 2v3h-1a2 2 0 0 1-2-2v-1H4v-2h5v-1a2 2 0 0 0-2-2H6a2 2 0 0 1-2-2V5H3V3h6z'/%3E%3C/svg%3E");
    }

    .tn-card:nth-child(5) .tn-card__image {
        background-image: url('https://images.pexels.com/photos/3183151/pexels-photo-3183151.jpeg?auto=compress&cs=tinysrgb&w=800');
    }

    .tn-card:nth-child(5) .tn-card__image::before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E");
    }

    .tn-card:nth-child(6) .tn-card__image {
        background-image: url('https://images.pexels.com/photos/3183152/pexels-photo-3183152.jpeg?auto=compress&cs=tinysrgb&w=800');
    }

    .tn-card:nth-child(6) .tn-card__image::before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M3 3v18h18V3H3zm16 16H5V5h14v14z'/%3E%3Cpath d='M7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z'/%3E%3C/svg%3E");
    }

    .tn-card__content {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        background: white;
        padding: 1.5rem;
        border-bottom-left-radius: 0.375rem;
        border-bottom-right-radius: 0.375rem;
    }

    .border {
        border: 1px solid #dee2e6 !important;
    }

    .border-primary {
        border-color: $brand-blue !important;
    }

    .border-bottom-0 {
        border-bottom: 0 !important;
    }

    .border-top-0 {
        border-top: 0 !important;
    }

    .bg-white {
        background-color: white !important;
    }

    .flex-column {
        flex-direction: column !important;
    }

    .flex-grow-1 {
        flex-grow: 1 !important;
    }

    .h-100 {
        height: 100% !important;
    }

    // Typography styling - EXACT Telenor classes
    .font-zebra {
        font-family: $font-family-base;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.4;
        color: $brand-blue;
        margin: 0;
    }

    .font-mango {
        font-family: $font-family-base;
        font-size: 1rem;
        line-height: 1.4rem;
        font-weight: 400;
        color: $text-light;
    }

    .text-primary {
        color: $brand-blue !important;
    }

    .text-secondary {
        color: $text-light !important;
    }

    // Spacing utilities - EXACT Telenor spacing
    .mb-xsmall {
        margin-bottom: 0.5rem;
    }

    .mb-large {
        margin-bottom: 2rem;
    }

    .mb-lg-medium {
        @media (min-width: 992px) {
            margin-bottom: 1rem;
        }
    }

    .mb-lg-xlarge {
        @media (min-width: 992px) {
            margin-bottom: 3rem;
        }
    }

    .mt-none {
        margin-top: 0;
    }

    .mt-auto {
        margin-top: auto;
    }

    .align-self-start {
        align-self: flex-start;
    }

    // Button styling - EXACT Telenor button
    .tn-button {
        background: $brand-blue;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 0.375rem;
        font-weight: 600;
        font-size: 0.875rem;
        text-decoration: none;
        display: inline-block;
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover {
            background: darken($brand-blue, 10%);
            transform: translateY(-2px);
            text-decoration: none;
            color: white;
        }
    }

    .fs-button-small {
        font-size: 0.875rem;
    }

    .fs-lg-button-medium {
        @media (min-width: 992px) {
            font-size: 1rem;
        }
    }

    .fw-medium {
        font-weight: 500;
    }

    // Responsive design
    @media (max-width: 767px) {
        .card-deck__cards {
            flex-direction: column;
        }

        .w-100 {
            flex: 0 0 100%;
        }
    }
}
</style>