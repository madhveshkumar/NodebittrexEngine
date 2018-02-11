const bittrex = require('node-bittrex-api');
const fs = require('fs');

// bittrex.getmarkethistory({ market : 'BTC-LTC' }, function( data, err ) {
    
//     console.log( data );
//   });

//getticker
// bittrex.getticker( { market : 'BTC-LTC' }, function( data, err ) {
//   console.log('getticker::::::', data );
// });
//getbalances
// bittrex.getbalances( function( data, err ) {
//   console.log('getbalances::::::', data );
// });

//getmarketsummaries
// bittrex.getmarketsummaries( function( data, err ) {
//   console.log('getmarketsummaries ::::::::::::', data );
// });
// //getmarketsummary
bittrex.getmarketsummary( { market : 'USDT-BTC'}, function( data, err ) {
  console.log( data );
});
// //getorderbook
// bittrex.getorderbook({ market : 'BTC-LTC', type : 'both' }, function( data, err ) {
//   console.log( data );
// });
// //getwithdrawalhistory
// bittrex.getwithdrawalhistory({ currency : 'BTC' }, function( data, err ) {
//   console.log( data );
// });
// //getdepositaddress
// bittrex.getdepositaddress({ currency : 'BTC' }, function( data, err ) {
//   console.log( data );
// });
// //getdeposithistory
// bittrex.getdeposithistory({ currency : 'BTC' }, function( data, err ) {
//   console.log( data );
// });
// //getbalance
// bittrex.getbalance({ currency : 'BTC' }, function( data, err ) {
//   console.log('getdepositaddress ::::::::', data );
// });
// //withdraw
// bittrex.withdraw({ currency : 'BTC', quantity : '1.5112', address : 'THE_ADDRESS' }, function( data, err ) {
//   console.log( data );
// });

bittrex.getcandles({
    marketName: 'USDT-BTC',
    tickInterval: 'hour', // intervals are keywords:  'oneMin', 'fiveMin', 'thirtyMin', 'hour', 'day'
  }, function( data, err ) {
    
    var originalNoteString = JSON.stringify(data.result);
    //fs.writeFileSync('note.json',originalNoteString);
   // fs.writeFileSync('candle.txt',originalNoteString);
    // data.result.forEach(element => {
        
     console.log(data.result);
    // });
    
  });


    // bittrex.getcurrencies(function(data, err) {
    //  console.log(data);
    // });

    // bittrex.getticker({ market: 'USDT-BTC' }, function(data, err) {
     
    //   console.log(data.success);
    //   console.log(data);
      
    // });


    // bittrex.getorderbook({ market: 'USDT-BTC', type: 'both', depth: 10 }, function(data, err) {
    //   console.log(data.success);
    //   console.log(data.result);
    //   });