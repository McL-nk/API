const mongoose = require("mongoose");
const Server = mongoose.model(
  "Server",
  new mongoose.Schema({
    
    name: {
      type: String,
      required: true
    },
   UUID: {
     type: String,
     default: " "
   },
   webhook: {
    type: String, 
    default: " "
   },
   Events: {
    player_join: {
      type: Boolean,
      default: true
    },
    player_leave: {
      type: Boolean,
      default: true
    },
    player_death: {
      type: Boolean,
      default: true
    },
    player_chat: {
      type: Boolean,
      default: true
    },
    player_advancement: {
      type: Boolean,
      default: true
    },
   },
   services: [
    {
     type: mongoose.Schema.Types.ObjectId,
     ref: "Service"
   }
   ]
  })
);
module.exports = Server;