var bittrex = require('node-bittrex-api');


bittrex.getmarketsummaries( function( data, err ) {
    if (err) {
      return console.error(err);
    }
    for( var i in data.result ) {
      bittrex.getticker( { market : data.result[i].MarketName }, function( ticker ) {
        console.log( ticker );
      });
    }
  });

  bittrex.sendCustomRequest( 'https://bittrex.com/api/v1.1/public/getmarketsummary?market=btc-ltc', function( data ) {
  console.log( data );
}, true);