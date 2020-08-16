// Set up MySQL connection

var mysql = require("mysql");



var connection = mysql.createConnection({
    host: "rnr56s6e2uk326pj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",

    // Your port, if not 3306
    port: 3306,

    //username
    user: "nbb5htoscfhb2uhu",

    //password
    password: "fml1kx5cjozhm0pr",
    database: "kup9jyqeqrv31xhb"
});

// starting connection 
connection.connect(err => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;  
    }
    console.log("connected as id: " + connection.threadId + "\n");
    
});

module.exports = connection;