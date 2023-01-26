const db = require("../models");
const User = db.user;
const Role = db.role;

exports.general = async (req, res) => {
    const users = await User.countDocuments();
    const data = {
        users: users
    } 
     res.status(200)
     return res.json(data)
}