import express, { Express } from "express";
import { movieRoutes } from "../../api/movies/movieRoutes";

export const createApp = (): Express => {
  console.log(process.env.MEMORY_REPOSITORIES);

  const app = express();

  app.use("/movies", movieRoutes);

  return app;
};
