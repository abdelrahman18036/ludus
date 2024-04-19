const Product = require("../models/product");

exports.createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).send(newProduct);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send("Product not found");
    }
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      return res.status(404).send("Product not found");
    }
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).send("Product not found");
    }
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.searchProducts = async (req, res) => {
  try {
    const { name } = req.query;
    const products = await Product.find({ name: new RegExp(name, "i") });
    res.json(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getProductsByCategory = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.id });
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
};
