// MAIN BACKEND FILE
require('dotenv').config();
const MovieModel = require("./database/movies");
const UsersModel = require("./database/users");
const express = require("express");
var cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());
//import mongoose
var mongoose = require('mongoose');
const { json } = require("express");
const { Route } = require('express');
//set up default mongoose conection
var mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log("CONNECTION ESTABLISHED"));




app.get("/",(req,res)=>{
   return res.json({"WELCOME": `TO MY BACK END BookMyShow SOFTWARE`});
   
});

// Route              /movies
// Description        Get all movies
// Access             PUBLIC
// Parameter          NONE
// Method             Get


app.get("/movies", async (req,res)=>{
    const getAllMovies = await MovieModel.find();
    return res.json(getAllMovies);
 
});

// Route              /movies/:id
// Description        Get a movies
// Access             PUBLIC
// Parameter          NONE
// Method             Get


app.get("/movies/:id", async (req,res)=>{
    const {id} = req.params;
    const getMovie = await MovieModel.findOne({_id: id});
    return res.json(getMovie);
});

// Route              /user-register`
// Description        Get a movies
// Access             PUBLIC
// Parameter          NONE
// Method             post

// http://localhost:5000/user-register
app.post("/user-register", async (req,res)=>{
    const addNewUser = await UsersModel.create(req.body);
  return res.json({ UserAdded: addNewUser, message: "User was added !!!" });
});






app.listen(process.env.PORT || 5000, ()=>{
    console.log("MY EXPRESS APP IS RUNNING....");
})



