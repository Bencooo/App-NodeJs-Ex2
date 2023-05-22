const express = require("express");
const port = 5000;

const app = express();

//Middleware "Resquest"
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.use("/post", require("./routes/post.routes"));

//Start Server
app.listen(port, () => console.log("Le Serveur a démarré au port " + port));
