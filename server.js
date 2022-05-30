// =====================================EXPRESS SET UP=================================================
const express = require('express');
const { retry } = require('rxjs');
const app = express();
// set our port
//const port = 4200;
const port = 3000;
//const port = 8086;

var cors = require('cors')
app.use(cors());

//=========================================mongodb set up ===========================================
// Connect using a MongoClient instance
const MongoClient = require("mongodb").MongoClient;

// Connection url
const url = "mongodb://localhost:27017";
// Database Name
const dbName = "mydatabases";

// Connect using MongoClient
const mongoClient = new MongoClient(url);
//===========================================================

//==================================API CALLS======================================================
app.get('/', (req, res) => res.send('Server has started!'));

app.get('/getVehicles', function(req, res){
  mongoClient.connect(function (err, client) {
      console.log("MongoDB Connected")
      const db = client.db(dbName);
  db.collection("cars")
      .find()
      .toArray(function (err, rows) {
      if (err) throw err;
      res.send(rows);
  });
  })
})

app.delete('/delVehicle', function (req, res) {
  mongoClient.connect(function (err, client) {
    console.log("MongoDB trying to delete")
    const db = client.db(dbName);
    if (err){
        console.log("Error deleting :((")
    }else{
        db.collection("cars").deleteOne({"title": req.query.name});
    }
    res.send('Deletion has been completed');
  })
})

app.post('/AddVehicles', function(req, res){
  console.log("Got a POST request for /Add --> name="+req.query.title+" manf="+req.query.manf + " loc="+req.query.loc);
  mongoClient.connect(function (err, client) {
      console.log("MongoDB Connected")
      const db = client.db(dbName);
      db.collection("cars").insertOne({
      title: req.query.title,
      manufacturer: req.query.manf,
      location: req.query.loc,
      price: req.query.price,
      rating:req.query.rating,
      description:req.query.desc,
      features:req.query.ft,
      contact:req.query.contact,
      email:req.query.email,
      date_added:req.query.dt,
      seller_comments:req.query.slr,
      img: req.query.title+".jpg"
    });
  res.send("Received data:: title ="+req.query.title);
})
})

// startup our app at http://localhost:3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
