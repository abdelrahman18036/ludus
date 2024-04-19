const Order = require("../models/order");
const User = require("../models/user");

exports.placeOrder = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const newOrder = new Order({
      ...req.body,
      user: user._id,
    });

    await newOrder.save();
    res.status(201).send(newOrder);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.send(orders);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getOrderByUserId = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId });
    res.send(orders);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).send("Order not found");
    }
    res.send(order);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Ensures that the updated document is returned
    });
    if (!order) {
      return res.status(404).send("Order not found");
    }
    res.send(order);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).send("Order not found");
    }
    res.send(order);
  } catch (error) {
    res.status(500).send(error);
  }
};
