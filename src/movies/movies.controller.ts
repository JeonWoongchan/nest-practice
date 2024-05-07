import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateMovieDto } from './dto/create-movie.dto';

@ApiTags('사용자 API')
@Controller('/movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'All Movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `One Movie id = ${movieId}`;
  }

  @ApiOperation({ summary: '영화 등록 API', description: '영화 추가' })
  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    console.log(createMovieDto);
    return 'create complete';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `remove Movie id = ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `patch Movie id = ${movieId}`;
  }
}
