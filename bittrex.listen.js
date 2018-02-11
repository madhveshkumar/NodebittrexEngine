const bittrex = require('node-bittrex-api');
const mysql = require('mysql');
const fs = require('fs');

bittrex.options({
  'verbose' : true,
});

const pool  = mysql.createPool({
    connectionLimit   :   100,
    host     : 'localhost',
    user     : 'root',
    password : 'mysql1',
    database : 'TICKER_ENGINE'
  });

bittrex.options({
    verbose: true,
    websockets: {
        onConnect: () => {
            console.log('onConnect Fired');
            bittrex.websockets.listen( (data, client,err) => {
                if(err){
                  return console.log('err',err);  
                }
                if(data.M === 'updateSummaryState'){
                    data.A.forEach(element => {
                        var onjectArray = [];
                        onjectArray = element.Deltas;
                        var outputData = onjectArray.map( Object.values );
                        //console.log(outputData);
                        
                        addTicker(outputData);
                        
                        
                        //fs.writeFileSync('ticker.txt',outputData);
                        //fs.writeFileSync('tickerArray.txt',onjectArray);
                        //console.log(outputData);
                        //console.log(element.Deltas);
                        //console.log(typeof element.Deltas[0]);
                        // var i = 0;
                        // element.Deltas.forEach((marketData) => {
                        //     console.log('*******************::**********:: ',i=i+1);
                        //     console.log(marketData);
                        //     console.log('*******************::**********:: ');
                        // });
                    });
                }
            });
        }, 
    },
});
var addTicker = function(tickerdata){
    var sql = "INSERT INTO ticker (MRKT_NAME, HIGH, LOW, VOLUME, LAST_VALUE, BASE_VOLUME, LAST_UPD_TS, BID, ASK, OPN_BY_ORD, OPN_SEL_ORD, PREV_DAY, ORD_CRT_TS) VALUES ?";
    var values = tickerdata;
    pool.getConnection((err,connection) => {
       
        connection.query(sql,[values], (err, result) => {
            connection.release();
            if (err) throw err;
              console.log("Number of records inserted: " + result.affectedRows);
          });
        });
}
console.log('Connecting ....');
bittrex.websockets.client((client) => {
   //console.log(client);
})