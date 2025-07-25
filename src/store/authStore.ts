import { defineStore } from 'pinia'
import { ref } from 'vue'

interface User {
  id: string
  username: string
  email: string
  name: string
}

export const useAuthStore = defineStore('auth', () => {
  // State
  const isLoggedIn = ref(false)
  const user = ref<User | null>(null)

  // Actions
  const login = (username: string, password: string): boolean => {
    // Hardcoded credentials check
    if (username === 'admin' && password === 'password') {
      isLoggedIn.value = true
      user.value = {
        id: '1',
        username: 'admin',
        email: 'admin@mycloud.ai',
        name: 'Administrator'
      }
      return true
    }
    return false
  }

  const logout = () => {
    isLoggedIn.value = false
    user.value = null
  }

  return {
    // State
    isLoggedIn,
    user,
    // Actions
    login,
    logout
  }
}) 