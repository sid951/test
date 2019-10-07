// Require packages
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
var cors = require('cors')


const app = express();

// Set the port
//const port = 3001;
const port =3001;
// Use Node.js body parsing middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(cors());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// Route the API
routes(app);

// Start the server
const server = app.listen(port, () => {
    console.log(`App running on port ${server.address().port}`);
});
