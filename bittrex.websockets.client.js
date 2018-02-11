var bittrex = require('node-bittrex-api');
var jsonic = require('jsonic');

var websocketsclient ; 
bittrex.websockets.client(function(client){
    websocketsclient = client;
    websocketsclient.serviceHandlers.messageReceived = function(message){
      console.log(jsonic(message.utf8Data));
    };

    websocketsclient.serviceHandlers.onerror = function (error) {
        console.log('some error occured', error);
      };
});
