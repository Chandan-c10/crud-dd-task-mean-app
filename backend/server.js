// server.js

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Enable CORS
app.use(cors());

// parse JSON body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB URI for EC2
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/testdb";

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to the database!"))
  .catch((err) => {
    console.error("Cannot connect to the database!", err);
    process.exit(1);
  });

// test route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Test application." });
});

// routes
require("./app/routes/turorial.routes")(app);

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
