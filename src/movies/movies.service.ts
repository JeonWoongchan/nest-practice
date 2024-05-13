import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    // URI에서 받아오는 값은 string으로 받아옴 -> id string으로 받아서 number로 바꿔써야됨
    // -> ValidationPipe의 transform: true 덕분에 number로 써도됨(main.ts에 정의)
    const movie = this.movies.find((movie) => movie.id === id);

    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} is not found.`);
    }

    return movie;
  }

  remove(id: number) {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }

  create(createMovieDto: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...createMovieDto,
    });
  }

  update(id: number, updateData: UpdateMovieDto) {
    const movie = this.getOne(id);
    this.remove(id);
    this.movies.push({ ...movie, ...updateData });
  }
}
