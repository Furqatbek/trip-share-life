import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.c72ca47c6a4b4523b80f6690a1c657cf',
  appName: 'trip-share-life',
  webDir: 'dist',
  server: {
    url: 'https://c72ca47c-6a4b-4523-b80f-6690a1c657cf.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#ffffff',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false
    }
  }
};

export default config;