const express = require("express");
const path = require("path");

const app = express();
const port = 80;

app.use(express.static("/var/wwww"));

app.get("/", (req, res) => {
  res.sendFile("/var/www/index.html");
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
