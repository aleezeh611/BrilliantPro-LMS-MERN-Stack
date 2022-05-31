// Connect using a MongoClient instance
const MongoClient = require("mongodb").MongoClient;

// Connection url
const url = "mongodb://localhost:27017";
// Database Name
const dbName = "brilliantprodb";

// Connect using MongoClient
const mongoClient = new MongoClient(url);
mongoClient.connect(function (err, client) {
  const db = client.db(dbName);

  var myobjs= [
    { CourseID:"PF", CourseName: "Programming Fundamentals", CourseOverview:"First programming course that gives an introduction to students to teach them the basics of programming. Taught by Sir Jawad Hassan", Deadline: "10/7/2022", CourseImage: "PF.jpg", Fee: 8500, EnrollLink: "xx.edu.com",TotalLearners: 0  },
    { CourseID:"OOP", CourseName: "Object Oriented Programming", CourseOverview:"Second programming course that gives an introduction to students about OOP Principles. Taught by Sir Hassan Mustafa", Deadline: "25/6/2022", CourseImage: "OOP.jpg", Fee: 9000, EnrollLink: "xx.edu.com",TotalLearners: 0  }
  ];

  for (i = 0; i < 2; i++ ){
    db.collection("courses").insertOne(myobjs[i], function(err, res) {
      if (err) throw err;
      console.log("document inserted");
    });
  }
});
