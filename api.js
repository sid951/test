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
{
  "type": "service_account",
  "project_id": "job-interview-hyftet",
  "private_key_id": "8af2fe7c86be921b300542b010e6fd4acc4ac92d",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDiug/jfa3cBVas\nsCjaQlJFoC91N/fYNbqAXdnxtUeQM/seJlXxBHHBpqQ/bikUYkWec0r6XWo71eOG\n50YzCzuqy7bHNBH6c2dRWsoQJiVVVINid3nfjyySfcr7daUo1vtrkDyiBKV+B6Db\nPHe2LRbFbLO46Rbv0WCBYjXPWDnP+MAQ7qjwQE2dTte0rb+o/GHwALi2anS7l3Oz\n5B+J+l8/tD4LxIbwCYW59OOADk74hWRLy636dFfWKNuuLAm55UWCZ1HhbJyhUG1e\n1FzdazQmk27p6kBP9ZFeYnqR05al0rIyeqUpUuUquwjS6af8utmQnuaN9Ik63Yjj\n7DuOrM8rAgMBAAECggEABXPD/gx/qdLXCsARu23s3I/FlGQMKb7hBUU8gHuDhQw6\n9bamSm147tc7C+tyQXM7iVvsaajlbRrvpcbaAVA71xefBZtS81rjGSm9wjWooCyw\nHCYTYDTpNXyg7PsfRaQl16hYTO0frbAxRhRmLJNZANZkXAX+7zVxxKq/8ISGn2Go\nZIIP4PerXesIacwuBdMo2ehAhPyIAEWqU/G2Tknr8xB8gIrofbS/u1llXwwedN/r\nY/Pl0lTuoqCZGVkBEVEayygP15Jt6tk9Do7CIqvil6GFl2pJHbELkR6oFE89ljke\nf9/q4hR9bEsy32NmgT6aeFjkVdc5O/Cl9yktbKqrAQKBgQD5wNif5NZUyAU2HVhq\nclMqdamXruMC1y7sMrDw+qPypZw9+fszOjOJgflUVo4XuxfD6Qn8/kiGFDwyIbpj\nt+IUQcaST2qXvWjUh7EedtGAIVMbPDaLe6eaaXGiLlv652TwvWqgTBYIkDSVOHug\nv2hZM1hT8rILQvdvAhbAQPtOsQKBgQDoZcdaa6ZYFoWtzSp6kruf6erggNxmt04d\n+/7WMby4dklzjqIsoDFdqief+8bLOH56Ek2/kSpc3+/0mmWPihs3DsiLpm5I5/C1\ndlsCZFKs87CIzjWRvylf3TBTW8febhIGKz+m+e2sZSUgA/gd4DqB1ZUUwvdFk4g6\nZoV3wVVKmwKBgGhLyCq9fWPaQ5LdnlaVd3V7vV7Cgbpl8gphANMhV+W0kxKumeBC\npdL+nAhEPQJb9wixAKLN7atQN/MXcqbB239qGGpxD6peRrC6GZUHOWWwhOwSsRR+\nhvdMoU+A3JhimRyPfT+Dho/86HiIJdhzFjhp4LDt4LwjMwEAdk/C0y+BAoGBAJiC\nMlEkVAV6wj9MZJQLtxU6bOjnp7vAj4Md3B60hSSIe6tZ7xNaDQtqnpZepBa4/Ecf\nu+X7XdGVI+Nhb0TDXRjEmtcKYVV24IA1K4RmUdsuEKu2p3D+Aijm/s+1a3SMx0dF\nGoB5g3+e4L4h3LG+dKa/gxYc3CjMqJmqrevo9BABAoGBAJf8ucRAId2EvW+qGqZ7\nL83nj77DGmmnHLXMm6trdHphzMinUxdnaMuSkB4S5TscTzJhqgVH0pbRRo8NwgiB\nPgt1ImvQL3tj8f0fsBy1X4A7X5mEUPhVcXVl28QvHgJ30lLXLWt/aBBjhrwQ0k/f\nvOZ3FlaEaa4Oc2L7LRlNBsBG\n-----END PRIVATE KEY-----\n",
  "client_email": "job-interview-hyftet@appspot.gserviceaccount.com",
  "client_id": "100031147552629061526",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/job-interview-hyftet%40appspot.gserviceaccount.com"
}
{"type":"service_account","project_id":"banking-eeepln","private_key_id":"e65eb91052b5e208f72d44ec7304800314103eb4","private_key":"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDIjAAipvr2in19\njKZffSuNBEjOVgAznhsP7SpSzcgpKxqhfpTAsBHf+cq+4hQS7u5vYtfY7APZYEET\nSepR9uGKo3miBLP6kHPivs1G5JACK/xGcIrBhmikl8bXn9cUrNoajmOdB4xYSCs1\nrAsl5KpWD4z94XARONPSZglzq8at8imx5+Tv4HxBl2RpEhjk3b/CwsWmlyVBfn0u\nDspnLck3FcgITP0ALscXHHTwClGKUCLtazavz6yEJJzcOZu1acy7lRNFy5Cknc5l\nx+ewDhJwT6o6jrHgleftEvVqK+nQJvhGj5CMEA7ZvAiUIWo9n4C4y5+bJAT81N4f\nVSPNaeEDAgMBAAECggEAChtC7enXewhX8lnwD+gl8P80a4K1uC1alKOap/3mj7SP\nrN3NL0pwOeJWBlTjNvLDRjMr/4Yh7mIOszVvGpV66bYfmqlYlb5uKKNG8MLzHl14\n0MI6UHdA26BOetwyRi5RiTOkplldvxyghot7K8VFAf2RNGYqvTW7OCx3XucR7yOF\ncNbD6hqCYCSeZT2ucPAUw4b092K+x8obIO1OzMWpozqBMEagAz6WQmY8WUOHNvdk\nZ835+XvLuAQuksOIERKx0Yg8EBgvI9EECpgjcfbW362HsRUeobm9+z4V9gap539H\nCEZDY7HJKmdt5pDHPycGDRpSfwGb6flq227xhXtKwQKBgQD0nafg0HfnLPK7lEnj\nHvqjtwoAAgopgOqxiVhyl5LNKKLPEeJ1S/45bDxj7uO6FV296ho22uL9JkJ1zIFH\n0IQeZCjDIvQzcT+VCt6dRA7NmJVVsXMdcjF6gVcyQzCcPg5cP+sS42YKTTBrn4XC\naCrXSAVgpJ0PLW8qwUK3careYQKBgQDR4U8HO7vnYYvvi0id4QUpE3YeJWA5VTW5\ncpsOzK3xepyTQCfTRBrpHyNa9N59kuLJLSpZWwyX3KgM5le3cz/4AS5sZDKtW+2Q\n2iOLIBdBPK8ByGTwe7IEe1o5sVNLrQA39Z9S159xU/LeYxk9VnKs0bDZup/ZBOCD\nzw49uspR4wKBgEa3NQsW+TLJmbqEmf+guxCNH8T00f9Bl5ePfxRRoUzSDI8UOoVy\nXKI5GhRBwW/QMXNvs/hbuvc4Ekp/vngGXctzZR1Ug4hDmv/5TnXkcOsay0EktYSz\nuH4T2iNbrTfd8MTWbZzeRGeB/Rd/3GlhN9FYrsVLkWQL3HFdwW3K3HzBAoGACzSX\nTpCO4LShjwGFuAAqkV3boZJnR8hX3PXUd37QDqN4NphnR+1L7oReE94c/uFXwFvr\n9edZjcYXJtEpf77kfG47t0fGOOE+lsw+t4/YDgCaa2LymLBR+dFIKOphwxmSeGph\nvj+K4LcVsW/jChZSew2a/pTrMeADyKXGYd9WK/cCgYEA3F+g/w8OROMsiyMgCSG9\nH2D0OJV75srBFraGMOcD9HxJxjs3OPjkn0W7jgt+0ngP1WRacCDr/bGd1h6RaQvX\nIKNrk4zpVGkxKjF6QxB7WyNJZnE9YPt2ulz7rym7fcrQTfmh8cmQXZZNRSdMRa0G\nGv3zhQoo5k7P3i65fngUKXE\u003d\n-----END PRIVATE KEY-----\n","client_email":"dialogflow-ubpvml@banking-eeepln.iam.gserviceaccount.com","client_id":"116179186415723685489","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/dialogflow-ubpvml%40banking-eeepln.iam.gserviceaccount.com"}
"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCqh7AgMyDQmB/C\nbhtRMkV7j3IRvAOFwtWmJymsxA3M2ciplQGGgJAb3rbyJrZQ9kOG58VcYzV+Dc9d\n0RaTRRXOrIasMIgBkMk4wrmLuiWMLYMU6PLvAx9OadLpl1OAe5UKyhZu1s6Lcwfb\nnCPrgHBbpofQemiZFcQ6MyzQ/VT9zvGzExA0Gde1ZsIx/utfB+097nzaEEVMcJDQ\nj+JbJ5mrfZ6eUY913PBYzTNGEFitgvSlEEtJL75zvAEGw+R11juB7oQStXTbmU6B\n90uF54hlL4sMJf6pbde0HrKXN6+8r97cibbPm+CfpZC67kx8T5ws3XOphU0jWhJl\nAfyS+Q1TAgMBAAECggEACDbzGAn+ea3qUb5mGHo4eKRHVW1eKhJholhenJDxLT4M\neYbRBP6qcn0/CNkujSXfyN7fVfz9da4KoDVTRhLc4xDSh/bqhlDIMLDIqV91MZR7\nrQUvtq3K00crvs7oWdcaLePgQsScPIF1DnIuFMkiIHgcMMHEyiMPSdJvRT3+2x8J\nxAA8C8w75GaaHB1gMoRCJu2s7nsK5u13nP/jkGX+vfpc+LO0WvSETs3v/DgKfy/Q\ntkHhI57d/05qxCkXVTZ5HAgPAXV6JV99JiEfT118aljHOniUoViI4V02i5h5vJE1\nOI7iYdQHZrOR1sbZrOmy2vm6Wbyad3G8fsHYf+Ox2QKBgQDbihkvkHYm7iFkF19f\nnisj2NZK4OT9jvxp1ccUjKdpHUPyVIKH43HQG4gYkeTHJwzqY3EjHIUIUTnXnE8x\n4kHefoEx/5Wl55eTEMeHT979r6PaJo0ig6PUKNgs7jo/2eEDzR/Etu9zwNgvLuOp\nE/sLIOGTXbVepCEmpY/ByGF5RwKBgQDG2enmJpOULvHNyZNGrHjUfTEuos+JbNIX\nX2A70m3FW3Ri0Nlnh1HN/Qbs9OCqKHPwoElU+fw8z4Un/ZBj5RcigcBFtQVnvPn8\ngcm4VRt0GUUtbirk6UhqDK/daiTR1rrswbiwRl/wa2oAnegOtVXNPeNHkREHtkQI\n+y5/vTJRlQKBgFbonH/P2HYg3ucYuZDItJtEQ9DwprYZ3KKpFl50L/HUvAk6m1Hg\nIDYaMA5J8x9DvkErjKYxrBhWz2cjYdaFkz3ZJpv8ael7fO2jPtm6LLSQy3SYvlZj\ndn+Oi8V9qWGNhx5SHblqEfDo7qv/C/DrD/6fzazg8+O7ZcQ+1mIISU4RAoGAfU8H\ncYxvxZrLsAXN9GRthGIcIypgJFbaEfZ9e1VA7XSTZE3+IpqIt4ky2xH5neD+Ju2r\nKIycImoXnDrSydCtAobHdmX7sQLKehAD4VBoi4H9MQLSrww/IO07ygjAiSeLBfWS\nACto++WEmDzp5pLpLfxJBGlrVPPL7ejzxXWhhv0CgYEA1u8sSiIPShUr0yVl8lKn\nTYZ6+TBLwJ0fo0e1WmI8WQdCW6RFP8b0c5e/8tFWK0TCPxmzWIzZUEChrD1dgGfo\n7qEC8FTyMnONoLCFenSoYHeTD+8xX9GlHZne2fD/0FwtY+gYEewicjY47iuq7T/C\n94boYJ4Q8s9xWaFzGifgDmc=\n-----END PRIVATE KEY-----\n"
