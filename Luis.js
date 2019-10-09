const fs = require("fs");
const querystring = require('querystring');
var replace = require("node-replace");
var request=require("request");
// Route the app
const luis = app => {
    app.get('/', (request, response) => {
        response.send('luis is hosted');
      });

      app.post('/luis/exportDetails/', (request1, response) => {
          var appId=request1.body.appId;
          var versionId=request1.body.versionId;
          var endpoint=request1.body.endpoint;
          var subscriberID=request1.body.subscriberID;

          var luisRequest=`https://${endpoint}/luis/api/v2.0/apps/${appId}/versions/${versionId}/export`;
          request({
            headers: {
              'Ocp-Apim-Subscription-Key': subscriberID     
            }
            ,json: true,
            uri: luisRequest,            
            method: 'Get'
          }, function (err, res, body) {
              if(err==null)
              {           
                 response.status(200).send(res.body);
              }
            else{
                response.status(500).send(err);
            }
          });
         
    
       
  
      })
}
module.exports = luis;
