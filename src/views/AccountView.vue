<template>
    <div class="account-layout">
        <AccountSidebar />
        <main class="main-content">
            <RouterView />
        </main>
    </div>
</template>

<script setup lang="ts">
import AccountSidebar from '@/components/AccountSidebar.vue';
import { RouterView } from 'vue-router';
</script>

<style lang="scss" scoped>
.account-layout {
    display: flex;
}

.main-content {
    flex: 1;
    margin-left: 260px; // This should be the same as the sidebar width
    padding: 2.5rem;
    background-color: #f1f5f9; // Light background for content area
    min-height: 100vh;
}
</style>