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

exports.getLatestProducts = async (req, res) => {
  try {
    const products = await Product.find({})
      .sort({ createdAt: -1 })
      .populate("category")
      .populate("author", "username profilePicture fullname");

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
    const categoryId = req.params.id;
    const products = await Product.find({ category: categoryId }).populate(
      "category"
    );
    if (products.length === 0) {
      return res.status(404).send("No products found in this category.");
    }
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.getTopAuthors = async (req, res) => {
  try {
    const authors = await Product.aggregate([
      {
        $group: {
          _id: "$author",
          count: { $sum: 1 },
        },
      },
      {
        $sort: { count: -1 },
      },
      {
        $limit: 5,
      },
      {
        $lookup: {
          from: "users", // Ensure this matches the collection name in MongoDB
          localField: "_id",
          foreignField: "_id",
          as: "authorDetails",
        },
      },
      {
        $unwind: {
          path: "$authorDetails",
          preserveNullAndEmptyArrays: false, // Ensures that only documents with non-empty author details are included
        },
      },
      {
        $project: {
          _id: 0, // Exclude this if you don't want to show the ObjectId in the output
          "authorDetails.username": 1,
          "authorDetails.profilePicture": 1,
          count: 1,
        },
      },
    ]);

    res.send(authors);
  } catch (error) {
    console.error("Aggregation error:", error);
    res.status(500).send(error);
  }
};
