const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const ENCRY_KEY = process.env.JWT_ENCRY_KEY;

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");

    const decoded_id = jwt.verify(token, ENCRY_KEY);

    const user = await User.findOne({
      _id: decoded_id.id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error("Invalid Auth token");
    }

    req.user = user;
    req.token = token;
    next();
  } catch (e) {
    res.status(401).send(e);
  }
};

module.exports = auth;
