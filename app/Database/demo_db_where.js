var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'localpassword',
    database: 'skibidisigma'
});

con.connect(function (err) {
    if (err) throw err;
    sql = "SELECT * FROM customers WHERE address ='Kelantan'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});