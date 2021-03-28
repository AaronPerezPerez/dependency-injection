import request from "supertest";
import { createApp } from "./test/utils/createApp";

describe("Default test", () => {
  it("should work", async (end) => {
    const app = createApp();
    const { body } = await request(app).get("/movies");
    console.log(body);

    end();
  });
});
