const express = require("express");
const path = require("path");

const app = express();
const port = 80;
const root = "/var/www";

app.use(express.static(root));

app.get("/", (req, res) => {
  const folderPath = req.query.folder;

  if (folderPath) {
    const indexPath = path.join(root, folderPath, "index.html");
    res.sendFile(indexPath);
  } else {
    res.status(400).send("Путь к папке не указан");
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
