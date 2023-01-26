
const db = require("../models");
const User = db.user
const Server = db.server
exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };

  exports.getServers =  (req, res) => {

    let servers = []
   User.findById(req.userId).exec((err, user) => {
      const serverIds = user.servers


     for(const server of serverIds){
  
      Server.findById(server).exec((err, server) => {
        servers.push({name: server.name, id: server._id})
    
        if((servers.length == serverIds.length)){
   
      res.status(200).send(servers)
    }
      })
    }
 
    
   
    })
    
  }

  exports.addServer = (req, res) => {

  const server = new Server({
    name: `Server 1`
  })
   server.save(async (err, server) => {

    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    await User.findByIdAndUpdate(req.userId, {$push: {servers: server._id}})
    
     res.status(200).send(server._id)
    }
   )
  
  }