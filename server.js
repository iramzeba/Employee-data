let express = require('express');
//var connection = require('./db.js');
let bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var mongodb = require('mongodb');
var app = express();
var router = express.Router();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Connect to the db
var db

MongoClient.connect('"mongodb://localhost:27017/', (err, client) => {
  if (err) return console.log(err)
  db = client.db('employee') // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

var port = process.env.PORT || 3000;
app.use('/api', router);
app.get('/api',(req,res)=>{
  res.send("employee data")
})
//list employee 
app.get('/api/show', (req,res)=>{
    db.collection('employee').find().toArray((err, result) => {
        if (err) return console.log(err)
        // renders index.ejs
res.send(result)
      })
});

//insert 
//db.employee.insertOne({Name:"doe", Employee_id:"E1", DOB:"1990" created: new Date(), updated: new Date())


//delete employee
app.get('/api/delete/:empid',(req, res)=>{
    var id = req.params.empid;
    console.log(id);
    //var myquery = { Employee_id: 'E2' };  
   
      db.collection('employee').remove({_id: mongodb.ObjectID( id)}, (error, row) => {
        //db.collection('employee').remove(myquery, (error, row) => {
        if (error) throw error
        console.log("deleted successfully");


        //res.send("deletd data")
        //update status


    })

})




// app.delete("/api/delete/:empid", (req, res, next) => {
//   const id = req.params.empid;
//   db.collection('employee').remove({ _id: id })
//     .exec()
//     .then(result => {
//       res.status(200).json(result);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });
// });








