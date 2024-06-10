const express = require('express');
const serviceController = require('./controllers/service.controller');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
        return res.status(200).json({});
    }

    next();
});

app.use(serviceController);

app.listen(3000, () => console.log('the API is running on port: 3000'))