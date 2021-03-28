import { Router } from "express";
import { MovieCreator } from "../../movies/use-cases/create/MovieCreator";
import { MovieRepositoryMemory } from "../../movies/infrastructure/MovieRepositoryMemory";

export const movieRoutes = Router();
const useFakeRepositories = true;
const movieRepository = useFakeRepositories ? new MovieRepositoryMemory() : new MovieRepositoryMemory();
const movieCreator = new MovieCreator(movieRepository);

movieRoutes.get("/", async (_req, res) => {
  res.json({ status: "HERE" });
});

movieRoutes.post("/", async (req, res) => {
  // First we should validate the given data.

  await movieCreator.execute(req.body.title, req.body.durationInMinutes, new Date(req.body.releasedAt));
  console.log(movieRepository);
  res.send({ status: "ok" });
});
