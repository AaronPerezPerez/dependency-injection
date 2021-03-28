import express, { Express } from "express";
import { movieRoutes } from "../../api/routes/movieRoutes";

export const createApp = (): Express => {
  const app = express();

  app.use("/movies", movieRoutes);

  return app;
};
