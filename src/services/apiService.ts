import productsData from '@/data/products.json'
import usageData from '@/data/usage.json'
import invoicesData from '@/data/invoices.json'
import ticketsData from '@/data/tickets.json'
import platformServicesData from '@/data/platformServices.json'
import dashboardStatsData from '@/data/dashboardStats.json'
import recentActivityData from '@/data/recentActivity.json'
import myResourcesData from '@/data/myResources.json'
import usageBillingData from '@/data/usageBillingData.json'
import adminSettingsData from '@/data/adminSettings.json'
import gpuServicesData from '@/data/gpuServices.json'
import supportTiersData from '@/data/supportTiers.json'
import addOnsData from '@/data/addOns.json'

export const apiService = {
  async getProducts() {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 200))
    
    // Return the imported product data
    return productsData
  },

  async getUsageData() {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 150))
    
    // Return the imported usage data
    return usageData
  },

  async getInvoices() {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 180))
    
    // Return the imported invoices data
    return invoicesData
  },

  async getSupportTickets() {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 160))
    
    // Return the imported tickets data
    return ticketsData
  },

  async getProductsByCategory(categoryName: string) {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 200))
    
    // Filter products by category and return matching ones
    return productsData.filter(product => product.category === categoryName)
  },

  async getPlatformServices() {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 150))
    
    // Return the platform services data
    return platformServicesData
  },

  async getDashboardStats() {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 120))
    
    // Return the dashboard stats data
    return dashboardStatsData
  },

  async getRecentActivity() {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 100))
    
    // Return the recent activity data
    return recentActivityData
  },

  async getMyResources() {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 150))
    
    // Return the my resources data
    return myResourcesData
  },

  async getUsageBillingData() {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 200))
    
    // Return the usage billing data
    return usageBillingData
  },

  async getAdminSettings() {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 200))
    
    // Return the admin settings data
    return adminSettingsData
  },

  async getGpuServices() {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 200))
    
    // Return the GPU services data
    return gpuServicesData
  },

  async getSupportTiers() {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 200))
    
    // Return the support tiers data
    return supportTiersData
  },

  async getAddOnServices() {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 200))
    
    // Return the add-on services data
    return addOnsData
  },

  async createSupportTicket(ticketData: { short_description: string, description: string }) {
    const endpoint = 'https://tataamericaintlcorpdemo10.service-now.com/api/now/table/incident';

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic Y2xvdWRhdG9tYXRpb246QXV0b21hdGlvbjEyMyE='
    };

    const payload = {
      "caller_id": "a9ca92193b8be610ec07b97906e45a1a",
      "contact_type": "self_service",
      "assignment_group": "c09c0b2e3bfaded0ec07b97906e45a7e",
      "short_description": ticketData.short_description,
      "description": ticketData.description
    };

    console.log('API Service - Endpoint:', endpoint);
    console.log('API Service - Headers:', headers);
    console.log('API Service - Payload:', payload);
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(payload)
      });

      console.log('API Service - Response status:', response.status);
      console.log('API Service - Response headers:', response.headers);

      if (!response.ok) {
        // Throw an error with status text if the response is not successful
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const responseData = await response.json();
      console.log('API Service - Response data:', responseData);
      return responseData;
    } catch (error) {
      console.error("Failed to create support ticket:", error);
      throw error;
    }
  }
} 