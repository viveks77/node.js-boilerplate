const mongoose = require("mongoose");

const DB_URL = process.env.MONGODB_URL;

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
