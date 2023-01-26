const mongoose = require("mongoose");
const Service = mongoose.model(
  "Service",
  new mongoose.Schema({
   name: {
    type: String
   },
   CallbackURL: {
    type: String
   },
   Events: [{
     type: String
   }]
  
  })
);
module.exports = Service;