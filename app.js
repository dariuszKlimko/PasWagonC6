const express = require('express');

const app = express();
const PORT = 8000;

// there is no asynchronous function inside both endpoints so I don't use await/async or then
app.get('/calculateDieselUsageForDistance/:distance/:yearOfProduction/:fuelUsagePer100KM', (req, res) => {
    const {distance, yearOfProduction, fuelUsagePer100KM} = req.params;
    const fuelUsage = distance*fuelUsagePer100KM/100;
    return res.send(`${fuelUsage}`);
});

app.get('/probabilityOfUnitInjectorFail/:VIN', (req, res) => {
    const {VIN} = req.params;
    const failProbability = Math.floor(Math.random()*101);
    return res.send(`${failProbability}%`);
});

app.listen(PORT, () => console.log(`PasWagonC6 is running noisily on port ${PORT}!!!`));