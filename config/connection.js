var mysql = require("mysql");



var connection = mysql.createConnection({
    host: "",

    // Your port, if not 3306
    port: 3306,

    //username
    user: "",

    //password
    password: "",
    database: ""
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