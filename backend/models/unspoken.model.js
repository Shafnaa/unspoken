const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const unspokenSchema = new Schema(
  {
    username: { type: String, required: true, maxlength: 24 },
    message: { type: String, required: true, maxlength: 200 },
    to: { type: String, required: true, maxlength: 24 },
  },
  {
    timestamps: true,
  }
);

const Unspoken = mongoose.model("unspoken", unspokenSchema);

module.exports = Unspoken;
