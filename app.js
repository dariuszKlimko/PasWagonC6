const express = require('express');

const app = express();
const PORT = 8000;

// there is no asynchronous function inside both endpoints so I don't use await/async or then
app.get('/calculateDieselUsageForDistance', (req, res) => {
    const {distance, yearOfProduction, fuelUsagePer100KM} = req.query;
    const fuelUsage = distance*fuelUsagePer100KM/100;
    return res.send({fuelUsage: `${fuelUsage}`});
});

app.get('/probabilityOfUnitInjectorFail', (req, res) => {
    const {VIN} = req.query;
    const failProbability = Math.floor(Math.random()*101);
    return res.send({failProbability: `${failProbability}%`});
});

app.listen(PORT, () => console.log(`PasWagonC6 is running noisily on port ${PORT}!!!`));