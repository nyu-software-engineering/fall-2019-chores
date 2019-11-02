const mongoose = require("mongoose");
// const Chore = require("../src/chore").Chore;
// const Household = require("../src/household").Household;
const Person = require("../src/person").Person;

mongoose.model("Chore", Chore);
// mongoose.model("Household", Household);
// mongoose.model("Person", Person);

mongoose.connect("mongodb://localhost/housekeeper", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
