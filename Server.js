const express = require("express");
const routes = require("./src/routes/index.js");

const PORT = 3333;
const app = express();

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Servidor Iniciado na porta ${PORT}: http://localhost:${PORT}`);
});
