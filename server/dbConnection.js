const mongoose = require("mongoose");

//connecting to database
mongoose.connect(
  "mongodb+srv://timm-u:Kooliv2rk@cluster0.9jlcu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: { type: String },
  status: { type: String },
});

const Todos = mongoose.model("Todos", TodoSchema);

module.exports = {
  Todos,
};
