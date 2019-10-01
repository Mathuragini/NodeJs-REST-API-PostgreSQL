const express = require("express");
const app = express();
const pgrt = require("./route/postgresRoute");

app.use(express.json());

app.use("/", pgrt);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port Number ${PORT}`);
});
