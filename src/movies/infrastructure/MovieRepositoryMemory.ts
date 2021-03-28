import { MovieRepository } from "../domain/MovieRepository";
import { Movie } from "../domain/Movie";

export class MovieRepositoryMemory implements MovieRepository {
  private movies: Movie[] = [];

  async findAll(): Promise<Movie[]> {
    return this.movies;
  }

  async save(movie: Movie): Promise<void> {
    this.movies.push(movie);
  }
}
