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
{"type":"service_account","project_id":"job-interview-hyftet","private_key_id":"895fa2244657c6eb37e3f2014856b4babd755078","private_key":"-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCyYGNDak3Nxd6T\ny0Nf5jpk8lXyrObN88YK4I9V1+yNN0Tp0jg8sGYFg9bp2PzwZ7t4hniPC5FtbZad\nnUq8NYzRudvS4w6tqvjc7HJaprtZEX7in1j3lLAWsOUvjlqh7r8k7E4iT/o41/9P\n3gxHCfP94O4D0qh2Zs8oa/4JX8i5KeI6vyDJDsYVp8a27oWalvxQzd8GyeFwkc0U\nrmMn0k1uQvqUF2X+DVKfmQybzqieQXoP9Xadm3D4eAzzvPn/jNYlDtr21NDEV8Pn\nADkKKYXRQrxk2GoDQ/LG1POOuPvRteD7uD6kL1RK2dy/78KCGh9P4yGJt8sfJsvD\ncNrAPTZHAgMBAAECggEAAyc2Cf6Kko0hYp5wufTBaoBoKYqJ5/Ebupx+nCddfJ+R\n/cokCVqa6xUKCwc1bXB//WDvJ6QuNW9+/plFtW8C5sAw1RkDbOl9TbZ2TQjufeQT\nyKDFe1brB/OnkYAkNQGZ6mas+OlOBIw47KoBsI3J/N5phrLGHJWzqsTB8Ft7ml5O\nHXPZWVYR77L+TpEq/IXbF3ljigZmiIeyOwgKwjvtwkJrAahNq+yn9brimM/SSiu7\nJBEF5zow2M5FT8sozItPO3pVfAhs4FRlmPNNfAoTVTbq4k0WT31RxPU4uFF7au+B\nGu+yUP0GpXxzyM3NWreIvjy/5sdyROJYD4lZ5yYNFQKBgQDaSKdmO0a2MQkrxO+b\nXKILio64w82HzWpb56j+VPnAgAaSnTHujNgGdzO6M2p1wG1cHGts0ihmBqatouPy\nCMNEyonluu/dP6mxDD7TKf/WoSOWm027czzBGHYss6ZIrZV+eFwAqEdS8CuQJX3O\nMhsEQYegOap0NQjZiIoWXYCC1QKBgQDRMoPUXfVNQ8PWmGVTRg6oqdsLbqRHT8uu\nARji1D2l+EBTLRPMd6eRPN7JP7/91YmUVBG5Teoh0PodyEqXjZRAacCE5bvesLRG\n7Y94zc8AjaZAlmRtsHuXRL745dsuy4hYQDpEPa5pUgp/Jmn22XfEX62RGymA06m5\nr9Ef+uOKqwKBgDHnYFYQATeP+F/IU1s6j1WCJOT65tdAUCuYx9r1hG/NFTOZupum\nGZFI2Uudi55GEvp3CNxFI7VHmf2ieuiPtkzY3TPnTAVSE7KFcSuHs5TXHDLHaLsN\nOnuO4x2PKNn+zWmvjKEd18iPXfZDjAKDFAgiDybDaEPPCCnrfF5mnAXNAoGAIGY4\ncJ2UrkC+he/YUYtaHdkgqaabHshG/U4CMq84VQobvEYQ+OvXMfFBd929uGxoAGb8\nz7w3dMFO22n3030D5u35+Rsze4vWf92vCMCnPKizhPFF4I8itQzanuXKinbPSQu5\nenQrHPit0395jdekau9+jCiuxtsBQFbwholu0D0CgYAXQTbK5d5NfhLsX4vwiPNa\nYAtKNM7H0P5GIodRMSRkJRzfJpmUriCC2ghzY4l1g6EJA29yFaRS8+sWW+uINHeH\nm2Nh3t2KNdCBndaFmBeVMHYys6cL6IIaiaw6OxK4d8vtxU2tdMJl45+U9u3wEIU3\nczidJWlWDopaOpUiIJ88Bg\u003d\u003d\n-----END PRIVATE KEY-----\n","client_email":"job-interview-hyftet@appspot.gserviceaccount.com","client_id":"100031147552629061526","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/job-interview-hyftet%40appspot.gserviceaccount.com"}
