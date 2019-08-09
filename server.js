// Setup the express app
var express = require('express');
var app = express();

// import router
var routes = require('./routes')

// start dotenv for dynamic variables
require('dotenv').config()

// Set the port (need to add environment variable)
var PORT = process.env.PORT;

// Make the client build folder public for productions
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/", routes)
// Put this in s routes folder
app.get("/",(req, res) => {
  res.send("The home page.");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
})