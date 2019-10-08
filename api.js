// Require packages
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
var cors = require('cors')2


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
{"type":"service_account","project_id":"banking-srwnsq","private_key_id":"7723beee472c08f57202068cd153c74122ef167e","private_key":"-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC0EPmnuWjnvflE\na1dq/y1tvvoDZiFFj7rO8YkynPSEPN6ikzd5/hfEK54eW+MNLr1d3qDAHTNHnoUe\nQhhrpv5rKeLBGK/EWTGXxzYOee0QhRpNLpimBezjE0ye2/ov679OjjIqNbs/05vP\nMun2noJYWT9e2Cb8BGgp7XIz8tRZZg6EYdU2qF/HANHaAUNMjT6QgUXDnrB2ue08\n0TtgzVFn9w6lz8+ozg9x1ZJzt9ugY5fEd4VjK5BOb9HKl44pA9XtFkuAuesZss1Q\nkIYoJRD1t0G5X30dhji/AYm7BacoCgSiYCGl99ek3VgglYemy1KFCp3HGgkATviK\nXPsIHnyRAgMBAAECggEAKmYa2u7x8CtPz9f0oAmQ4VgIF5fLOs1in8rI0uWZP6/z\nflVqyStW3kak9yIMvvRj+3/p2wKlKfZ+AsduZ57NJl+Y+H2/GV0lK8dpB5SXCP5G\nWKkhoWogwsEvF/LVIMaCZ9Vco4q+WgOSGwIyi/L73yC4prT/zPSesEysSOYjMR9M\n7tkU8IwIMXPhjruREX5O110lsIKFJ6fy7g7wH5ZRJ4g+nQH7fEEkOvcbHlMvxOQ7\nCCi6/S4iWwdeZdFEMOeNJZZyd+8l5em6FXy3+QuiUg1WsZaInwHmPtaKoCvoWRIL\n1DeIc0/ufylpn3PdaomepsxifbPbmR3jMQ2Is9yNhwKBgQDmDdfg7vcjQdwg7wv9\neDpvlDUNUSBeHOqHyxXh6/2yhCo8ObrdjQIRtqv4kD61fAyVCFVrCVWcU/u/8hZo\neGztdflTWgF7R+edfmtTyTCbL9N0HCUc7mTG5hlMWGxp6Sxl4I8Twzy/5p5k45vJ\nr0slx0EBgBrJ9tJYJ7hDWRQQ6wKBgQDIX+ChGTNtJv0bxt2emTejRP4ssOZCloJa\nfJ//rH6V5H+e3cam55q2Yu0MW1wuqMo+AsRHZIrNYVqfarzaPPk/2y3bQSEAui9S\nG5LNywRMAYjY9EtAg6DuLmVoYacGVbpLami8rtMNExgXy5Y/wYSeG09XacEjf76y\neAPjDN/pcwKBgQDbTGzyjblmkZyOhHFQkTBbNtOPuzr4m+XxxmU4tKZlatl8CagZ\nFBbZ3eF3E8HDbNnto0ERxJcoa2J7agF0Wv+zKRegHhd1dmjS2DTlbM750BBpCX9T\nYekNNUD+ZvgJye25u+OH+j/JysRI9jOGgaRIAfX0wTJIPhHrWQmsoZigOwKBgQCg\nqV+vTEmTx6NC1l10gV2/J961btHxqkSy0SJpGqIVBbXeZ+yUfzfp7cAsHET5lJU0\ny3sd01wH+Xt0P11Vj3Y64T8PglU4BBFVQI6hO5siZkiXzKlZ/TDYSZM98q69wZcy\nSQvZ3kOTRDAZREAgtsXjD/q6GC2ojREWgGx9bSFMSQKBgQCVoAqJBlVdegnL8T5f\nMwNF5QVIscRffmOuePzoieJ+2Sn/kmIICpm8y5L1bjMXo6P4Ol+rodV+fAvUPEi4\ns6wJnXVoA/vx1ZPu2FXl9tyU1UCeOmiE1sL98gSIwomGv1B6rBfkmMtKBlpbgHuO\n77k7azMOVjRUy+xqJFuoyIn/4A\u003d\u003d\n-----END PRIVATE KEY-----\n","client_email":"dialogflow-gumxok@banking-srwnsq.iam.gserviceaccount.com","client_id":"108806615359780398116","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/dialogflow-gumxok%40banking-srwnsq.iam.gserviceaccount.com"}
