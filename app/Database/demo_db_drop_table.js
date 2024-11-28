var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "localpassword",
    database: "skibidisigma",
});

con.connect(function (err) {
    if (err) throw err;
    var sql = "DROP TABLE skibidi";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table deleted successfully.");
    });
});