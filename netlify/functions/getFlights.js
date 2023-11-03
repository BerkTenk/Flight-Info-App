exports.handler = async (event, context) => {
    try {
      const flightsData = require('./api.json'); // api.json dosyanızın yolunu doğru belirttiğinizden emin olun
  
      return {
        statusCode: 200,
        body: JSON.stringify(flightsData),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'API verilerine erişim hatası' }),
      };
    }
  };