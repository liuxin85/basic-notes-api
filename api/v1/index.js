const express = require("express");

var notesRouter = express.Router();

notesRouter.get("/", (request, response) => {
  const notes = [
    {
      text: "Muhan Enana",
      link: "https://twitch.tv/codewithahsan",
    },
    {
      text: "mehdi Rajani",
      link: "https://foodpand.pk",
    },
  ];
  response.json({ notes });
});

notesRouter.get("/dummy", (request, response) => {
  response.json({ text: "dummy" });
});

module.exports = {
  notesRouter,
};
