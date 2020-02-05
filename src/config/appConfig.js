const activeConfig = 'dev';

const constants = {
  dev: {
    url: {
      api: ''
    }
  },

  production: {
    url: {
      api: ''
    }
  }
};

const appConfig = constants[activeConfig];

export default appConfig;
