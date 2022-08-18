const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv").config();

let db = null;
const app = express();
const port = process.env.PORT || 5000;

//Middlewares
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log("Development mode");
}

if (process.env.NODE_ENV === "development") {
  db = process.env.DB_LOCAL;
} else {
  db = process.env.DB_ATLAS.replace("<password>", process.env.DB_PASSWORD);
}

//Api routes
app.use("/api/v1/notes", require("./routes/noteRoutes"));

//Database
(async () => {
  try {
    await mongoose.connect(db);
    console.log('Connected to database successfully...');

    app.listen(port, () => console.log(`App running on port ${port}...`));
  } catch (error) {}
})();
