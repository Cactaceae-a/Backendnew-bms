const mongoose = require("mongoose");

//create publication schema
const MoviesSchema = mongoose.Schema({
      image: String,
      title: String,
      actor: String,

});

const MovieModel = mongoose.model("movies", MoviesSchema);

      module.exports = MovieModel;