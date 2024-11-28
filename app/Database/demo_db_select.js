// start established connection

var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'localpassword',
    database: 'skibidisigma',
});
// end established connection

// start query
con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT * FROM customers";
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});
// end query