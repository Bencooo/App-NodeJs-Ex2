const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5000;

//connect into DB
connectDB();
  
const app = express();

//Middleware "Resquest"
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.use("/post", require("./routes/post.routes"));

//Start Server
app.listen(port, () => console.log("Le Serveur a démarré au port " + port));
