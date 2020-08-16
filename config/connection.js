var mysql = require("mysql");



var connection = mysql.createConnection({
    host: "rnr56s6e2uk326pj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",

    // Your port, if not 3306
    port: 3306,

    //username
    user: "zwk7o6or4rpc6nsh",

    //password
    password: "dq07w4b1rzow4jg4",
    database: "xok1hp3za5v55r9f"
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