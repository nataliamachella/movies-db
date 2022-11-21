const express = require("express");
const app = express();
const db = require("./db/db.js");
const cookieParser = require("cookie-parser");
const usersRoutes = require("./routes/usersRoutes");
const moviesRoutes = require("./routes/moviesRoutes");

const PORT = 4000;

app.use(express.json());
app.use(usersRoutes);
app.use(moviesRoutes);

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello world");
});

db.sync({ force: true })
  .then(() => {
    console.log("DB CONNECTED");
    app.listen(PORT, () => console.log("Server listening on port ", PORT));
  })
  .catch((error) => console.log(error));
