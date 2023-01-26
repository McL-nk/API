const { authJwt } = require("../middlewares");
const controller = require("../controllers/server.controller")
module.exports = function(app) {
    app.get("/api/server", [authJwt.verifyToken], controller.getServer);

    app.post("/api/server/name", [authJwt.verifyToken], controller.changeName);

    app.post("/api/server/plugin", [authJwt.verifyToken], controller.changeUUID);

    app.post("/api/server/webhook", [authJwt.verifyToken], controller.changeWebhook);

    app.post("/api/server/event", [authJwt.verifyToken], controller.changeEvent);
}