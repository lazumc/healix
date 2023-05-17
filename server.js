const express = require('express');
const app = express();
const port = 3000;

// Define a GET route
app.get('/api/query', (req, res) => {
  // Extract query parameters from the request
  const { param1, param2 } = req.query;

  // Process the query parameters and prepare the response
  const response = {
    message: 'Received your query!',
    parameters: {
      param1,
      param2
    }
  };

  // Send the response
  res.json(response);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
