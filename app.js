const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'userRoutes', 'basic', 'index.html'));
});

app.get('/about', (req,res) => {
    res.sendFile(path.join(__dirname, 'userRoutes', 'basic', 'about.html'));
});
app.get('/contact', (req,res) => {
    res.sendFile(path.join(__dirname, 'userRoutes', 'basic', 'contact.html'));
});

app.listen(PORT, (req,res) => {
    console.log(`listening on ${PORT}`);
});