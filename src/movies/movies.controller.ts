import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { UpdateMovieDto } from './dto/update-movie.dto';

@ApiTags('사용자 API')
@Controller('/movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @ApiOperation({ summary: '영화 전체 조회' })
  @ApiResponse({
    status: 200,
    description: 'success',
  })
  @ApiResponse({
    status: 400,
    description: 'error',
  })
  @Get()
  getAll(): Movie[] {
    return this.movieService.getAll();
  }

  @ApiOperation({ summary: 'id별 영화 조회' })
  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    return this.movieService.getOne(movieId);
  }

  @ApiOperation({ summary: '영화 등록' })
  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.movieService.create(createMovieDto);
  }

  @ApiOperation({ summary: '영화 삭제' })
  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.movieService.remove(movieId);
  }

  @ApiOperation({ summary: '영화 수정' })
  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateMovieDto: UpdateMovieDto) {
    return this.movieService.update(movieId, updateMovieDto);
  }
}
