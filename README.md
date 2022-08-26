#PasWagonC6

## Table of contents
* [Technologiess](#technologies)
* [Setup](#setup)
* [Run app](#run-app)

## Technologies
* [Node.js](https://nodejs.org/en/)
  * [Express.js](https://expressjs.com/)

## Setup
  Download repository "PaswagonC6".

  Open folder "PasWagonC6-main" in e.g. vscode editor and run:
  ```
  npm install
  ```
  
## Run app
  In terminal run:
  ```
  nodemon app
  ```
  In browser paste:

  Fuel usage. Type fuel consumption with dot e.g fuelUsagePer100KM=6.5 if PasWagonC6 is comsuming only!!! 6.5 liters/100KM:
  ```
  http://localhost:8000/calculateDieselUsageForDistance?distance=250&yearOfProduction=1999&fuelUsagePer100KM=6.5
  ```
  Fail probability:
  ```
  http://localhost:8000/probabilityOfUnitINjectorFail?VIN=OIOIDWIO3223
  ```
