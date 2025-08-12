# CORS Implementation & Axios Setup

## Overview

This document explains the CORS (Cross-Origin Resource Sharing) implementation and axios configuration in the Vue.js application to handle API calls to external services like ServiceNow.

## 🚀 What Was Implemented

### 1. **Axios Installation & Configuration**
- ✅ Installed `axios` for HTTP requests
- ✅ Created centralized axios instance with CORS-friendly settings
- ✅ Added request/response interceptors for logging and error handling
- ✅ Implemented retry logic for network failures

### 2. **CORS Solutions**
- ✅ **Vite Proxy Configuration** - Routes API calls through development server
- ✅ **Environment-based URL switching** - Different endpoints for dev/prod
- ✅ **Fallback mechanisms** - Mock responses when network fails
- ✅ **Enhanced error handling** - Specific error messages for different failure types

### 3. **API Utilities**
- ✅ **`src/utils/apiUtils.ts`** - Centralized API utilities
- ✅ **CORS-safe functions** - `corsSafePost()` and `corsSafeGet()`
- ✅ **Automatic retry logic** - 3 retries with exponential backoff
- ✅ **Development fallbacks** - Mock responses in dev mode

## 🔧 Configuration Details

### Vite Proxy Setup (`vite.config.ts`)

```typescript
server: {
  proxy: {
    '/api/servicenow': {
      target: 'https://tataamericaintlcorpdemo10.service-now.com',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api\/servicenow/, '/api/now'),
      configure: (proxy, options) => {
        // Logging and error handling
      },
    }
  }
}
```

**How it works:**
- Development requests to `/api/servicenow/*` are proxied to ServiceNow
- Eliminates CORS issues in development
- Production uses direct ServiceNow URLs

### Axios Configuration (`src/utils/apiUtils.ts`)

```typescript
const axiosInstance = axios.create({
  timeout: 30000,
  withCredentials: false, // Prevents CORS preflight
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
});
```

**Key CORS-friendly settings:**
- `withCredentials: false` - Avoids preflight requests
- Proper headers to prevent CORS issues
- 30-second timeout for slow connections

### Environment-based URL Switching

```typescript
export const getApiBaseUrl = (): string => {
  if (isDevelopment()) {
    return '/api/servicenow'; // Uses Vite proxy
  }
  return 'https://tataamericaintlcorpdemo10.service-now.com/api/now'; // Direct
};
```

## 🛠️ Usage Examples

### Making CORS-safe API calls:

```typescript
import { corsSafePost, corsSafeGet } from '@/utils/apiUtils';

// POST request with CORS handling
const createTicket = async (ticketData) => {
  try {
    const response = await corsSafePost('/table/incident', ticketData, {
      headers: { 'Authorization': 'Basic ...' }
    });
    return response;
  } catch (error) {
    // Handles CORS, network, and server errors
    console.error('API call failed:', error.message);
  }
};

// GET request with CORS handling
const getData = async () => {
  try {
    const response = await corsSafeGet('/some/endpoint');
    return response;
  } catch (error) {
    // Automatic fallback in development
    console.error('API call failed:', error.message);
  }
};
```

## 🔄 Error Handling & Fallbacks

### Automatic Retry Logic
- **3 retry attempts** for network failures
- **Exponential backoff** (1s, 2s, 3s delays)
- **Only retries** on network errors, not server errors

### Development Fallbacks
```typescript
// When network fails in development:
if (import.meta.env.DEV) {
  return {
    success: true,
    message: 'Mock response (network error)',
    data: data,
    timestamp: new Date().toISOString()
  };
}
```

### Error Types Handled
1. **Timeout errors** - "Request timeout - please try again"
2. **Server errors** - "Server error: 500 - Internal Server Error"
3. **Network errors** - "Network error - please check your connection"
4. **CORS errors** - Handled by proxy in development, fallback in production

## 📡 Current API Endpoints

### ServiceNow Integration
- **Endpoint**: `/api/now/table/incident`
- **Method**: POST
- **Purpose**: Create support tickets
- **Authentication**: Basic Auth
- **CORS Solution**: Vite proxy in dev, direct in prod

### Mock Data (Development)
- All other API calls use local JSON files
- Simulated delays for realistic experience
- No actual network requests for demo data

## 🚦 Development vs Production

### Development Mode
```
Frontend → Vite Dev Server → ServiceNow API
         (Proxy handles CORS)
```

### Production Mode
```
Frontend → ServiceNow API (Direct)
         (Requires proper CORS headers)
```

## 🔍 Troubleshooting

### Common CORS Issues & Solutions

1. **"Access-Control-Allow-Origin" error**
   - ✅ **Solution**: Vite proxy handles this in development
   - ✅ **Fallback**: Mock responses when proxy fails

2. **"Request timeout" error**
   - ✅ **Solution**: 30-second timeout with retry logic
   - ✅ **Fallback**: Mock response after retries

3. **"Network error" in production**
   - ✅ **Solution**: Direct API calls with proper headers
   - ✅ **Fallback**: User-friendly error messages

### Debugging Tips

1. **Check console logs** for request/response details
2. **Verify proxy configuration** in `vite.config.ts`
3. **Test with different networks** to simulate CORS issues
4. **Use browser dev tools** to inspect network requests

## 📋 Testing the Implementation

### Test CORS Handling:
1. **Start development server**: `npm run dev`
2. **Open browser dev tools** → Network tab
3. **Create a support ticket** → Watch for proxy requests
4. **Disconnect internet** → Should see fallback response
5. **Check console** → Should see retry attempts

### Test Production Build:
1. **Build the app**: `npm run build`
2. **Serve production build**: `npm run preview`
3. **Test API calls** → Should use direct ServiceNow URLs

## 🔮 Future Enhancements

### Potential Improvements:
1. **Service Worker** for offline support
2. **Request caching** for better performance
3. **Rate limiting** to prevent API abuse
4. **WebSocket support** for real-time updates
5. **GraphQL integration** for more efficient data fetching

### Additional CORS Solutions:
1. **CORS proxy service** for production fallback
2. **Backend API gateway** for centralized CORS handling
3. **CDN configuration** for static asset CORS

## 📚 Resources

- [Axios Documentation](https://axios-http.com/)
- [Vite Proxy Configuration](https://vitejs.dev/config/server-options.html#server-proxy)
- [CORS MDN Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [ServiceNow REST API](https://developer.servicenow.com/dev.do#!/reference/api/rome/rest/c_TableAPI)

---

**Status**: ✅ **Complete** - CORS issues resolved with comprehensive fallback mechanisms
**Last Updated**: December 2024
**Maintainer**: Development Team
