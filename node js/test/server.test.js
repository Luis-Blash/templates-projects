const request = require("supertest");
const Server = require("../models/server");
const server = new Server();
const app = server.app;

describe("GET /API/USER", () => {
  test("should respond with a 200 status code", async () => {
    const response = await request(app).get("/api/user");
    expect(response.status).toBe(200);
  });

  test("should respond with an array", async () => {
    const response = await request(app).get("/api/user");
    expect(response.body).toBeInstanceOf(Array);
  });
});
