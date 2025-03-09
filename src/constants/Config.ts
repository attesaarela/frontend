// Claude ported code:
// Types for platform-specific configurations

// Color definitions using CSS hex values
// Note: In web, we'll use hex colors instead of Flutter's Color objects
/*
export const colors = {
  background: '#000040',
  text: '#ffffff',
  errorMessage: '#ff0000',
  successMessage: '#00ff00',
  disabledText: '#9fa8da', // Approximating Colors.indigo.shade200
} as const;
*/

// Backend configuration
const IS_LOCAL_BACKEND = true;
const BACKEND_LOCATION = (IS_LOCAL_BACKEND ? 'localhost:8080' : 'dev.pingpoint.app');

export const config = {
  backendWsUrl: `${IS_LOCAL_BACKEND ? 'ws' : 'wss'}://${BACKEND_LOCATION}`,
  backendUrl: `${IS_LOCAL_BACKEND ? 'http' : 'https'}://${BACKEND_LOCATION}`,
  requireConsents: true, // Whether user consent is asked for various things. true for production, false for development
  googleClientId: '851196804394-848tegq74h1lia8shj0kk4amlal13le5.apps.googleusercontent.com',
} as const;


// Type for the entire config object for use in other files
export type ConfigType = typeof config;
