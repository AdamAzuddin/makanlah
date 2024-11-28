var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'localpassword',
    database: 'skibidisigma',
});

con.connect(function (err) {
    if (err) throw err;
    var sql = "SELECT * FROM customers ORDER BY name";
    con.query(sql, function (err, result) {
        if (err) throw err;
            console.log(result);
    });
});
