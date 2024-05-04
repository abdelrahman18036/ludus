const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  dateOrdered: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, default: "Successful" },
});

module.exports = mongoose.model("Order", orderSchema);
