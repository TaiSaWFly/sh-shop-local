const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    imgUrl: { type: String },
    otherImg: [{ type: Object }],
    name: { type: String },
    prices: { type: Object },
    articleNumber: { type: String },
    rate: { type: Number },
    numberOfSales: { type: Number },
    collectionId: { type: Schema.Types.String, ref: "Collection" },
    categoryId: { type: Schema.Types.String, ref: "Category" },
    newArrivals: { type: Boolean },
    sizes: [{ type: Schema.Types.String, ref: "Size" }],
    colors: [{ type: Schema.Types.String, ref: "Color" }],
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Product", schema);
