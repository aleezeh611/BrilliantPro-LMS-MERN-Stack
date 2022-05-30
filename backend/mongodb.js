// Connect using a MongoClient instance
const MongoClient = require("mongodb").MongoClient;

// Connection url
const url = "mongodb://localhost:27017";
// Database Name
const dbName = "mydatabases";

// Connect using MongoClient
const mongoClient = new MongoClient(url);
mongoClient.connect(function (err, client) {
  const db = client.db(dbName);

  var myobjs= [
    { image:"alto.jpg",title: "Alto", location: "islamabad", price :"1350000",rating: "4.5",date_added:"12/4/2022", manufacturer: "suzuki" , features:"grey, new, tinted windows", desc : "Brand new barely used", seller_comments:"nuheuhcbhd", contact:"0322-6173892",email:"abc@gmail.com" },
    { img:"wagonr.jpg",title: "WagonR", location: "karachi", price :"2350000",rating: "5",date_added:"2/4/2022",manufacturer: "suzuki" ,features:"black, bumper dented", desc : "a little used", seller_comments:"nuheuhcbhd", contact:"0322-6173892",email:"abc@gmail.com" },
    { img:"harley.jpg",title: "Harley Davidson", location: "islamabad", price :"8850000",rating: "4.5",date_added:"1/5/2022",manufacturer: "harley davidson" , features:"pink, stickers included", desc : "Brand new barely used", seller_comments:"nuheuhcbhd", contact:"0322-6173892",email:"abc@gmail.com" },
    { img:"civic.jpg",title: "Civic", location: "islamabad", price :"6190000",rating: "3.6",date_added:"25/3/2022", manufacturer: "honda" ,features:"grey, new, tinted windows", desc : "Brand new barely used", seller_comments:"nuheuhcbhd", contact:"0322-6173892",email:"abc@gmail.com" },
    { img:"Prius.jpg",title: "Prius", location: "faisalabad", price :"3350000",rating: "4.2",date_added:"22/3/2022", manufacturer: "toyota", features:"grey, new, tinted windows", desc : "Brand new barely used", seller_comments:"nuheuhcbhd", contact:"0322-6173892",email:"abc@gmail.com"  },
    { img:"beetle.jpg",title: "beetle", location: "islamabad", price :"1350000",rating: "4.7",date_added:"24/5/2022", manufacturer: "volkswagon",features:"grey, new, tinted windows", desc : "Brand new barely used", seller_comments:"nuheuhcbhd", contact:"0322-6173892",email:"abc@gmail.com"  }
  ];

  for (i = 0; i < 6; i++ ){
    db.collection("cars").insertOne(myobjs[i], function(err, res) {
      if (err) throw err;
      console.log("document inserted");
    });
  }
});
