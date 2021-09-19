const mongoose = require("mongoose");

const { DATABASE_URL, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME } =
  process.env;

mongoose.connect(
  `mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@cluster0.zxbfd.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`,
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
