const bittrex = require('node-bittrex-api');

bittrex.getmarketsummaries( ( data, err ) => {
  if (err) {
    return console.error(err);
  }
  var allmarketname = [];
  console.log(data.result.MarketName);
  data.result.forEach(element => {
    allmarketname.push(element.MarketName);
    
  });
  console.log(allmarketname);
});

