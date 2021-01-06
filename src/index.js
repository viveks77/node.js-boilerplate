const express = require("express");
const morgan = require("morgan");
require("./db/mongodb");
const app = express();
const userRouter = require("./routers/userRouter");

const port = process.env.PORT;

app.use(express.json());
app.use(morgan("combined"));
app.use(userRouter);

app.listen(port, (req, res) => {
  console.log("server running on port : " + port);
});
