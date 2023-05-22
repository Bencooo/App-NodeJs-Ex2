const express = require("express");
const port = 5000;

const app = express();

app.get("/post", (req, res) => {
    res.json({ message: "Voici les données" });
});

//Start Server
app.listen(port, () => console.log("Le Serveur a démarré au port " + port));
