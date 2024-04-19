const supertest = require("supertest");
const app = require("../server");
const mongoose = require("mongoose");
const User = require("../models/user");
const Product = require("../models/product");
const Category = require("../models/category");
const Order = require("../models/order");
require("dotenv").config();

const request = supertest(app);

beforeAll(async () => {
  console.log(process.env.TEST_MONGO_URI);
  await mongoose.connect(process.env.TEST_MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("API Tests", () => {
  describe("User Endpoints", () => {
    test("Register user", async () => {
      const res = await request.post("/api/users/register").send({
        username: "testuser",
        email: "test@example.com",
        password: "password123",
      });
      expect(res.status).toBe(201);
    });

    test("Login user", async () => {
      const res = await request.post("/api/users/login").send({
        email: "test@example.com",
        password: "password123",
      });
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("accessToken");
    });
  });

  describe("Product Endpoints", () => {
    let categoryId;

    beforeAll(async () => {
      const category = await new Category({
        name: "Electronics",
        description: "Electronic items",
      }).save();
      categoryId = category._id;
    });

    test("Create product", async () => {
      const res = await request.post("/api/products").send({
        name: "Laptop",
        description: "High performance laptop",
        price: 1200,
        category: categoryId,
        stock: 10,
      });
      expect(res.status).toBe(201);
    });

    test("Get products", async () => {
      const res = await request.get("/api/products");
      expect(res.status).toBe(200);
    });
  });

  describe("Category Endpoints", () => {
    test("Create category", async () => {
      const res = await request.post("/api/categories").send({
        name: "Books",
        description: "Various books",
      });
      expect(res.status).toBe(201);
    });

    test("Get categories", async () => {
      const res = await request.get("/api/categories");
      expect(res.status).toBe(200);
    });
  });

  describe("Order Endpoints", () => {
    let userId, productId;

    beforeAll(async () => {
      const user = await new User({
        username: "buyer",
        email: "buyer@example.com",
        password: "password",
      }).save();
      userId = user._id;
      const product = await new Product({
        name: "Table",
        description: "Wooden table",
        price: 150,
        stock: 5,
      }).save();
      productId = product._id;
    });

    test("Create order", async () => {
      const res = await request.post("/api/orders").send({
        products: [{ product: productId, quantity: 1 }],
        user: userId,
      });
      expect(res.status).toBe(201);
    });

    test("Get orders", async () => {
      const res = await request.get("/api/orders");
      expect(res.status).toBe(200);
    });
  });
});
