var bittrex = require('node-bittrex-api');
bittrex.options({
  'verbose' : true,
  'cleartext' : false
});
bittrex.getmarketsummaries( ( data, err ) => {
    if (err) {
      return console.error('Error in get market Summaries',err);
    }
    var marketname = [];
    data.result.forEach(element => {
        marketname.push(element.MarketName);
    });

    bittrex.options({
      verbose: true,
      websockets: {
        onConnect: () => {
          console.log('onConnect Event Fired');
          bittrex.websockets.subscribe(marketname,(data,client) => {
            if(data.M === 'updateExchangeState'){
              data.A.forEach( (data_for) => {
               console.log(data_for);
              });
            }
          });
        },
      },
    });

  });

  console.log('Connecting ....');
  bittrex.websockets.client((client) => {
    console.log('Connected');
  });
