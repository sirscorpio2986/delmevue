<template>
    <div class="admin-settings-view">
        <h1 class="page-title">Admin Settings</h1>
        <p class="page-subtitle">Manage organization-wide settings, user roles, and security policies.</p>

        <div class="settings-card">
            <h2 class="card-title">General Organization Settings</h2>
            <form @submit.prevent="saveGeneralSettings">
                <div class="form-group">
                    <label for="orgName">Organization Name</label>
                    <input type="text" id="orgName" v-model="settings.organizationName"
                        placeholder="Enter organization name">
                </div>
                <div class="form-group">
                    <label for="orgEmail">Primary Contact Email</label>
                    <input type="email" id="orgEmail" v-model="settings.primaryContactEmail"
                        placeholder="Enter primary contact email">
                </div>
                <div class="form-group">
                    <label for="orgRegion">Default Region</label>
                    <select id="orgRegion" v-model="settings.defaultRegion">
                        <option value="Norway (SC2)">Norway (SC2)</option>
                        <option value="Sweden (ST3)">Sweden (ST3)</option>
                        <option value="Finland (FI1)">Finland (FI1)</option>
                        <option value="Denmark (DK1)">Denmark (DK1)</option>
                    </select>
                </div>
                <button type="submit" class="primary-btn" :disabled="isSaving">
                    {{ isSaving ? 'Saving...' : 'Save General Settings' }}
                </button>
            </form>
        </div>

        <div class="settings-card">
            <h2 class="card-title">User & Role Management</h2>
            <p>Manage users, invite new members, and assign roles within your organization.</p>
            <div class="card-actions">
                <button class="secondary-btn">Go to User Management</button>
                <button class="secondary-btn">Invite New User</button>
            </div>
        </div>

        <div class="settings-card">
            <h2 class="card-title">API Key Management</h2>
            <p>Generate and revoke API keys for programmatic access to services.</p>
            <div class="card-actions">
                <button class="secondary-btn">Manage API Keys</button>
                <button class="secondary-btn">Generate New Key</button>
            </div>
        </div>

        <div class="settings-card">
            <h2 class="card-title">Security & Compliance</h2>
            <p>Configure security policies, compliance settings, and access controls.</p>
            <div class="card-actions">
                <button class="secondary-btn">Security Settings</button>
                <button class="secondary-btn">Compliance Dashboard</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { apiService } from '@/services/apiService';

interface AdminSettings {
    organizationName: string;
    primaryContactEmail: string;
    defaultRegion: string;
}

const settings = ref<AdminSettings>({
    organizationName: '',
    primaryContactEmail: '',
    defaultRegion: ''
});

const isSaving = ref(false);

onMounted(async () => {
    try {
        settings.value = await apiService.getAdminSettings();
    } catch (error) {
        console.error('Error loading admin settings:', error);
    }
});

const saveGeneralSettings = async () => {
    isSaving.value = true;
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Settings saved:', settings.value);
        // Here you would typically call an API to save the settings
    } catch (error) {
        console.error('Error saving settings:', error);
    } finally {
        isSaving.value = false;
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.admin-settings-view {
    max-width: 800px;
    margin: 0 auto;
}

.page-title {
    font-size: 2.25rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
    color: $text-dark;
    background: linear-gradient(135deg, $primary-blue 0%, #1e40af 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.page-subtitle {
    margin-bottom: 2rem;
    color: #64748b;
    font-size: 1.1rem;
    line-height: 1.6;
}

.settings-card {
    background-color: $white;
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid $border-grey;
    margin-bottom: 1.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;

    &:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .card-title {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: $text-dark;
    }

    p {
        color: #64748b;
        margin-bottom: 1.5rem;
        line-height: 1.6;
    }

    .card-actions {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }
}

.form-group {
    margin-bottom: 1.5rem;

    label {
        display: block;
        font-weight: 500;
        margin-bottom: 0.5rem;
        color: $text-dark;
        font-size: 0.9rem;
    }

    input,
    select {
        width: 100%;
        max-width: 400px;
        padding: 0.75rem;
        border: 1px solid $border-grey;
        border-radius: 8px;
        font-size: 1rem;
        font-family: inherit;
        background: $white;
        color: $text-dark;
        transition: all 0.2s ease;

        &:focus {
            outline: none;
            border-color: $primary-blue;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        &::placeholder {
            color: #94a3b8;
        }
    }

    select {
        cursor: pointer;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
        background-position: right 0.5rem center;
        background-repeat: no-repeat;
        background-size: 1.5em 1.5em;
        padding-right: 2.5rem;
        appearance: none;
    }
}

.primary-btn {
    background-color: $primary-blue;
    color: $white;
    border: none;
    border-radius: 8px;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover:not(:disabled) {
        background-color: darken($primary-blue, 10%);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
    }
}

.secondary-btn {
    background-color: #f8fafc;
    border: 1px solid $border-grey;
    color: $text-dark;
    border-radius: 8px;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background-color: #f1f5f9;
        border-color: $primary-blue;
        color: $primary-blue;
        transform: translateY(-1px);
    }
}

// Responsive Design
@media (max-width: 768px) {
    .admin-settings-view {
        padding: 0 1rem;
    }

    .page-title {
        font-size: 1.875rem;
    }

    .settings-card {
        padding: 1.5rem;
    }

    .card-actions {
        flex-direction: column;
    }

    .secondary-btn {
        width: 100%;
    }
}

@media (max-width: 480px) {
    .page-title {
        font-size: 1.5rem;
    }

    .settings-card {
        padding: 1rem;
    }

    .form-group input,
    .form-group select {
        max-width: 100%;
    }
}
</style>