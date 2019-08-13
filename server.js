// Setup the express app
const express = require('express');
const app = express();

// Require mongoose
const mongoose = require('mongoose');

// import router
const routes = require('./routes')

// start dotenv for dynamic variables
require('dotenv').config()

// Set the port (need to add environment variable)
const PORT = process.env.PORT;

// Make the client build folder public for productions
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Setup mongoos connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project-evaluator");

app.use("/", routes)
// Put this in s routes folder

app.get("/",(req, res) => {
  res.send("The home page.");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
})