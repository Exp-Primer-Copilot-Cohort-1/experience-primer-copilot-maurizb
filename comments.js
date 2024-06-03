// Create web server
// Create a comment
// Read comments
// Update a comment
// Delete a comment

// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a comment
const comments = [
    {
        id: 1,