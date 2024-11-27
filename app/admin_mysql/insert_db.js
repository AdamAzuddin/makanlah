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
    var sql = "INSERT INTO `makanlah`.`customers` (`customer_id`, `name`, `email`, `password`, `address`, `role_id`, `money`) VALUES ('10001', 'keni', 'keni@gmail.com', 'localpassword', 'Jalan Sabah', '0', '100')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted!");
    })
});

// let customer_id = "10001";
// let name = "keni";
// let email = "keni@gmail.com";
// let password = "localpassword";
// let address = "Jalan Sabah";
// let role_id = "0";
// let money = "100";
//
// var sql ="INSERT INTO `makanlah`.`customers` (`customer_id`, `name`, `email`, `password`, `address`, `role_id`, `money`) VALUES ('" +customer_id + "', '"+ name + "', '" + email +"', '" + password + "', '" + address + "', '" + role_id +"', '" +money + "')";
// console.log(sql);