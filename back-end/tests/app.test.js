const supertest = require("supertest");
const app = require("../server");
const mongoose = require("mongoose");
const User = require("../models/user");

const NFT = require("../models/product");
const Category = require("../models/category");
require("dotenv").config();

const request = supertest(app);

beforeAll(async () => {
  const testMongoUri = process.env.MONGO_URI;
  console.log("Connecting to:", testMongoUri);
  await mongoose.connect(testMongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("NFT Marketplace API Tests", () => {
  let userToken;
  let categoryId, userId, nftId;

  describe("User Endpoints", () => {
    test("Register user", async () => {
      const res = await request.post("/api/users/register").send({
        username: `testuser_${Date.now()}`,
        fullname: "Test User",
        email: `test_${Date.now()}@example.com`,
        password: "password123",
        isAdmin: false,
      });
      expect(res.status).toBe(200);
    });

    test("Login user", async () => {
      const user = {
        email: "test_1715522703745@example.com",
        password: "password123",
      };
      const res = await request.post("/api/users/login").send(user);
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("accessToken");
      userToken = res.body.accessToken;
    });
  });

  describe("Category Endpoints", () => {
    test("Create category", async () => {
      const res = await request.post("/api/categories").send({
        name: `Books_${Date.now()}`,
        description: "Various books",
      });
      expect(res.status).toBe(201);
      categoryId = res.body._id;
    });

    test("Get categories", async () => {
      const res = await request.get("/api/categories");
      expect(res.status).toBe(200);
    });
  });

  describe("NFT Endpoints", () => {
    beforeAll(async () => {
      const category = new Category({
        name: `Digital Art_${Date.now()}`,
        description: "Digital artworks",
      });
      await category.save();
      categoryId = category._id;
    });

    test("Create NFT", async () => {
      const nftData = {
        name: "Unique Digital Asset",
        description: "A very unique piece of digital art.",
        price: 11,
        about: "This is a unique digital asset.",
        category: "Digital Art",
        imageUrl:
          "https://res.cloudinary.com/dv1gth8hq/image/upload/v1714851212/em7rofdj6j3no3g6li87.jpg",
        author: userId,
      };
      const res = await request
        .post("/api/nfts")
        .set("x-access-token", `${userToken}`)
        .send(nftData);
      expect(res.status).toBe(201);
      nftId = res.body._id;
    });

    test("Get NFTs", async () => {
      const res = await request.get("/api/nfts");
      expect(res.status).toBe(200);
    });
  });
});
