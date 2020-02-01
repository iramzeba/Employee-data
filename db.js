var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/employee", function (err, db) {
   
     if(err) throw err;
     console.log("Database connected!");
     //Write databse Insert/Update/Query code here..
                
});