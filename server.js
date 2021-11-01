// import the modules;
const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");
const bodyparser = require("body-parser");



//create the rest object

let app = express();

// enable the cors policy

app.use(cors());


// set the json as MIME Type

app.use(bodyparser.json());

// read the json coming from server


app.use(bodyparser.urlencoded({extended:false}));

// create the client

let mongoshiva = mongodb.MongoClient;


// creating the get request

app.get("/products",(req,res)=>{
    mongoshiva.connect("mongodb+srv://shiva:buntu122@cluster0.5e5dn.mongodb.net/miniproject?retryWrites=true&w=majority",
    (err,connection)=>{
        if(err) throw err;
        else{
            let db = connection.db("miniproject");
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            
        });
    }
  } );
});

//assign the port number

let port = process.env.PORT || 8080;

app.listen(port,()=>{
    console.log("Server Started!!!");
});

