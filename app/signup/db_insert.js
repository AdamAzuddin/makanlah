var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'localpassword',
    database: 'makanlah',
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected successfully.");
    var sql = "INSERT INTO customers (name,address) VALUES ('Skibidi sigma','Mountain 21')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted!");
    })
});