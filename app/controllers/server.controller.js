const db = require("../models")

const Server = db.server
const User = db.user

exports.getServer = (req, res) => {
  let UUID = req.query.UUID
  User.findById(req.userId).exec((err, user) => {
    const serverIds = user.servers
    let foundserver = false

    for (const server of serverIds) {

      if (server == UUID) {

        Server.findById(server).exec((err, server) => {

          foundserver = true
          if (server) {
            server.accepted = true

            return res.status(200).send({
              server,
              accepted: true
            })
          } else if (err) {
            return res.status(500).send(err)
          }



        })
      }

    }
    if (foundserver == true) return


  })

}

exports.changeName = (req, res) => {
  let server2
  let UUID = req.body.params.UUID
  User.findById(req.userId).exec((err, user) => {
    const serverIds = user.servers
    let foundserver = false
    console.log(req.body.params)
    for (const server of serverIds) {

      if (server == UUID) {
        server2 = server
        Server.findByIdAndUpdate(server2, {
          name: `${req.body.params.Name}`
        }, {
          upsert: true,
          new: true
        }).exec((err) => {
          foundserver = true
          Server.findById(server2).exec((err, server) => {
            if (server) {
              server.accepted = true
              return res.status(200).send({
                server,
                accepted: true
              })
            } else if (err) {
              return res.status(500).send(err)
            }
          })




        })
      }

    }
    if (foundserver == true) return


  })
}

exports.changeUUID = (req, res) => {
  let server2
  let UUID = req.body.params.UUID

  User.findById(req.userId).exec((err, user) => {
    const serverIds = user.servers
    let foundserver = false
  
    for (const server of serverIds) {

      if (server == UUID) {
        server2 = server
        Server.findByIdAndUpdate(server2, {
          UUID: `${req.body.params.PLUGIN}`
        }, {
          upsert: true,
          new: true
        }).exec((err) => {
          foundserver = true
          Server.findById(server2).exec((err, server) => {
            if (server) {
              server.accepted = true
              return res.status(200).send({
                server,
                accepted: true
              })
            } else if (err) {
              return res.status(500).send(err)
            }
          })




        })
      }

    }
    if (foundserver == true) return


  })
}

exports.changeWebhook = (req, res) => {
  let server2
  let UUID = req.body.params.UUID
 
  User.findById(req.userId).exec((err, user) => {
    const serverIds = user.servers
    let foundserver = false
    
    for (const server of serverIds) {

      if (server == UUID) {
        server2 = server
        Server.findByIdAndUpdate(server2, {
          webhook: `${req.body.params.WEBHOOK}`
        }, {
          upsert: true,
          new: true
        }).exec((err) => {
          foundserver = true
          Server.findById(server2).exec((err, server) => {
            if (server) {
              server.accepted = true
              return res.status(200).send({
                server,
                accepted: true
              })
            } else if (err) {
              return res.status(500).send(err)
            }
          })




        })
      }

    }
    if (foundserver == true) return


  })
}

exports.changeEvent = (req, res) => {
 
  let server2
  let UUID = req.body.params.UUID
 
  User.findById(req.userId).exec((err, user) => {
    const serverIds = user.servers
    let foundserver = false
    
    for (const server of serverIds) {

      if (server == UUID) {
        server2 = server
        Server.findByIdAndUpdate(server2, {
          $set: {
            [`Events.${req.body.params.Event}`]: req.body.params.State
          }
        }, {
          upsert: true,
          new: true
        }).exec((err) => {
          foundserver = true
          Server.findById(server2).exec((err, server) => {
            console.log(server)
            if (server) {
              server.accepted = true
              return res.status(200).send({
                server,
                accepted: true
              })
            } else if (err) {
              return res.status(500).send(err)
            }
          })




        })
      }

    }
    if (foundserver == true) return


  })
}