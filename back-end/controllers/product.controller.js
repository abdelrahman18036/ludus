const Product = require("../models/product");
const Category = require("../models/category");

exports.createProduct = async (req, res) => {
  const { category, ...productData } = req.body;

  try {
    // Check if the category already exists
    let categoryDoc = await Category.findOne({ name: category });

    // If the category doesn't exist, create it
    if (!categoryDoc) {
      categoryDoc = new Category({ name: category });
      await categoryDoc.save();
    }

    // Create the product with the category ID
    const newProduct = new Product({
      ...productData,
      category: categoryDoc._id,
      author: req.userId,
    });

    await newProduct.save();
    res.status(201).send(newProduct);
  } catch (error) {
    console.error("Failed to create product:", error);
    res.status(500).send(error);
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    let products = await Product.find({})
      .populate("category")
      .populate("author", "username profilePicture");

    if (!products.length) {
      res.status(404).send("No products found.");
      return;
    }

    res.send(products);
  } catch (error) {
    console.error("Error:", error);
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
    const categoryName = req.params.name;
    const products = await Product.find({ category: categoryName });
    if (products.length === 0) {
      return res.status(404).send("No products found in this category.");
    }
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
};
