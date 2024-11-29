var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'localpassword',
    database: 'makanlah',
    insecureAuth: true,
});

con.connect(function(err){
    if (err) throw err;
    console.log('Connected!');
});