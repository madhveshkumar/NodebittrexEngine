var bittrex = require('node-bittrex-api');

bittrex.getticker( { market : 'USDT-BTC' }, function( data, err ) {
  console.log( data );
}); 
bittrex.options({
  'verbose' : true
});

bittrex.options({
  verbose: true,
  websockets: {
    onConnect: function() {
      console.log('onConnect fired');
      bittrex.websockets.subscribe(['USDT-BTC','USDT-ETH','USDT-NEO'], (data, client) => {
        if (data.M === 'updateExchangeState') {
          data.A.forEach(function(data_for) {
            console.log('Market Update for '+ data_for.MarketName,data_for);
          });
        }
      });
      
      
      // bittrex.websockets.subscribe(['BTC-OMG'], (data, client) => {
      //   if (data.M === 'updateExchangeState') {
      //     data.A.forEach(function(data_for) {
      //       console.log('Market Update for '+ data_for.MarketName,data_for);
      //     });
      //   }
      // });
    },
  },
});

console.log('Connecting ....');
bittrex.websockets.client(function(client) {
  // connected - you can do any one-off connection events here
  //
  // Note: Reoccuring events like listen() and subscribe() should be done
  // in onConnect so that they are fired during a reconnection event.
  console.log('Connected');
});