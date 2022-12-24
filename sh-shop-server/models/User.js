const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    userName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    country: { type: String },
    avatar: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", schema);
