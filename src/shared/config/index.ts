export const config = {
  appName: import.meta.env.VITE_APP_NAME || 'GreenAdmin',
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  enableDarkMode: import.meta.env.VITE_ENABLE_DARK_MODE === 'true',
};