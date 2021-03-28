import { Router } from "express";
import { MovieCreator } from "../../movies/use-cases/create/MovieCreator";
import { MovieRepositoryMemory } from "../../movies/infrastructure/MovieRepositoryMemory";

export const movieRoutes = Router();

//TODO: Implement a real repository here
const movieRepository = process.env.MEMORY_REPOSITORIES ? new MovieRepositoryMemory() : new MovieRepositoryMemory();

movieRoutes.get("/", async (_req, res) => {
  res.json({ status: "HERE" });
});

movieRoutes.post("/", async (req, res) => {
  const movieCreator = new MovieCreator(movieRepository);

  // First we should validate the given data.

  await movieCreator.execute(req.body.title, req.body.durationInMinutes, new Date(req.body.releasedAt));
  console.log(movieRepository);
  res.send({ status: "ok" });
});
