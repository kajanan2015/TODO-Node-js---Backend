const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  title: String,
  description: String,
});

module.exports = mongoose.model("Employee", employeeSchema);
