const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://user1:user1@cluster0.zxbfd.mongodb.net/notes-db?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
// mongoose.connect("mongodb://localhost:27017/notes-db", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're coonected!
  console.log("DB was connected");
});
