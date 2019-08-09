// Setup the express app
var express = require('express');
var app = express();

require('dotenv').config()

// Set the port (need to add environment variable)
var PORT = process.env.PORT;

// Put this in s routes folder
app.get("/",(req, res) => {
  res.send("The home page.");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
})