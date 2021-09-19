const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

require("./db");

app.use(express.json());

const { notesRouter } = require("./api/v1/index");

app.use(cors());

// root

app.get("/", (request, response) => {
  response.send("Hello world!");
});

app.use("/notes", notesRouter);

app.listen(port, () => {
  console.log(`Notes backend app running on port http://localhost:${port}`);
});
