const express = require("express");
const morgan = require("morgan");
const connection = require("./db");
const routes = require("./routes/routes");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", routes);

app.get("/", (req, res) => {
  res.json({ info: "Node.js, Express, and Postgres API" });
});

app.listen(4000);
console.log("Server on port 4000");
