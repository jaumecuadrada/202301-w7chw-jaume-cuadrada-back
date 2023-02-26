import request from "supertest";
import { MongoMemoryServer } from "mongodb-memory-server";
import connectDataBase from "../../database/connectDataBase";
import mongoose from "mongoose";
import { app } from "..";

let mongoDbServer: MongoMemoryServer;

beforeAll(async () => {
  mongoDbServer = await MongoMemoryServer.create();
  const mongoServerUrl = mongoDbServer.getUri();

  await connectDataBase(mongoServerUrl);
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongoDbServer.stop();
});

describe("Given a friends endpoint", () => {
  describe("When it receives a request to /friends with the get method", () => {
    test("Then it should response a 200 code status", async () => {
      await request(app).get("/friends").expect(200);
    });
  });
});
