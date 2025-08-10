<template>
    <footer class="page-footer dark-theme">
        <div class="container">
            <div class="footer-top">
                <div class="logo-container">
                    <RouterLink to="/" class="logo">SovereignAI Cloud</RouterLink>
                    <p class="tagline">{{ t('footer.tagline') }}</p>
                </div>
                <nav class="footer-navigation">
                    <div class="nav-column">
                        <strong>{{ t('footer.solutions') }}</strong>
                        <ul>
                            <li>
                                <RouterLink to="/purchase">{{ t('footer.aiMarketplace') }}</RouterLink>
                            </li>
                            <li><a href="#">{{ t('footer.aiFactory') }}</a></li>
                            <li>
                                <RouterLink to="/category/iaas">{{ t('footer.gpuServices') }}</RouterLink>
                            </li>
                        </ul>
                    </div>
                    <div class="nav-column">
                        <strong>{{ t('footer.resources') }}</strong>
                        <ul>
                            <li><a href="#">{{ t('footer.security') }}</a></li>
                            <li><a href="#">{{ t('footer.documentation') }}</a></li>
                            <li><a href="#">{{ t('footer.caseStudies') }}</a></li>
                            <li><a href="#">{{ t('footer.whitepapers') }}</a></li>
                            <li><a href="#">{{ t('footer.blog') }}</a></li>
                        </ul>
                    </div>
                    <div class="nav-column">
                        <strong>{{ t('footer.company') }}</strong>
                        <ul>
                            <li><a href="#">{{ t('footer.aboutUs') }}</a></li>
                            <li><a href="#">{{ t('footer.careers') }}</a></li>
                            <li>
                                <RouterLink to="/account/support">{{ t('footer.contact') }}</RouterLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <hr class="separator">
            <div class="footer-bottom">
                <span class="copyright">{{ t('footer.copyright') }}</span>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.page-footer {
    background-color: #0d0d2b; // A deep navy blue
    color: $white;
    padding: 4rem 1rem;
    font-size: 0.875rem;

    .container {
        max-width: 1280px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    a {
        color: #a9a9d8;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
}

.footer-top {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    padding-bottom: 3rem;
}

.logo-container {
    flex: 0 0 300px;
}

.logo {
    font-size: 1.75rem;
    font-weight: 800;
    color: $white;
    text-decoration: none;
}

.tagline {
    margin-top: 1rem;
    color: #a9a9d8;
    line-height: 1.5;
}

.footer-navigation {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    flex-grow: 1;
    max-width: 800px;
}

.nav-column {
    strong {
        display: block;
        margin-bottom: 1rem;
        font-size: 1rem;
        color: $white;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        margin-bottom: 0.75rem;
    }
}

.separator {
    border: 0;
    border-top: 1px solid #334155;
    margin: 0 0 1.5rem 0;
}

.footer-bottom {
    display: flex;
    justify-content: flex-end;
    /* Align to the right */
    align-items: center;
    width: 100%;
    font-size: 0.8rem;
    color: #a9a9d8;
}
</style>