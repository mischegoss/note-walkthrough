var express = require('express');

// Initialize the app and create a port
var app = express();
var PORT = process.env.PORT || 3001;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));