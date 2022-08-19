const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv").config();

let db = null;
const app = express();

//Middlewares
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

if (process.env.NODE_ENV === "development") {
  db = process.env.DB_LOCAL;
  app.use(morgan("dev"));
} else {
  db = process.env.DB_ATLAS.replace("<password>", process.env.DB_PASSWORD);
}

//Api routes
app.use("/api/v1/notes", require("./routes/noteRoutes"));

//Database
(() => {
  const port = process.env.PORT || 5000;
  try {
    mongoose.connect(db);
    console.log("Connected to database successfully...");

    app.listen(port, () => console.log(`App running on port ${port}...`));
  } catch (err) {
    console.log(err);
    process.exit();
  }
})();
