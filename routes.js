const fs = require('fs');
const path = require('path');

const routes = (req, res) => {

    let filePath = '';

    if (req.url === '/') {
        filePath = path.join(__dirname, 'views', 'home.html');
        res.statusCode = 200;
    } 
    else if (req.url === '/about') {
        filePath = path.join(__dirname, 'views', 'about.html');
        res.statusCode = 200;
    } 
    else if (req.url === '/contact') {
        filePath = path.join(__dirname, 'views', 'contact.html');
        res.statusCode = 200;
    } 
    
    else {
        filePath = path.join(__dirname, 'views', 'error.html');
        res.statusCode = 404;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('<h1>Server Error</h1>');
        } else {
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    });
};

module.exports = routes;
