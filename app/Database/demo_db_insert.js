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
    var sql = "INSERT INTO `makanlah`.`customers` (`customer_id`, `name`, `email`, `password`, `address`, `role_id`, `money`) VALUES ('10003', 'akram', 'akram@gmail.com', 'localpassword', 'Jalan Selangor', '0', '300')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted!");
    })
});