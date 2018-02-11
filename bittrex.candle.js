
const bittrex = require('node-bittrex-api');
bittrex.getcandles({
    marketName: 'USDT-BTC',
    tickInterval: 'fiveMin', // intervals are keywords:  'oneMin', 'fiveMin', 'thirtyMin', 'hour', 'day'
  },( data, err ) => {
      if(err){
          return console.log("error while getting candles data ",err);
      }
    console.log( data );
  });