const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    userId: { type: String },
    order: {
      type: String,
      required: true,
    },
    orderDate: { type: String },
    products: [{ type: Object }],
    status: { type: String },
    shipDate: { type: String },
    total: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = model("OrderHistory", schema);
