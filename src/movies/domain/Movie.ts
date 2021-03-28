export class Movie {
  constructor(
    private readonly title: string,
    private readonly durationInMinutes: number,
    private readonly releasedAt: Date,
  ) {}

  toJson() {
    return {
      title: this.title,
      durationInMinutes: this.durationInMinutes,
      releasedAt: this.releasedAt.toISOString(),
    };
  }
}
