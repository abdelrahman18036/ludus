const Cart = require("../models/cart");

exports.addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  try {
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({
        user: userId,
        items: [{ product: productId, quantity }],
      });
    } else {
      const itemIndex = cart.items.findIndex(
        (item) => item.product.toString() === productId
      );
      if (itemIndex > -1) {
        let item = cart.items[itemIndex];
        item.quantity += quantity;
        cart.items[itemIndex] = item;
      } else {
        cart.items.push({ product: productId, quantity });
      }
    }
    cart = await cart.save();
    res.status(201).send(cart);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.params.userId }).populate(
      "items.product"
    );
    if (!cart) {
      return res.status(404).send("Cart not found");
    }
    res.send(cart);
  } catch (error) {
    res.status(500).send(error);
  }
};
