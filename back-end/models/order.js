const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, required: true },
    },
  ],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  dateOrdered: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, default: "Pending" },
});

module.exports = mongoose.model("Order", orderSchema);
