const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    _id: { type: String },
    name: {
      type: String,
      required: true,
    },
    hex: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Color", schema);
