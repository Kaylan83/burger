var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  };


  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
       
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  };



var orm = {

    selectAll: (tInput, cb)=> {
        let query = "SELECT * FROM " + tInput + ";";
        connection.query(query, (error,response) => {
            if (error) throw error;
            cb(response); 
        });
    },
    insertOne: (table,cols,vals,cb) => {
        let query = "INSERT INTO " + table;
        query += "(" + cols.toString();
        query += ") ";
        query +=  "VALUES (";
        query += printQuestionMarks(vals.length); 
        query += ")";

        console.log(query);

        connection.query(query,vals, (error, response) => {
            if (error) throw error;
            cb(response);
        });
    },
    updateOne:  (table, objColVals, condition, cb) => {
        let query = "UPDATE " + table;

        query += " SET ";
        query += objToSql(objColVals);
        query += " WHERE ";
        query += condition;

        console.log(query);
        connection.query(query, (error, response) => {
            if (error) throw error;
            cb(response);
        });
    }
    
};

module.exports = orm;


