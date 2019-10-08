
const fs = require("fs");
const querystring = require('querystring');
var replace = require("node-replace");
// Route the app
const router = app => {
  app.get('/', (request, response) => {
    response.send('Api is hosted');
  });
    app.post('/:projectId', (request, response) => {
     

        var project = request.params.projectId;
        let config = {
			credentials: {
				private_key:request.body.PrivateKey.replace(/\\n/g,'\n'),
				client_email: request.body.ClientEmail
			}
        }



        //let clientEmail = process.env.DIALOGFLOW_CLIENT_EMAIL;

        response.header("Access-Control-Allow-Origin", "*");
        var agentresponse='';
        const dialogflow = require('dialogflow');

        const client = new dialogflow.v2.AgentsClient(config);
            const formattedParent = client.projectPath(project);
            client.getAgent({parent: formattedParent})
                .then(responses => {
                    
                 agentresponse = responses[0];
                 console.log(agentresponse);
                response.status(200).send({"AgentName": agentresponse.displayName,"Description":agentresponse.description});

            })
                .catch(err => {
                  response.status(200).send(err);

            });


    });
    app.post('/GetIntent/:projectId', (request, response) => {

        var project = request.params.projectId;

        let config = {
			credentials: {
        private_key:request.body.PrivateKey.replace(/\\n/g,'\n'),
				client_email: request.body.ClientEmail
			}
        }

       //debugger;
        response.header("Access-Control-Allow-Origin", "*");
        var agentresponse='';
        const dialogflow = require('dialogflow');

        const client = new dialogflow.v2.IntentsClient(config);
            const formattedParent = client.projectAgentPath(project);
            client.listIntents({parent: formattedParent,intentView :1})
                .then(responses => {
                 agentresponse = responses[0];

                  response.status(200).send(agentresponse);
            })
                .catch(err => {
                console.error(err);

            });


    });
    app.post('/GetEntities/:projectId', (request, response) => {

        var project = request.params.projectId;

        let config = {
			credentials: {
				private_key:request.body.PrivateKey.replace(/\\n/g,'\n'),
				client_email: request.body.ClientEmail
			}
        }
      
        response.header("Access-Control-Allow-Origin", "*");
        var agentresponse='';
        const dialogflow = require('dialogflow');

        const client = new dialogflow.v2.EntityTypesClient(config);
            const formattedParent = client.projectAgentPath(project);
            client.listEntityTypes({parent: formattedParent})
                .then(responses => {
                 agentresponse = responses[0];

                  response.status(200).send(agentresponse);
            })
                .catch(err => {
                console.error(err);

            });


    });
 app.post('/createIntent/:projectId', (request, response) => {
        var project = request.params.projectId;
        let config = {
			credentials: {
				private_key:request.body.PrivateKey.replace(/\\n/g,'\n'),
				client_email: request.body.ClientEmail
			}
        }
        response.header("Access-Control-Allow-Origin", "*");
        var agentresponse='';
        const dialogflow = require('dialogflow');
        const client = new dialogflow.v2.IntentsClient(config);
        const formattedParent = client.projectAgentPath(project);
        const intent = {           
            displayName:"test.intent2",
            action:"test.intent2"
        };
        const requestintent = {
          parent: formattedParent,
          intent: intent,
        };
        client.createIntent(requestintent)
        .then(responses => {
         agentresponse = responses[0];
          response.status(200).send(agentresponse);
    })
        .catch(err => {
            response.status(500).send(err);

    });


});

}

// Export the router
module.exports = router;
