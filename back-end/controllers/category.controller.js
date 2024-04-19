const Category = require("../models/category");

exports.createCategory = async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(201).send(newCategory);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.send(categories);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).send("Category not found");
    }
    res.send(category);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!category) {
      return res.status(404).send("Category not found");
    }
    res.send(category);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).send("Category not found");
    }
    res.send(category);
  } catch (error) {
    res.status(500).send(error);
  }
};
