var mysql= require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'localpassword',
    database: 'skibidisigma',
    insecureAuth: true,
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected successfully.");
    var sql ="CREATE TABLE customers (NAME varchar(255), ADDRESS varchar(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table customer has been created!");
    })
})
