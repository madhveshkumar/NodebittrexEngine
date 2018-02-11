const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'mysql1',
    database : 'TICKER_ENGINE'
});

connection.connect((err) => {
    if(err) {
     return console.log("Connection Error",err);
    }
    
    console.log('connected as id ' + connection.threadId);
   
    var sql = "INSERT INTO ticker (MRKT_NAME, HIGH, LOW, VOLUME, LAST_VALUE, BASE_VOLUME, LAST_UPD_TS, BID, ASK, OPN_BY_ORD, OPN_SEL_ORD, PREV_DAY, ORD_CRT_TS) VALUES ?";
                        var values = [['BTC-XCP',
                        0.00375171,
                        0.00305607,
                        23842.10685638,
                        0.0036,
                        79.08986283,
                        '2018-02-10T02:58:03.193',
                        0.00359121,
                        0.0036,
                        357,
                        3101,
                        0.00329385,
                        '2015-02-14T04:20:41']];

                        connection.query(sql, [values], function (err, result) {
                            if (err) throw err;
                            console.log("Number of records inserted: " + result.affectedRows);
                          });
    //connection.destroy();
});

 


