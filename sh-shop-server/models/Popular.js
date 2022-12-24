const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    _id: { type: String },
    name: { type: String },
    products: [],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Popular", schema);
