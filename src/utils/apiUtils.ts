import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// API configuration
const API_CONFIG = {
  timeout: 30000,
  retries: 3,
  retryDelay: 1000,
  baseURL: import.meta.env.DEV ? '/api' : undefined
};

// Create axios instance with CORS-friendly configuration
export const createApiInstance = (): AxiosInstance => {
  const instance = axios.create({
    timeout: API_CONFIG.timeout,
    withCredentials: false, // Disable credentials to avoid CORS preflight
    baseURL: API_CONFIG.baseURL,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }
  });

  // Request interceptor for logging and common headers
  instance.interceptors.request.use(
    (config) => {
      console.log('🚀 API Request:', config.method?.toUpperCase(), config.url);
      
      // Add timestamp for cache busting if needed
      if (config.method === 'get') {
        config.params = { ...config.params, _t: Date.now() };
      }
      
      return config;
    },
    (error) => {
      console.error('❌ Request Error:', error);
      return Promise.reject(error);
    }
  );

  // Response interceptor for logging and error handling
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      console.log('✅ API Response:', response.status, response.config.url);
      return response;
    },
    async (error) => {
      console.error('❌ Response Error:', error.response?.status, error.message);
      
      // Retry logic for network errors
      if (error.code === 'ECONNABORTED' || !error.response) {
        const config = error.config;
        config.retryCount = config.retryCount || 0;
        
        if (config.retryCount < API_CONFIG.retries) {
          config.retryCount += 1;
          console.log(`🔄 Retrying request (${config.retryCount}/${API_CONFIG.retries})`);
          
          // Wait before retrying
          await new Promise(resolve => setTimeout(resolve, API_CONFIG.retryDelay * config.retryCount));
          
          return instance(config);
        }
      }
      
      return Promise.reject(error);
    }
  );

  return instance;
};

// CORS-friendly POST request with fallback
export const corsSafePost = async <T = any>(
  url: string, 
  data: any, 
  config?: AxiosRequestConfig
): Promise<T> => {
  const apiInstance = createApiInstance();
  
  try {
    const response = await apiInstance.post<T>(url, data, config);
    return response.data;
  } catch (error: any) {
    // Handle CORS and network errors gracefully
    if (error.code === 'ECONNABORTED') {
      throw new Error('Request timeout - please try again');
    } else if (error.response) {
      throw new Error(`Server error: ${error.response.status} - ${error.response.statusText}`);
    } else if (error.request) {
      // Network error (CORS, no internet, etc.)
      console.warn('Network error detected, using fallback response');
      
      // Return mock response in development
      if (import.meta.env.DEV) {
        return {
          success: true,
          message: 'Mock response (network error)',
          data: data,
          timestamp: new Date().toISOString()
        } as T;
      }
      
      throw new Error('Network error - please check your connection and try again');
    } else {
      throw new Error(`Request failed: ${error.message}`);
    }
  }
};

// CORS-friendly GET request with fallback
export const corsSafeGet = async <T = any>(
  url: string, 
  config?: AxiosRequestConfig
): Promise<T> => {
  const apiInstance = createApiInstance();
  
  try {
    const response = await apiInstance.get<T>(url, config);
    return response.data;
  } catch (error: any) {
    // Handle CORS and network errors gracefully
    if (error.code === 'ECONNABORTED') {
      throw new Error('Request timeout - please try again');
    } else if (error.response) {
      throw new Error(`Server error: ${error.response.status} - ${error.response.statusText}`);
    } else if (error.request) {
      console.warn('Network error detected, using fallback response');
      
      if (import.meta.env.DEV) {
        return {
          success: true,
          message: 'Mock response (network error)',
          data: null,
          timestamp: new Date().toISOString()
        } as T;
      }
      
      throw new Error('Network error - please check your connection and try again');
    } else {
      throw new Error(`Request failed: ${error.message}`);
    }
  }
};

// Check if running in development mode
export const isDevelopment = (): boolean => {
  return import.meta.env.DEV;
};

// Check if running in production mode
export const isProduction = (): boolean => {
  return import.meta.env.PROD;
};

// Get appropriate API base URL
export const getApiBaseUrl = (): string => {
  if (isDevelopment()) {
    return '/api/servicenow';
  }
  return 'https://tataamericaintlcorpdemo10.service-now.com/api/now';
};
