// ExampleComponent.js

import React, { useEffect } from 'react';
import api from './api'; // Import the Axios instance with interceptors

const ExampleComponent = () => {
  useEffect(() => {
    // Make a request using the configured Axios instance
    api.get('/some-endpoint')
      .then((response) => {
        // Handle successful response
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      {/* Your component content */}
    </div>
  );
};

export default ExampleComponent;
