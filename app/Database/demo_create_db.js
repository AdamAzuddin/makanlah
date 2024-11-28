var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    insecureAuth: true,
    user: "root",
    password: "localpassword",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE skibidisigma", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});