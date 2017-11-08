var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: "3000",
    user: 'root',
    password: 'root',
    database: 'burgers_db'
})

connection.connect(function(err) {
    if(err) throw err;
    console.log('Connected as ID: ' + connection.threadid);
})

module.exports = connection;