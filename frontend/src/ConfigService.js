class ConfigService {
    constructor() {
      this.config = null;
    }
  
    async loadConfig() {
      try {
        const response = await fetch('/config');
        this.config = await response.json();
      } catch (error) {
        console.error('Failed to load configuration:', error);
      }
    }
  
    getBackendUrl() {
      return this.config?.REACT_APP_BACKEND_URL;
    }
  }
  
  const configService = new ConfigService();
  export default configService;
  