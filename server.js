// Setup the express app
var express = require('express');
var app = express();

// Set the port (need to add environment variable)
var PORT = 5000;

app.get("/",(req, res) => {
  res.send("The home page.");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
})