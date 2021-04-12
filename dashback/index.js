const express = require('express');
const https = require('https');
const app = express();
const port = 3000;
const cors = require('cors');


app.use(cors());

app.get('/', (req, res) => {
    res.send('It works!');
});

app.get('/location/:location', (req, res) => {
    if (!req.params.location) {
        res.status(500);
        res.send({ 'cod': '404', 'message': 'You haven\'t specified your location!' });
        console.log('You haven\'t specified your location!');
    }

    // appel des informations
    https.get(`https://api.openweathermap.org/data/2.5/weather?q=Le Mans&appid=40170a02e70a9dafdceed1c03133ef7b&units=metric&lang=fr`, (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            console.log('The whole response has been received!');
            res.send(JSON.parse(data));
        });

    // si une erreure arrive
    }).on('error', (err) => {
        res.status(500);
        res.send({ 'cod': '404', 'message': 'An api-error has been received' });
        console.log('Error: ' + err.message);
    });
});

app.listen(port, () => {
    console.log(`simple-weater-app-backend listening at port: ${port}`);
});