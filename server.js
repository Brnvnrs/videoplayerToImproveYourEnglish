const express = require("express");

const app = express();

app.use(express.static("public"));

app.listen(3000, () => {
    console.log("servidor funcionando en http://localhost:3000")
});

//to run the server, i need to put it in the termianl: node server.js and everything in the folder public will be displayed