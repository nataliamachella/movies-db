const express = require("express");
const morgan = require("morgan");

const routes = require("./routes/routes");
const app = express();

app.use(morgan("dev"));
app.use(routes);

app.listen(4000);
console.log("Server on port 4000");
