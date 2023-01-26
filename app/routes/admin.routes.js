const { authJwt } = require("../middlewares");
const controller = require("../controllers/admin.controller")
module.exports = (app) => {
    app.get("/api/admin/general", [authJwt.verifyToken, authJwt.isAdmin], controller.general)
}