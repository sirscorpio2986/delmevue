import productsData from '@/data/products.json'
import usageData from '@/data/usage.json'
import invoicesData from '@/data/invoices.json'
import ticketsData from '@/data/tickets.json'

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
  }
} 