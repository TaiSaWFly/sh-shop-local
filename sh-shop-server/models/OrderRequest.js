const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    userId: { type: String },
    userName: { type: String },
    order: {
      type: String,
      required: true,
    },
    phone: { type: String },
    orderDate: { type: String },
    email: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("OrderRequest", schema);
