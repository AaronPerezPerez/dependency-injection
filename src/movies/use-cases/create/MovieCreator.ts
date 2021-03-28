import { MovieRepository } from "../../domain/MovieRepository";
import { Movie } from "../../domain/Movie";

export class MovieCreator {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute(title: string, durationInMinutes: number, releasedAt: Date): Promise<void> {
    /**
     * Here we can check everything we want before saving
     * **/

    await this.movieRepository.save(new Movie(title, durationInMinutes, releasedAt));
  }
}
