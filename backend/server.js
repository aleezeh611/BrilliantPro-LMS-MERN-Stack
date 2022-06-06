
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                          SET UP CODE
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ===========================================EXPRESS=================================================
const express = require('express');
const { retry } = require('rxjs');
const app = express();
// set our port
const port = 8086;

var cors = require('cors')
app.use(cors());

username = ""

//==============================================mongodb================================================
// Connect using a MongoClient instance
const MongoClient = require("mongodb").MongoClient;

// Connection url
const url = "mongodb://localhost:27017";
// Database Name
const dbName = "brilliantprodb";

// Connect using MongoClient
const mongoClient = new MongoClient(url);



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                          API CALLS
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
app.get('/', (req, res) => res.send('Server has started!'));

//Admin Dashboard API Calls--------------------------------------------------------------------------
app.get('/getCourseCount', function(req, res){
  mongoClient.connect(function (err, client) {
      console.log("MongoDB Counting Courses")
      const db = client.db(dbName);
  db.collection("courses")
      .countDocuments(function (err, count) {
      if (err) throw err;
      res.send(count.toString());
  });
  })
})
app.get('/getLearnersCount', function(req, res){
  mongoClient.connect(function (err, client) {
      console.log("MongoDB Counting Courses")
      const db = client.db(dbName);
  db.collection("learners")
      .countDocuments(function (err, count) {
      if (err) throw err;
      res.send(count.toString());
  });
  })
})
app.get('/getAssessmentsCount', function(req, res){
  mongoClient.connect(function (err, client) {
      console.log("MongoDB Counting Courses")
      const db = client.db(dbName);
  db.collection("assessments")
      .countDocuments(function (err, count) {
      if (err) throw err;
      res.send(count.toString());
  });
  })
})
app.get('/getMaterialsCount', function(req, res){
  mongoClient.connect(function (err, client) {
      console.log("MongoDB Counting Courses")
      const db = client.db(dbName);
  db.collection("materials")
      .countDocuments(function (err, count) {
      if (err) throw err;
      res.send(count.toString());
  });
  })
})
app.get('/getCertificatesCount', function(req, res){
  mongoClient.connect(function (err, client) {
      console.log("MongoDB Counting Courses")
      const db = client.db(dbName);
  db.collection("certificates")
      .countDocuments(function (err, count) {
      if (err) throw err;
      res.send(count.toString());
  });
  })
})

app.post('/AddCourse', function(req, res){
  console.log("Got a POST request for /Add --> name="+req.query.name);
  mongoClient.connect(function (err, client) {
      console.log("MongoDB Connected")
      const db = client.db(dbName);
      db.collection("courses").insertOne({
         CourseID:req.query.id, 
         CourseName: req.query.name, 
         CourseOverview:req.query.overview, 
         Deadline: req.query.deadline,
          CourseImage: req.query.img, 
         Fee: req.query.fee, 
         EnrollLink: req.query.link,
         TotalLearners: 0  
    });
  res.send("Received data:: title ="+req.query.name);
})
})

//Course API Calls----------------------------------------------------------------------------------------
app.get('/getCourses', function(req, res){
  mongoClient.connect(function (err, client) {
      console.log("MongoDB Connected")
      const db = client.db(dbName);
  db.collection("courses")
      .find()
      .toArray(function (err, rows) {
      if (err) throw err;
      res.send(rows);
  });
  })
})


//Login and Sign Up Pages---------------------------------------------------------------------------------
app.post('/RegisterLearner', function(req, res){
  console.log("Got a POST request for Register Learner --> name="+req.query.username);
  mongoClient.connect(function (err, client) {
      const db = client.db(dbName);
      db.collection("learners").insertOne({
         username:req.query.username, 
         name: req.query.name, 
         password:req.query.pass, 
         contact: req.query.contact,
         status: "idle"  
    });
  res.send("Received data:: title ="+req.query.name);
})
})

app.post('/StoreUsername', function(req, res){
  console.log("Logged in --> name="+req.query.id);
  username = req.query.id; 
  res.send("Received data:: title ="+req.query.name);
})

app.get('/getAllLearners', function(req, res){
  mongoClient.connect(function (err, client) {
      console.log("MongoDB Connected")
      const db = client.db(dbName);
  db.collection("courses")
      .find()
      .toArray(function (err, rows) {
      if (err) throw err;
      res.send(rows);
  });
  })
})

app.get('/getcurrentuser', function(req, res){
    res.send(username);
})

app.get('/getlearnercoursedetails', function(req, res){
  mongoClient.connect(function (err, client) {
    console.log("Getting Details")
    const db = client.db(dbName);
db.collection("learners")
    .find({"username": username})
    .toArray(function (err, rows) {
    if (err) throw err;
    res.send(rows);
});
})
})

app.get('/getusercertificate', function(req, res){
  mongoClient.connect(function (err, client) {
    console.log("Getting Certicate")
    const db = client.db(dbName);
db.collection("certificates")
    .find({"userid": username})
    .toArray(function (err, rows) {
    if (err) throw err;
    res.send(rows);
});
})
})




// app.delete('/delVehicle', function (req, res) {
//   mongoClient.connect(function (err, client) {
//     console.log("MongoDB trying to delete")
//     const db = client.db(dbName);
//     if (err){
//         console.log("Error deleting :((")
//     }else{
//         db.collection("cars").deleteOne({"title": req.query.name});
//     }
//     res.send('Deletion has been completed');
//   })
// })

// app.post('/AddVehicles', function(req, res){
//   console.log("Got a POST request for /Add --> name="+req.query.title+" manf="+req.query.manf + " loc="+req.query.loc);
//   mongoClient.connect(function (err, client) {
//       console.log("MongoDB Connected")
//       const db = client.db(dbName);
//       db.collection("cars").insertOne({
//       title: req.query.title,
//       manufacturer: req.query.manf,
//       location: req.query.loc,
//       price: req.query.price,
//       rating:req.query.rating,
//       description:req.query.desc,
//       features:req.query.ft,
//       contact:req.query.contact,
//       email:req.query.email,
//       date_added:req.query.dt,
//       seller_comments:req.query.slr,
//       img: req.query.title+".jpg"
//     });
//   res.send("Received data:: title ="+req.query.title);
// })
// })




//=====================startup our app at http://localhost:3000==========================
app.listen(port, () => console.log(`listening on port ${port}..........`));
